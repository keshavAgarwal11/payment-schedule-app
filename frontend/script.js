// const form = document.getElementById("projectForm");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const startDate = document.getElementById("startDate").value;
//     const projectValue = document.getElementById("projectValue").value;

//     console.log("Name:", name);
//     console.log("Phone:", phone);
//     console.log("Start Date:", startDate);
//     console.log("Project Value:", projectValue);

// });







// const form = document.getElementById("projectForm");

// form.addEventListener("submit", async function(event) {

//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const startDate = document.getElementById("startDate").value;
//     const projectValue = document.getElementById("projectValue").value;

//     const projectData = {
//         name: name,
//         phone: phone,
//         startDate: startDate,
//         projectValue: projectValue
//     };

//     try {

//         const response = await fetch("http://localhost:3000/api/projects", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(projectData)
//         });

//         const data = await response.json();

//         console.log("Backend response:", data);

//     } catch (error) {

//         console.error("Error:", error);

//     }

// });


















// const form = document.getElementById("projectForm");

// form.addEventListener("submit", async function(event) {

//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const startDate = document.getElementById("startDate").value;
//     const projectValue = document.getElementById("projectValue").value;

//     const projectData = {
//         name: name,
//         phone: phone,
//         startDate: startDate,
//         projectValue: projectValue
//     };

//     try {

//         const response = await fetch("http://localhost:3000/api/projects", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(projectData)
//         });

//         const data = await response.json();

//         // console.log("Backend response:", data);

//         const projectDetails = document.getElementById("projectDetails");

// projectDetails.innerHTML = `
//     <h2>Project Details</h2>

//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Phone Number</th>
//                 <th>Start Date</th>
//                 <th>Project Value</th>
//                 <th>QID</th>
//             </tr>
//         </thead>

//         <tbody>
//             <tr>
//                 <td>${data.project.name}</td>
//                 <td>${data.project.phone}</td>
//                 <td>${data.project.start_date.substring(0,10)}</td>
//                 <td>${data.project.project_value}</td>
//                 <td>${data.project.qid}</td>
//             </tr>
//         </tbody>
//     </table>






// `;





//     const paymentSchedule = document.getElementById("paymentSchedule");

// let rows = "";

// data.paymentStages.forEach(stage => {

//     rows += `
//         <tr>
//             <td>${stage.number}</td>
//             <td>${stage.name}</td>
//             <td>${stage.percentage}%</td>
//             <td>${stage.payment}</td>
//             <td>${stage.paymentDate}</td>
//         </tr>
//     `;

// });

// paymentSchedule.innerHTML = `
//     <h2>Payment Schedule</h2>

//     <table>
//         <thead>
//             <tr>
//                 <th>Stage</th>
//                 <th>Payment Stage</th>
//                 <th>Percentage</th>
//                 <th>Client Payment</th>
//                 <th>Payment Date</th>
//             </tr>
//         </thead>

//         <tbody>
//             ${rows}
//         </tbody>
//     </table>
// `;

//  catch (error) {

//         console.error("Error:", error);

//     }

// });














// const form = document.getElementById("projectForm");

// form.addEventListener("submit", async function (event) {

//     event.preventDefault();

//     // Get values from form
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const startDate = document.getElementById("startDate").value;
//     const projectValue = document.getElementById("projectValue").value;

//     const projectData = {
//         name: name,
//         phone: phone,
//         startDate: startDate,
//         projectValue: projectValue
//     };

//     try {

//         // Send data to backend
//         const response = await fetch("http://localhost:3000/api/projects", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(projectData)
//         });

//         const data = await response.json();

//         console.log("Backend response:", data);


//         // ========================================
//         // PROJECT DETAILS
//         // ========================================

//         const projectDetails =
//             document.getElementById("projectDetails");

//         projectDetails.innerHTML = `
//             <h2>Project Details</h2>

//             <table>

//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>Start Date</th>
//                         <th>Project Value</th>
//                         <th>QID</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                         <td>${data.project.name}</td>

//                         <td>${data.project.phone}</td>

//                         <td>
//                             ${data.project.start_date.substring(0, 10)}
//                         </td>

//                         <td>
//                             ${data.project.project_value}
//                         </td>

//                         <td>
//                             ${data.project.qid}
//                         </td>
//                     </tr>
//                 </tbody>

//             </table>
//         `;


//         // ========================================
//         // PAYMENT SCHEDULE
//         // ========================================

//         const paymentSchedule =
//             document.getElementById("paymentSchedule");

//         let rows = "";

//         data.paymentStages.forEach(stage => {

