let todaysConsBtn = document.getElementById("todays-consumption-btn");

todaysConsBtn.addEventListener("click", function(event) {
    console.log("todays cons. btn clicked")
// check on this code:
document.location.replace('/DailyConsumption');

event.preventDefault()});
