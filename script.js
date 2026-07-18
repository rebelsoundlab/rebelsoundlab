
// ===============================
// Rebel Sound Lab - Premium JS
// ===============================

// Smooth page loading
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

function reveal() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Back To Top Button
const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (!topButton) return;

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
