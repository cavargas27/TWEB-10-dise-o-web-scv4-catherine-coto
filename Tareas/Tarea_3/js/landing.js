document.getElementById("btnEntrar").addEventListener("click", function() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("landingPage").style.display = "block";
});

function mostrarInfo(tipo) {
    let infoExtra = document.getElementById("infoExtra");
    if (tipo === "contacto") {
        infoExtra.innerHTML = "<p>Tel: +506 8618 4040 | Email: contacto@joyeriagomez2.com</p>";
    } else if (tipo === "nosotros") {
        infoExtra.innerHTML = "<p>Joyería Gómez 2 se especializa en piezas únicas.</p>";
    }
}

window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scrollTop");
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Asegurar que el carousel funcione correctamente con Bootstrap
document.addEventListener("DOMContentLoaded", function () {
    var catalogoCarousel = new bootstrap.Carousel(document.querySelector("#catalogoCarousel"), {
        interval: 5000, // Cambia cada 5 segundos
        wrap: true // Permite que el carousel vuelva al inicio
    });
});

function irAlCatalogo() {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

