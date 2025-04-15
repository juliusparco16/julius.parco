/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Define color palette */
    --primary-color: #0a192f; /* Dark Navy Blue */
    --secondary-color: #112240; /* Lighter Navy */
    --accent-color: #64ffda; /* Bright Teal/Aqua */
    --text-color-light: #ccd6f6; /* Light Slate */
    --text-color-dark: #8892b0; /* Dark Slate */
    --section-bg: #0a192f; /* Same as primary for seamless feel */
    --card-bg: #112240; /* Lighter navy for cards */
    --border-color: #233554; /* Subtle border */
    --hover-accent-color: rgba(100, 255, 218, 0.1); /* Teal glow */

    /* Font Sizes */
    --fs-xxl: 2.8rem;
    --fs-xl: 2rem;
    --fs-lg: 1.5rem;
    --fs-md: 1.1rem;
    --fs-sm: 0.9rem;
    --fs-xs: 0.8rem;

    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-xxl: 4rem;

     /* Animation Colors */
    --particle-color: rgba(100, 255, 218, 0.5); /* Teal particles */
    --line-color: rgba(100, 255, 218, 0.1); /* Fainter teal lines */
    --canvas-bg-color: rgba(10, 25, 47, 0); /* Fully transparent canvas bg */
}

html {
     scroll-behavior: smooth; /* Enable smooth scroll globally */
}

body {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    line-height: 1.6;
    color: var(--text-color-light);
    background-color: var(--section-bg); /* Solid background color for body */
    overflow-x: hidden;
}

/* Background Canvas Styling */
#constellationCanvas { /* Renamed ID for clarity */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Behind content */
     /* Opacity can be adjusted here or on the colors directly */
    /* opacity: 0.8; */
    pointer-events: none; /* Non-interactive */
    display: block; /* Ensure it's block level */
}

/* Container */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
    position: relative;
    z-index: 1;
}

/* Section Styling */
section {
    padding: var(--space-xl) 0;
    margin-bottom: var(--space-lg);
}

/* Headings */
h1, h2, h3 {
    color: var(--text-color-light);
    margin-bottom: var(--space-md);
    font-weight: 600;
}

h1 { font-size: var(--fs-xxl); letter-spacing: 1px;}
h2 { font-size: var(--fs-xl); display: flex; align-items: center; gap: var(--space-xs); }
h2 i { color: var(--accent-color); font-size: 1.8rem; }
h3 { font-size: var(--fs-lg); color: var(--accent-color); }

p {
    color: var(--text-color-dark);
    margin-bottom: var(--space-sm);
}

a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.3s ease, opacity 0.3s ease;
}

a:hover {
    color: var(--text-color-light);
    opacity: 0.9;
}

/* Strong tag styling */
strong {
     color: var(--accent-color);
     font-weight: 600;
}

/* Hero Section */
.hero {
    /* Make hero background slightly transparent to see animation */
    background: linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(17, 34, 64, 0.9));
    padding: var(--space-xxl) var(--space-lg);
    text-align: center;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    z-index: 1;
}

.hero .title {
    font-size: var(--fs-lg);
    color: var(--text-color-light);
    margin-bottom: var(--space-xs);
}
.hero .subtitle {
    font-size: var(--fs-md);
    color: var(--text-color-dark);
    margin-bottom: var(--space-md);
    font-weight: 300;
}

.contact-bar {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    flex-wrap: wrap;
    margin-top: var(--space-md);
}

.contact-bar span,
.contact-bar a {
    color: var(--text-color-dark);
    font-size: var(--fs-sm);
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
}
.contact-bar a:hover {
    color: var(--accent-color);
}
.contact-bar i {
    color: var(--accent-color);
    font-size: 1.1em;
}


/* About Me Section */
.about-section {
     /* Make card background slightly transparent */
    background-color: rgba(17, 34, 64, 0.85); /* --card-bg with alpha */
    padding: var(--space-xl);
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--border-color); /* Add subtle border */
}

.about-content p {
    color: var(--text-color-light);
    font-size: var(--fs-md);
    line-height: 1.7;
}

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-lg);
}

.skill-card {
    background: rgba(17, 34, 64, 0.85); /* --card-bg with alpha */
    padding: var(--space-lg);
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(23, 42, 77, 0.9); /* Slightly lighter on hover */
}

