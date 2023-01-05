let viewAppBtn = document.getElementById("view-app-btn");

viewAppBtn.addEventListener("click", function(event) {
    console.log("view app btn clicked")
// check on this code:
document.location.replace('/login');

event.preventDefault()});
