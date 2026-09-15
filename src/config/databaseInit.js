



const fs = require("fs");
const path = require("path");

const pool = require("./database");

async function initializeDatabase() {

    try {

        const result = await pool.query("SELECT NOW()");

        console.log("Database connected successfully!");
        console.log("Database time:", result.rows[0].now);

        const schema = fs.readFileSync(
            path.join(__dirname, "../../database/schema.sql"),
            "utf8"
        );

        await pool.query(schema);

        console.log("Tables are ready!");

    } catch (error) {

        console.error("Database connection failed:");
        console.error(error);

    }
}

module.exports = {
    initializeDatabase
};