
const express = require("express");

const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { initializeDatabase } = require("./src/config/databaseInit");
const projectRoutes = require("./src/routes/projectRoutes");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/", projectRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

initializeDatabase();



if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
module.exports = app;




