document.addEventListener('DOMContentLoaded', function () {
    const cardImages = document.querySelectorAll('.imagen-cards-o img');

    cardImages.forEach(image => {
        // Añadimos el estilo inicial con la transición
        image.style.transition = 'transform 0.5s ease';

        image.addEventListener('mouseenter', function () {
            this.style.transform = 'rotate(360deg)';
        });

        image.addEventListener('mouseleave', function () {
            this.style.transform = 'rotate(0deg)';
        });
    });

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

        document.getElementById('aviso-container').style.display = 'none';

        const aviso = document.createElement('div');
        aviso.id = 'aviso-container';
        aviso.textContent = '¡your form was successfully submitted!';

        document.body.appendChild(aviso);

        aviso.style.display = 'block';

        setTimeout(() => {
            aviso.style.display = 'none';
        }, 5000);
    });

    document.getElementById('contact-btn').addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementById('subscribe-form').scrollIntoView({
            behavior: 'smooth'
        });
    });
});