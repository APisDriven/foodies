
const today = dayjs()

const currentDay = document.getElementById("date");
currentDay.innerHTML = today.format("dddd, MMMM D")
