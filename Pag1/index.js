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
    alert('Formulario enviado con éxito');
    });