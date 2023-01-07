

let visitDashBtn = document.getElementById("visit-dashboard");

visitDashBtn.addEventListener("click", function(event) {
    console.log("dashboard btn clicked")
// check on this code:
document.location.replace('/dashboard');

event.preventDefault()});