//             rows += `
//                 <tr>
//                     <td>${stage.number}</td>
//                     <td>${stage.name}</td>
//                     <td>${stage.percentage}%</td>
//                     <td>${stage.payment}</td>
//                     <td>${stage.paymentDate}</td>
//                 </tr>
//             `;

//         });


//         paymentSchedule.innerHTML = `
//             <h2>Payment Schedule</h2>

//             <table>

//                 <thead>
//                     <tr>
//                         <th>Stage</th>
//                         <th>Payment Stage</th>
//                         <th>Percentage</th>
//                         <th>Client Payment</th>
//                         <th>Payment Date</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     ${rows}
//                 </tbody>

//             </table>
//         `;


  

//  }
//      catch (error) {

//         console.error("Error:", error);

//     }

// });






const form = document.getElementById("projectForm");

let currentProjectData = null;
let currentStartDate = "";


// ======================================================
// FORM SUBMIT
// ======================================================

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const startDate = document.getElementById("startDate").value;
    const projectValue = document.getElementById("projectValue").value;


    const projectData = {
        name: name,
        phone: phone,
        startDate: startDate,
        projectValue: projectValue
    };


    try {

        // ==================================================
        // SEND DATA TO BACKEND
        // ==================================================

        const response = await fetch(
            "http://localhost:3000/api/projects",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(projectData)
            }
        );


        const data = await response.json();


        console.log("Backend response:", data);


        if (!response.ok) {

            alert(data.message || "Failed to create project");

            return;
        }


        // Save project data for PDF
        currentProjectData = data;

        currentStartDate = startDate;


        // ==================================================
        // PROJECT DETAILS
        // ==================================================

        const projectDetails =
            document.getElementById("projectDetails");


        projectDetails.innerHTML = `

            <h2>Project Details</h2>

            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Start Date</th>
                        <th>Project Value</th>
                        <th>QID</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>

                        <td>${data.project.name}</td>

                        <td>${data.project.phone}</td>

                        <td>
                            
                             ${formatDate(currentStartDate)}
                        </td>

                        <td>
                            ${data.project.project_value}
                        </td>

                        <td>
                            ${data.project.qid}
                        </td>

                    </tr>

                </tbody>

            </table>

        `;


        // ==================================================
        // PAYMENT SCHEDULE
        // ==================================================

        const paymentSchedule =
            document.getElementById("paymentSchedule");


        let rows = "";


        data.paymentStages.forEach(stage => {

            rows += `

                <tr>

                    <td>${stage.number}</td>

                    <td>${stage.name}</td>

                    <td>${stage.percentage}%</td>

                    <td>${stage.payment}</td>

                    <td>${stage.paymentDate}</td>

                </tr>

            `;

        });


        paymentSchedule.innerHTML = `

            <h2>Payment Schedule</h2>

            <table>

                <thead>

                    <tr>
                        <th>Stage</th>
                        <th>Payment Stage</th>
                        <th>Percentage</th>
                        <th>Client Payment</th>
                        <th>Payment Date</th>
                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

        `;


        // ==================================================
        // SHOW DOWNLOAD BUTTON
        // ==================================================

        const downloadButton =
            document.getElementById("downloadPdf");


        downloadButton.style.display = "block";


        downloadButton.onclick = function () {

            generatePDF(currentProjectData);

        };


    }

    catch (error) {

        console.error("Error:", error);

        alert("Something went wrong.");

    }

});


