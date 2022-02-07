const themeToggle = document.querySelector(".theme-toggle");
const themeToggler = document.querySelector(".theme-toggler");
const toggleCircle = document.querySelector(".toggle-circle");
const backgroundColor = document.querySelector(".background-color");
const body = document.querySelector("body");
const cols = document.querySelectorAll(".col");
const dashboardStats = document.querySelectorAll(".dashboard-row .stat");
const overStats = document.querySelectorAll(".row-2 .over-stat");
const heading = document.querySelector(".heading h1");
const heading2 = document.querySelector(".overview h2");
themeToggler.addEventListener("click", changeTheme);

function changeTheme(e) {
  toggleCircle.classList.toggle("light-toggle-circle");
  themeToggler.classList.toggle("light-theme-toggler");
  backgroundColor.classList.toggle("light-background-top");
  body.classList.toggle("light-background");
  body.classList.toggle("light-text-color");
  cols.forEach((col) => {
    col.classList.toggle("light-col-background");
  });
  dashboardStats.forEach((stat) => {
    stat.classList.toggle("light-text-color-darker");
  });
  overStats.forEach((stat) => {
    stat.classList.toggle("light-text-color-darker");
  });
  heading.classList.toggle("light-text-color-darker");
  heading2.classList.toggle("light-text-color-darker");
  themeToggle.querySelector(".mode").textContent === "Dark Mode"
    ? (themeToggle.querySelector(".mode").textContent = "Light Mode")
    : (themeToggle.querySelector(".mode").textContent = "Dark Mode");
}
