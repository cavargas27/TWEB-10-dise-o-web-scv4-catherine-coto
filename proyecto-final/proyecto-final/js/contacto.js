document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const modal = new bootstrap.Modal(
    document.getElementById("modalConfirmacion")
  );
  modal.show();
});

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 


    this.reset();

    alert("¡Formulario enviado correctamente!");
  });
