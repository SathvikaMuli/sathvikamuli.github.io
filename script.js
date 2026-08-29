```javascript
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 30) {
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
    } else {
        nav.style.boxShadow = "none";
    }
});
```
