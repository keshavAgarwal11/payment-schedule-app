const { addMonths } = require("../utils/dateUtils");


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





        function generatePaymentSchedule(projectValue, startDate) {

    return stages.map(stage => {

        const payment = (projectValue * stage.percentage) / 100;

        const paymentDate = addMonths(
            startDate,
            stage.number - 1
        );

        return {
            number: stage.number,
            name: stage.name,
            percentage: stage.percentage,
            payment: payment,
            paymentDate: paymentDate
        };
    });
}





module.exports = {
    generatePaymentSchedule
};



