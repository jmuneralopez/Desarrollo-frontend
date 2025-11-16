// MAIN.JS - Sitio JM Creaciones y Diseño

// -------------------------------
// ANIMACIÓN SUAVE PARA LINKS DEL MENÚ
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


// -------------------------------
// CARD: EFECTO EXTRA AL HACER CLICK
// -------------------------------
const cards = document.querySelectorAll(".card-producto");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("card-active");

        setTimeout(() => {
            card.classList.remove("card-active");
        }, 400);

        console.log(`Has seleccionado: ${card.querySelector("h3").textContent}`);
    });
});


// -------------------------------
// MENU RESPONSIVE (si luego agregas botón hamburguesa)
// -------------------------------
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

//navbar
const toggle = document.querySelector("#nav-toggle");
const mobileMenu = document.querySelector("#nav-mobile");

toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
});
