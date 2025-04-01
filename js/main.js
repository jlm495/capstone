// Highlight active section in sidebar based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.sidebar a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Simple typewriter effect for terminal
const terminalText = document.querySelector('.terminal-text');
const text = terminalText.textContent;
terminalText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        terminalText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing when terminal is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            observer.disconnect();
        }
    });
});

observer.observe(document.querySelector('.terminal'));