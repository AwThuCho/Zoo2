let bar = document.querySelector("#bars")
let navLinks = document.querySelector(".nav-links")
bar.addEventListener("click", function() {
    navLinks.classList.toggle("show")
    bar.classList.toggle("fa-times")
})