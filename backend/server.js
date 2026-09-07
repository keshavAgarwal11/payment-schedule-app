
// const express = require("express");

// const { Pool } = require("pg");


// const fs = require("fs");


// require("dotenv").config();


// const app = express();

// const PORT = 3000;









// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });










// // Middleware
// app.use(express.json());

// // Test API
// app.get("/", (req, res) => {
//     res.send("Payment Schedule Backend is running");
// });








// pool.query("SELECT NOW()", (err, result) => {
//     if (err) {
       
//         // console.error("Database connection failed:", err.message);

//         console.error("Database connection failed:");
//         console.error(err);
//     } else {
//         console.log("Database connected successfully!");
//         console.log("Database time:", result.rows[0].now);
//          const schema = fs.readFileSync("database/schema.sql", "utf8");






//               pool.query(schema, (err) => {
//             if (err) {
//                 console.error("Table creation failed:");
//                 console.error(err);
//             } else {
//                 console.log("Projects table created successfully!");
//             }
//         });

//     }
// });











// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });














// Test database connection
const express = require("express");
const { Pool } = require("pg");
const fs = require("fs");
require("dotenv").config();

const app = express();

const PORT = 3000;

// PostgreSQL connection
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
});

// Middleware
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Payment Schedule Backend is running");
});

// Connect to database
pool.query("SELECT NOW()", (err, result) => {

    if (err) {
        console.error("Database connection failed:");
        console.error(err);
        return;
    }

    console.log("Database connected successfully!");
    console.log("Database time:", result.rows[0].now);

    // Read schema.sql
    const schema = fs.readFileSync("database/schema.sql", "utf8");

    // Create tables if they don't already exist
    pool.query(schema, (err) => {

        if (err) {
            console.error("Table creation failed:");
            console.error(err);
            return;
        }

        console.log("Tables are ready!");

    });

});











// Create a new project
app.post("/api/projects", async (req, res) => {

    try {

        // Get data sent by the frontend
        const { name, phone, startDate, projectValue } = req.body;

        // Generate a QID
        // const qid = "QID" + Math.floor(1000 + Math.random() * 9000);





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

        // Insert project into database
        const result = await pool.query(
            `INSERT INTO projects
            (qid, name, phone, start_date, project_value)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [qid, name, phone, startDate, projectValue]
        );

        // Send response
        res.status(201).json({
            message: "Project created successfully",
            project: result.rows[0]
        });

    } catch (error) {

        console.error("Error creating project:");
        console.error(error);

        res.status(500).json({
            message: "Failed to create project"
        });
    }

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});









// });

// Start server
// const server = app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// server.on("error", (error) => {
//     console.error("Server error:");
//     console.error(error);
// });

// process.on("uncaughtException", (error) => {
//     console.error("Uncaught exception:");
//     console.error(error);
// });

// process.on("unhandledRejection", (error) => {
//     console.error("Unhandled rejection:");
//     console.error(error);
// });
