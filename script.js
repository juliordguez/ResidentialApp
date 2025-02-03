document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-response').innerText = "Gracias por tu mensaje. Nos pondremos en contacto pronto.";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerText = "Por favor, completa todos los campos.";
    }
});

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
