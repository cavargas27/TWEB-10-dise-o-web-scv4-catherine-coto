// Obtener el botón
const scrollTopButton = document.getElementById("scrollTop");

// Mostrar el botón cuando el usuario haya desplazado hacia abajo 100 píxeles
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

// Función para hacer scroll hacia arriba
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
}