// ======================================================
// GENERATE PDF
// ======================================================
async function generatePDF(data) {

    if (!window.jspdf) {

        alert("jsPDF is not loaded.");

        return;
    }


    const { jsPDF } = window.jspdf;


    // ==================================================
    // A4 PAGE
    // ==================================================

    const doc = new jsPDF({

        orientation: "portrait",

        unit: "mm",

        format: "a4"
    });


    const pageWidth = 210;
    const pageHeight = 297;


    // ==================================================
    // LOAD IMAGE
    // ==================================================

    function loadImage(src) {

        return new Promise((resolve, reject) => {

            const img = new Image();

            img.onload = () => resolve(img);

            img.onerror = () => reject(
                new Error("Could not load image: " + src)
            );

            img.src = src;

        });

    }


    // ==================================================
    // LOAD LOGO + FOOTER
    // ==================================================

    const logo =
        await loadImage("../assets/logo.png");

    const footer =
        await loadImage("../assets/footer.png");


    // ==================================================
    // HEADER
    // ==================================================

    doc.addImage(

        logo,

        "PNG",

        0,

        0,

        210,

        53

    );


    // ==================================================
    // PROJECT INFORMATION
    // ==================================================

const projectInfo = [

    [
        "QID",
        data.project.qid
    ],

    [
        "Name",
        data.project.name
    ],

    [
        "Mobile Number",
        data.project.phone
    ],

    [
        "Start Date",
        formatDate(currentStartDate)
    ],

    [
        "Project Value",
        formatAmount(data.project.project_value)
    ]

];


doc.autoTable({

    startY: 70,

    margin: {
        left: 60,
        right: 45
    },

    tableWidth: 100,

    body: projectInfo,

    theme: "grid",

    styles: {

        font: "helvetica",

        fontSize: 8.5,

        cellPadding: 1.7,

        lineColor: [0, 0, 0],

        lineWidth: 0.3,

        textColor: [0, 0, 0],

        valign: "middle",

        minCellHeight: 6.2
    },

    columnStyles: {

        0: {

            cellWidth: 55,

            halign: "center",

            fontStyle: "bold",

            fillColor: [182, 215, 168]
        },

        1: {

            cellWidth: 45,

            halign: "center"
        }
    }

});


    // ==================================================
    // PAYMENT ROWS
    // ==================================================

const paymentRows = [];

data.paymentStages.forEach(stage => {

    paymentRows.push([

        stage.number,

        stage.name,

        stage.percentage + "%",

        formatAmount(stage.payment),

        formatDateLong(stage.paymentDate)

    ]);

});


    // ==================================================
    // TOTAL ROW
    // ==================================================

   paymentRows.push([

    "",

    "",

    "100%",

    formatAmount(data.project.project_value),

    ""

]);



    // ==================================================
    // PAYMENT TABLE
    // ==================================================

 
const paymentStartY = doc.lastAutoTable.finalY + 3;


doc.autoTable({

    startY: paymentStartY,

    margin: {

        left: 12,

        right: 12
    },

    tableWidth: 186,

    head: [[

        "Stage\nnumber",

        "Customer Payment\nstage",

        "Customer\npayment %",

        "Client stage\npayment",

        "Payment Date"

    ]],

    body: paymentRows,

    theme: "grid",

    styles: {

        font: "helvetica",

        fontSize: 6.8,

        cellPadding: 1.1,

        lineColor: [0, 0, 0],

        lineWidth: 0.25,

        textColor: [0, 0, 0],

        valign: "middle",

        overflow: "linebreak",

        minCellHeight: 5.5
    },

    headStyles: {

        fillColor: [246, 200, 145],

        textColor: [0, 0, 0],

        fontStyle: "bold",

        halign: "center",

        valign: "middle",

        fontSize: 7,

        cellPadding: 1.3,

        minCellHeight: 9
    },

    columnStyles: {

        0: {

            cellWidth: 20,

            halign: "center"
        },

        1: {

            cellWidth: 73,

            halign: "left"
        },

        2: {

            cellWidth: 22,

            halign: "center"
        },

        3: {

            cellWidth: 34,

            halign: "right"
        },

        4: {

            cellWidth: 37,

            halign: "center"
        }

    },

    // Make total row bold
    didParseCell: function (hookData) {

        if (

            hookData.section === "body" &&

            hookData.row.index === paymentRows.length - 1

        ) {

            hookData.cell.styles.fontStyle = "bold";

        }

    }

});


    // ==================================================
    // FOOTER
    // ==================================================

    doc.addImage(

        footer,

        "PNG",

        0,

        254,

        210,

        42

    );


    // ==================================================
    // SAVE
    // ==================================================

    doc.save(

        `${data.project.qid}-payment-schedule.pdf`

    );

}


// ======================================================
// FORMAT DATE
// DD/MM/YYYY
// ======================================================

function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const datePart = String(dateString).substring(0, 10);

    const parts = datePart.split("-");

    if (parts.length !== 3) {
        return dateString;
    }

    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    return `${day}/${month}/${year}`;
}


// ======================================================
// FORMAT LONG DATE
// Example: 11 June 2026
// ======================================================

function formatDateLong(dateString) {

    if (!dateString) {

        return "";

    }


    const datePart =
        String(dateString).substring(0, 10);


    const parts =
        datePart.split("-");


    if (parts.length !== 3) {

        return dateString;

    }


    const year = Number(parts[0]);

    const month = Number(parts[1]);

    const day = Number(parts[2]);


    const monthNames = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];


    return `${String(day).padStart(2, "0")} ${monthNames[month - 1]} ${year}`;

}


// ======================================================
// FORMAT AMOUNT
// ======================================================

function formatAmount(value) {

    const number = Number(value);


    if (!Number.isFinite(number)) {

        return value;

    }


    return number.toFixed(2);

}




















