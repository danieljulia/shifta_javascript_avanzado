// Global variables
let projects = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

// Load projects from JSON file
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        projects = data.projects;
        
        // Check which page we're on and render accordingly
        if (window.location.pathname.includes('project.html')) {
            loadProjectDetails();
        } else {
            renderProjectsGrid();
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        showError('Failed to load projects. Please try again later.');
    }
}

// Render projects grid on home page
function renderProjectsGrid() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => navigateToProject(project.id);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); color: #999;">
                ${project.name}
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-name">${project.name}</h3>
        </div>
    `;
    
    return card;
}

// Navigate to project details page
function navigateToProject(projectId) {
    window.location.href = `project.html?id=${projectId}`;
}

// Load project details page
function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (!projectId) {
        showError('Project not found.');
        return;
    }
    
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        showError('Project not found.');
        return;
    }
    
    renderProjectDetails(project);
}

// Render project details
function renderProjectDetails(project) {
    const container = document.getElementById('project-container');
    if (!container) return;
    
    container.innerHTML = `
        <a href="index.html" class="back-button">← Back to Projects</a>
        <img src="${project.image}" alt="${project.name}" class="project-detail-image" onerror="this.style.display='none';">
        <h1 class="project-detail-name">${project.name}</h1>
        <p class="project-description">${project.description}</p>
    `;
}

// Show error message
function showError(message) {
    const container = document.getElementById('projects-container') || document.getElementById('project-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading">
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
}

// Show loading state
function showLoading() {
    const container = document.getElementById('projects-container') || document.getElementById('project-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading">
            <h3>Loading...</h3>
            <p>Please wait while we load the projects.</p>
        </div>
    `;
}
