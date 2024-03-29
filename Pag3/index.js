document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-us').addEventListener('submit', function (e) {
        e.preventDefault();

        // Ocultar el aviso anterior si lo hay
        document.getElementById('aviso-container').style.display = 'none';

        // Crear un nuevo elemento de aviso
        const aviso = document.createElement('div');
        aviso.id = 'aviso-container';
        aviso.textContent = '¡your form was successfully submitted!';

        // Agregar el aviso al DOM
        document.body.appendChild(aviso);

        // Mostrar el aviso
        aviso.style.display = 'block';

        // Ocultar el aviso después de unos segundos (por ejemplo, 5 segundos)
        setTimeout(() => {
            aviso.style.display = 'none';
        }, 5000);
    });

    document.getElementById('contact-btn').addEventListener('click', function (e) {
        e.preventDefault();

        // Desplazarse al formulario
        document.getElementById('subscribe-form').scrollIntoView({
            behavior: 'smooth'
        });
    });
});