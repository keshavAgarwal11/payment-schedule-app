
const pool = require("../config/database");

async function generateQid() {

    let qid;
    let qidExists = true;

    while (qidExists) {

        qid = "QID" + Math.floor(1000 + Math.random() * 9000);

        const check = await pool.query(
            "SELECT id FROM projects WHERE qid = $1",
            [qid]
        );

        qidExists = check.rows.length > 0;
    }

    return qid;
}
module.exports = {
    generateQid
};
