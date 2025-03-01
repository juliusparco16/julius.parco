// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Skills Radar Chart
const skillsData = [
    { skill: 'Java/Spring', level: 95 },
    { skill: 'Cloud Migration', level: 90 },
    { skill: 'CI/CD', level: 85 },
    { skill: 'SQL', level: 88 },
    { skill: 'ReactJS', level: 75 }
];

const radarConfig = {
    width: 800,
    height: 500,
    levels: 5,
    maxValue: 100
};

// D3 Radar Chart Implementation
function drawRadar() {
    // Detailed D3 implementation here
}

// Loading State
window.addEventListener('load', () => {
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 300);
});

// Netlify Form Handling
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
        });
    });
}
