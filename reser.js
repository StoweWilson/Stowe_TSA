
/*const form = document.getElementById("reservation-form");
form.addEventListener("submit", (event) => {
  log.textContent = `Form Submitted!
  Timestamp: ${event.timeStamp}`;
  event.preventDefault();
})
*/
function toggleNav() {
  menu.classList.toggle("active")
  ham.classList.toggle("active")
}

function logSubmit(event) {
  console.log("name:",document.getElementById("name").value);
  console.log("email:",document.getElementById("email").value);
  console.log("phone:",document.getElementById("phone").value);
  console.log("people:",document.getElementById("adult").value);
  console.log("date:",document.getElementById("date").value);
  console.log("time:",document.getElementById("time").value);
  console.log("message:",document.getElementById("message").value);
  alert("Form has been submitted");
  event.preventDefault();
}

console.log(document.getElementById("name").value);
const form = document.getElementById("reservation-form");
form.addEventListener("submit", logSubmit);

