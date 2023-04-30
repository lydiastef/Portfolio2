// Getting access to these from html:

const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".mainMenu");

// Adding the event
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
})

// When one of the links is clicked, the hamburger menu closes
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click"), () => {
        hamburger.classList.remove("active");
        mainMenu.classList.remove("active");
    })