
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

// ===== Rebel Sound Lab Song Template =====

function copyLyrics() {

    const lyrics = document.getElementById("lyrics").innerText;

    navigator.clipboard.writeText(lyrics);

    alert("Lyrics copied successfully!");

}

function shareSong() {

    if (navigator.share) {

        navigator.share({
            title: document.title,
            text: "Check out this original song from Rebel Sound Lab!",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Song link copied!");

    }

}
