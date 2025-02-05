document.getElementById("aboutBtn").addEventListener("click", function() {
    var aboutSection = document.getElementById("aboutSection");
    var arrow = document.getElementById("arrow");

    // Toggle the display property
    if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
        aboutSection.style.display = "block";
        arrow.style.transform = "rotate(180deg)"; // Rotate arrow
    } else {
        aboutSection.style.display = "none";
        arrow.style.transform = "rotate(0deg)"; // Reset arrow
    }
});
function toggleDetails(card) {
    // Collapse all cards before expanding the clicked one
    const allCards = document.querySelectorAll('.projects-item');
    allCards.forEach(function(otherCard) {
        if (otherCard !== card) {
            otherCard.classList.remove("expanded");  // Collapse the other cards
        }
    });

    // Toggle the clicked card's details
    card.classList.toggle("expanded");  // Only toggle the clicked card
}
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Smooth scrolling when clicking navbar links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in navbar
    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});