function toggleCatalogo() {
    const catalogo = document.getElementById('catalogo');
    const contacto = document.getElementById('contacto');
    catalogo.classList.toggle('show');
    contacto.classList.remove('show');

    if (catalogo.classList.contains('show')) {
        catalogo.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleContacto() {
    const catalogo = document.getElementById('catalogo');
    const contacto = document.getElementById('contacto');
    contacto.classList.toggle('show');
    catalogo.classList.remove('show');

    if (contacto.classList.contains('show')) {
        contacto.scrollIntoView({ behavior: 'smooth' });
    }
}
