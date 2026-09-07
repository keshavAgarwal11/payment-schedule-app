const form = document.getElementById("projectForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const startDate = document.getElementById("startDate").value;
    const projectValue = document.getElementById("projectValue").value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Start Date:", startDate);
    console.log("Project Value:", projectValue);

});