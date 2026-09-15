const projectService = require("../services/projectService");

async function createProject(req, res) {

    try {

        // Get data sent by the frontend
        const { name, phone, startDate, projectValue } = req.body;

        const result = await projectService.createProject(
            name,
            phone,
            startDate,
            projectValue
        );

        // Send response
        res.status(201).json({
            message: "Project created successfully",
            project: result.project,
            paymentStages: result.paymentStages
        });

    } 
    // catch (error)

    //  {
    //     console.error("Error creating project:");
    //     console.error(error);

    //     res.status(500).json({
    //         message: "Failed to create project"
    //     });
    // }
// }

catch (error) {

        console.error("Error creating project:");
        console.error(error);

        if (error.message === "Phone number already exists") {

            return res.status(409).json({
                message: "Phone number already exists"
            });

        }

        res.status(500).json({
            message: "Failed to create project"
        });
    }
}

module.exports = {
    createProject
};