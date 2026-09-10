
// const express = require("express");

// const { Pool } = require("pg");


// const fs = require("fs");


// require("dotenv").config();


// const app = express();

// const PORT = 3000;
6


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


const express = require("express");
const { Pool } = require("pg");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = 3000;


app.use(cors());


// PostgreSQL connection
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    family: 4,
    ssl: {
        rejectUnauthorized: false
    }
});

// Middleware
app.use(express.json());

// Test API
// app.get("/", (req, res) => {
//     res.send("Payment Schedule Backend is running");
// });






// Serve frontend files
// app.use(express.static(path.join(__dirname, "frontend")));

// // Serve assets
// app.use("/assets", express.static(path.join(__dirname, "assets")));

// // Open frontend
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "index.html"));
// });

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
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
    // const schema = fs.readFileSync("database/schema.sql", "utf8");


    const schema = fs.readFileSync(
    path.join(__dirname, "database", "schema.sql"),
    "utf8"
);

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














function addMonths(dateString, months) {

    const date = new Date(dateString + "T00:00:00Z");

    const day = date.getUTCDate();

    const targetMonth = date.getUTCMonth() + months;

    const targetYear = date.getUTCFullYear() +
        Math.floor(targetMonth / 12);

    const finalMonth = targetMonth % 12;

    // Find the last day of the target month
    const lastDay = new Date(
        Date.UTC(targetYear, finalMonth + 1, 0)
    ).getUTCDate();

    const finalDay = Math.min(day, lastDay);

    const result = new Date(
        Date.UTC(targetYear, finalMonth, finalDay)
    );

    return result.toISOString().split("T")[0];
}





// Create a new project
app.post("/api/projects", async (req, res) => {

    try { 

        // Get data sent by the frontend
        const { name, phone, startDate, projectValue } = req.body;

        // Generate a QID
        // const qid = "QID" + Math.floor(1000 + Math.random() * 9000);


        const phoneCheck = await pool.query(
    "SELECT id FROM projects WHERE phone = $1",
    [phone]
);



if (phoneCheck.rows.length > 0) {
    return res.status(409).json({
        message: "Phone number already exists"
    });
}


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





          // 4. Payment stage definitions ← ADD HERE
        const stages = [
            { number: 1, name: "Mobilisation Design & Drawing", percentage: 8 },
            { number: 2, name: "Foundation Works", percentage: 12 },
            { number: 3, name: "GF Structural works", percentage: 12 },
            { number: 4, name: "FF Structural works", percentage: 12 },
            { number: 5, name: "SF Structural works", percentage: 11 },
            { number: 6, name: "Internal Plastering, Water Proofing, Plumbing pipeline works (Concealed & External line), Electrical Chasing works", percentage: 10 },
            { number: 7, name: "GF Flooring & Wall Cladding", percentage: 3 },
            { number: 8, name: "FF Flooring & Wall Cladding", percentage: 3 },
            { number: 9, name: "SF Flooring & Wall Cladding", percentage: 3 },
            { number: 10, name: "Parapet Wall, External Plastering & Internal Putty works", percentage: 6 },
            { number: 11, name: "Door, Window & Electrical wiring", percentage: 9 },
            { number: 12, name: "Fabrication & Painting works", percentage: 3 },
            { number: 13, name: "Final coat painting, Plumbing Fittings, Electrical fittings", percentage: 6 },
            { number: 14, name: "Miscellaneous work & Handing over", percentage: 2 }
        ];













    const paymentStages = stages.map(stage => {

    const payment = (Number(projectValue) * stage.percentage) / 100;

    return {
        number: stage.number,
        name: stage.name,
        percentage: stage.percentage,
        payment: payment
    };

});









   const finalPaymentStages = paymentStages.map(stage => {

    const paymentDate = addMonths(startDate, stage.number - 1);

    return {
        ...stage,
        paymentDate: paymentDate
    };

});











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

        // Send response
        res.status(201).json({
            message: "Project created successfully",
            project: result.rows[0],
            paymentStages: finalPaymentStages
        });

    } catch (error) {

        console.error("Error creating project:");
        console.error(error);

        res.status(500).json({
            message: "Failed to create project"
        });
    }

});


















app.get("/api/projects/:qid", async (req, res) => {
    try {
        const { qid } = req.params;

        const projectResult = await pool.query(
            "SELECT * FROM projects WHERE qid = $1",
            [qid]
        );

        if (projectResult.rows.length === 0) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        const project = projectResult.rows[0];

        const stagesResult = await pool.query(
            `SELECT *
             FROM payment_stages
             WHERE project_id = $1
             ORDER BY stage_number`,
            [project.id]
        );

        res.json({
            project: project,
            paymentStages: stagesResult.rows
        });

    } catch (error) {
        console.error("Error fetching project:");
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch project"
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
