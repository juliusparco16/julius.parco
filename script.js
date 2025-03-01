document.addEventListener('DOMContentLoaded', async () => {
    // Fetch GitHub Projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    try {
        const response = await fetch('https://api.github.com/users/juliusparco16/repos');
        const projects = await response.json();
        
        projects.filter(project => !project.fork).forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || 'No description available'}</p>
                <div class="project-meta">
                    <span>${project.language || 'Various'}</span>
                    <a href="${project.html_url}" target="_blank">View →</a>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }

    // Experience Timeline
    const timelineData = [
        {
            company: 'Accenture',
            role: 'Associate Manager / Technical Lead',
            period: '2020-2022',
            highlights: [
                'Led 9 developers in Spring Boot migration',
                '20% faster deployments via CI/CD'
            ]
        },
        // Add other timeline entries
    ];

    const timeline = document.querySelector('.timeline');
    timelineData.forEach((entry, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${entry.role}</h3>
                <h4>${entry.company}</h4>
                <p>${entry.period}</p>
                <ul>
                    ${entry.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
});