.skill-card i {
    font-size: 2.8rem;
    color: var(--accent-color);
    margin-bottom: var(--space-sm);
    display: block;
}

.skill-card h3 {
    font-size: var(--fs-md);
    color: var(--text-color-light);
    margin-bottom: var(--space-sm);
}

.skill-card p {
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    line-height: 1.5;
    flex-grow: 1;
}

/* Experience Section - Timeline */
.timeline {
    position: relative;
    margin-top: var(--space-lg);
    padding-left: var(--space-lg);
}

.timeline::before {
    content: '';
    position: absolute;
    left: 40px;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background-color: var(--border-color);
    z-index: 0;
}

.timeline-item {
    position: relative;
    margin-bottom: var(--space-xl);
    display: flex;
    align-items: flex-start;
    padding-left: 50px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 32px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent-color);
    border: 2px solid var(--section-bg);
    z-index: 1;
}

.company-logo {
     position: absolute;
     left: 0;
     top: 0;
     width: 64px;
     height: 64px;
     border-radius: 8px;
     background: white;
     padding: var(--space-xs);
     flex-shrink: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid var(--border-color);
     z-index: 1;
}

.company-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.timeline-content {
    background-color: rgba(17, 34, 64, 0.85); /* --card-bg with alpha */
    padding: var(--space-md);
    border-radius: 8px;
    flex-grow: 1;
    border: 1px solid var(--border-color);
    margin-left: 30px;
    width: calc(100% - 64px - 30px);
}

/* --- Grouping Adjustment for SCB items --- */
/* Target SCB items that are NOT the first one */
.timeline-item.scb-item:not(.scb-first) .timeline-content {
     margin-left: 0; /* Remove the margin, content fills the logo space */
     width: 100%; /* Allow content to take full width available */
}
/* --- End Grouping Adjustment --- */


.timeline-content h3 {
     margin-bottom: var(--space-xs);
     font-size: 1.3rem;
}

.timeline-content .company {
    font-weight: 600;
    color: var(--text-color-light);
    margin-bottom: var(--space-xs);
    font-size: var(--fs-sm);
}

.timeline-content .duration {
    font-size: var(--fs-xs);
    color: var(--text-color-dark);
    margin-bottom: var(--space-sm);
}

.timeline-content ul {
    list-style: none;
    padding-left: 0;
}

.timeline-content ul li {
    margin-bottom: var(--space-xs);
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    position: relative;
    padding-left: var(--space-sm);
}

.timeline-content ul li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-lg);
}

.project-card {
    background: rgba(17, 34, 64, 0.85); /* --card-bg with alpha */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
     background-color: rgba(23, 42, 77, 0.9); /* Slightly lighter on hover */
}

.project-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 1px solid var(--border-color);
    display: block;
}

.project-info {
    padding: var(--space-md);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-info h3 {
    margin-bottom: var(--space-xs);
    font-size: 1.3rem;
}
.project-info p {
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    margin-bottom: var(--space-sm);
    flex-grow: 1;
}

.tech-stack {
    margin-bottom: var(--space-sm);
    flex-wrap: wrap;
    display: flex;
    gap: var(--space-xs);
}

.tech-stack span {
    display: inline-block;
    background: rgba(100, 255, 218, 0.1);
    color: var(--accent-color);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: var(--fs-xs);
    font-weight: 500;
}

.project-details {
    list-style: none;
    padding-left: 0;
    margin-bottom: var(--space-sm);
}
.project-details li {
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    margin-bottom: var(--space-xs);
    position: relative;
    padding-left: var(--space-sm);
}
.project-details li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
}


.project-metrics {
    display: flex;
    gap: var(--space-sm);
    margin-top: auto;
    margin-bottom: var(--space-sm);
    flex-wrap: wrap;
}

.metric {
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--fs-xs);
    color: var(--text-color-dark);
    border: 1px solid var(--border-color);
}

.metric i {
    color: var(--accent-color);
    font-size: 1.1em;
}

.project-link {
    display: inline-block;
    margin-top: auto;
    padding: var(--space-xs) var(--space-sm);
    background-color: transparent;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 600;
}

.project-link:hover {
    background-color: var(--hover-accent-color);
    color: var(--accent-color);
}

.project-link i {
    margin-right: var(--space-xs);
}

