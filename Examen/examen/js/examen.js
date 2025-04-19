document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  const historiaBtn = document.querySelector(".accordion-button");
  const audio = document.querySelector("audio");

  historiaBtn.addEventListener("click", () => {
    setTimeout(() => {
      if (!document.getElementById("collapseOne").classList.contains("show")) {
        audio.pause();
        audio.currentTime = 0;
      }
    }, 400); 
  });

  document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});

