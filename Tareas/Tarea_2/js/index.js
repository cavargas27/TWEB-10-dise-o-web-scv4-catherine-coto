document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');

    const preview = document.getElementById('preview');
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
      

        item.addEventListener('mouseleave', () => {
            preview.style.display = 'none';
        });
    });
});
