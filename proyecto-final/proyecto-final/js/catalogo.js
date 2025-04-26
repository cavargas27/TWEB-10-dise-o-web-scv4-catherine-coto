document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.ver-detalles');
    
    botones.forEach(boton => {
      boton.addEventListener('click', function() {
        const nombreJoya = this.getAttribute('data-name');
        document.getElementById('detalleJoya').textContent = `Detalles sobre: ${nombreJoya}`;
        const modal = new bootstrap.Modal(document.getElementById('detallesModal'));
        modal.show();
      });
    });
  });
  

  window.onscroll = function () {
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
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".custom-toggler");
  
    toggler.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
  