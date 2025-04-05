const adultos = document.getElementById('adultos');
const ninos = document.getElementById('ninos');
const total = document.getElementById('total');

function calcularTotal() {
  const precioAdulto = 38;
  const precioNino = 28;

  const cantidadAdultos = parseInt(adultos.value);
  const cantidadNinos = parseInt(ninos.value);

  const totalPagar = (cantidadAdultos * precioAdulto) + (cantidadNinos * precioNino);

  total.textContent = `Total a pagar: $${totalPagar}`;
}

adultos.addEventListener('change', calcularTotal);
ninos.addEventListener('change', calcularTotal);

// Mostrar el formulario de pago al hacer clic en el botón de Total
document.getElementById('btn-total').addEventListener('click', function() {
    const formPago = document.getElementById('form-pago');
    formPago.style.display = formPago.style.display === 'none' ? 'block' : 'none';
  });
