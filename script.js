document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }
    
    // Success alert
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    document.getElementById('contactForm').reset();
});
