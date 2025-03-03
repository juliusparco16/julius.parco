// --- Smooth Scroll (Keep this) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Intersection Observer for animations (Keep this) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
    observer.observe(el);
});

// --- 2D Code Stream Canvas Animation ---
const canvas = document.getElementById('codeCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789(){}[]:;"\'<>?,./|\\~!@#$%^&*-+=` '; // Character set for code stream
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops array (one drop per column)
for (let x = 0; x < columns; x++) {
    drops[x] = 1; // Start each drop at the top
}

function drawCodeStream() {
    // Black background with slight opacity for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#64ffda'; // Teal color - your accent color
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        // Send drop back to top randomly after it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function animationLoop() {
    drawCodeStream();
    requestAnimationFrame(animationLoop);
}

animationLoop(); // Start the animation

// Responsive canvas resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});