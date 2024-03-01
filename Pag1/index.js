document.addEventListener('DOMContentLoaded', function () {
    // ... (código existente)

    // Nueva función para manejar el clic en el botón de contacto
    function handleContactButtonClick() {
        document.getElementById('contact-btn').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = '/Pag3/Contactuspage.html';
        });
    }

    // Llama a la función para manejar el clic en el botón de contacto
    handleContactButtonClick();

    // Resto del código existente
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('subscribe-form').addEventListener('submit', function (e) {
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
});