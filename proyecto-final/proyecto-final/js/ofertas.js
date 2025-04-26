function filtrarProductos() {
    const categoriaSeleccionada = document.getElementById('categoria').value;
    const productos = document.querySelectorAll('.producto');
  
    productos.forEach(producto => {
      const categoria = producto.getAttribute('data-categoria');
      if (categoriaSeleccionada === 'todo' || categoria === categoriaSeleccionada) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  }
  
  