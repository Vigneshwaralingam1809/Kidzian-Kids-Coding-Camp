// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show course details
function showDetails(title, description, price) {
    const info = document.getElementById('course-info');
    info.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Fees:</strong> ${price}</p>
    `;
    info.style.display = 'block';
}
