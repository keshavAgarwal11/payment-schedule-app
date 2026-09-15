const pool = require("../config/database");
const { generateQid } = require("../utils/qidGenerator");
const { generatePaymentSchedule } = require("./paymentService");

async function createProject(name, phone, startDate, projectValue) {

    const phoneCheck = await pool.query(
        "SELECT id FROM projects WHERE phone = $1",
        [phone]
    );

    if (phoneCheck.rows.length > 0) {
        throw new Error("Phone number already exists");
    }

    const qid = await generateQid();

    const result = await pool.query(
        `INSERT INTO projects
        (qid, name, phone, start_date, project_value)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [qid, name, phone, startDate, projectValue]
    );

    const finalPaymentStages = generatePaymentSchedule(
        projectValue,
        startDate
    );

    for (const stage of finalPaymentStages) {

        await pool.query(
            `INSERT INTO payment_stages
            (project_id, stage_number, stage_name, customer_percentage, client_payment, payment_date)
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                result.rows[0].id,
                stage.number,
                stage.name,
                stage.percentage,
                stage.payment,
                stage.paymentDate
            ]
        );

    }

    return {
        project: result.rows[0],
        paymentStages: finalPaymentStages
    };
}

module.exports = {
    createProject
};