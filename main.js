const username = document.querySelector("#username")
const password = document.querySelector("#pass")
const btn = document.querySelector("#boton")

btn.addEventListener("click", function (event) {
  event.preventDefault()
  if (username.value == "1") {
    username.classList.add("errorField")
  }
  if (password.value == "1") {
    password.classList.add("errorField")
  }
})

username.addEventListener("keyup", function () {
  username.classList.remove("errorField")
})
password.addEventListener("keyup", function () {
  password.classList.remove("errorField")
})