/* Education & Certifications Sections */
.education-section, .certifications-section {
     background-color: rgba(17, 34, 64, 0.85); /* --card-bg with alpha */
     padding: var(--space-xl);
     border-radius: 8px;
     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
     border: 1px solid var(--border-color);
}

.education-item, .certification-item {
    margin-bottom: var(--space-md);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--border-color);
}
.education-item:last-child, .certification-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.education-item h3, .certification-item h3 {
    font-size: var(--fs-md);
    color: var(--text-color-light);
    margin-bottom: var(--space-xs);
}
.education-item .institution, .certification-item .issuer {
    font-weight: 600;
    color: var(--text-color-dark);
    font-size: var(--fs-sm);
    margin-bottom: var(--space-xs);
}
.education-item .duration, .certification-item .date {
    font-size: var(--fs-xs);
    color: var(--text-color-dark);
    margin-bottom: var(--space-sm);
}
.education-item ul {
    list-style: none;
    padding-left: 0;
    margin-top: var(--space-sm);
}
.education-item ul li {
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    margin-bottom: var(--space-xs);
    position: relative;
    padding-left: var(--space-sm);
}
 .education-item ul li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}
.certification-item .cert-id {
    font-size: var(--fs-xs);
    color: var(--text-color-dark);
    font-style: italic;
}


/* Footer */
.footer {
    text-align: center;
    padding: var(--space-lg) var(--space-md);
    margin-top: var(--space-xl);
    border-top: 1px solid var(--border-color);
    background-color: var(--secondary-color); /* Solid footer */
    position: relative;
    z-index: 1;
}

.footer p {
    font-size: var(--fs-sm);
    color: var(--text-color-dark);
    margin-bottom: var(--space-sm);
}

.footer-links a {
    margin: 0 var(--space-xs);
    color: var(--text-color-dark);
    font-size: var(--fs-sm);
}
.footer-links a:hover {
    color: var(--accent-color);
}
.footer-links i {
    margin-right: 5px;
}


/* Fade-in Animation */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}


/* Responsive Design */
@media (max-width: 768px) {
    :root {
        --fs-xxl: 2.2rem;
        --fs-xl: 1.8rem;
        --fs-lg: 1.3rem;
        --fs-md: 1rem;
    }
    .container { padding: var(--space-lg) var(--space-sm); }
    section { padding: var(--space-lg) 0; }
    .hero { padding: var(--space-xl) var(--space-sm); min-height: 50vh; }
    .hero .subtitle { font-size: var(--fs-sm); }
    .contact-bar { gap: var(--space-sm); justify-content: center; }

    .about-content { flex-direction: column; align-items: center; text-align: center; }
    .profile-photo { margin-right: 0; margin-bottom: var(--space-md); }

    /* Adjust timeline for mobile */
    .timeline::before { left: 20px; /* Move line closer for smaller logos */ }
    .timeline-item { padding-left: 0; flex-direction: column; align-items: flex-start; }
    .timeline-item::before { left: 12px; /* Adjust dot position (20px line - 8px radius) */ top: 28px; /* Align below logo */ }
    .company-logo { position: static; /* Stack logo */ margin-right: 0; margin-bottom: var(--space-sm); width: 60px; height: 60px; }
    .timeline-content { margin-left: 0; width: 100%; }
     /* Ensure adjustment for grouped items doesn't interfere */
     .timeline-item.scb-item:not(.scb-first) .timeline-content {
         margin-left: 0; /* Already 0 for mobile */
     }


    .projects-grid { grid-template-columns: 1fr; }
    .project-card img { height: 200px; }
}

@media (max-width: 480px) {
     :root {
        --fs-xxl: 1.8rem;
        --fs-xl: 1.5rem;
        --fs-lg: 1.1rem;
    }
    .hero h1 { font-size: var(--fs-xxl); }
    .hero .subtitle { font-size: var(--fs-xs); }
    .contact-bar { flex-direction: column; gap: var(--space-xs); align-items: center; }
    .skills-grid { grid-template-columns: 1fr; }
    .skill-card i { font-size: 2.5rem; }
    .project-card img { height: 180px; }
    .metric { flex-basis: 100%; justify-content: center; }

    /* Further adjust timeline for very small screens */
    .timeline::before { left: 15px; }
     .timeline-item::before { left: 7px; /* 15px line - 8px radius */ top: 28px; }
     .company-logo { width: 50px; height: 50px; }
}
