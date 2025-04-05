document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

   
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menuList = document.querySelector(".menu-list");

    menuBtn.addEventListener("click", () => {
        menuList.classList.toggle("d-none");
    });

    // Opcional: ocultar menú al hacer clic en un enlace
    document.querySelectorAll(".menu-list a").forEach(link => {
        link.addEventListener("click", () => {
            menuList.classList.add("d-none");
        });
    });
});

