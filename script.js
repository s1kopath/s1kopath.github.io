// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Smooth Scroll for Arrow Down
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Tech Stack Slider
const technologies = [
    // Frontend
    { name: 'HTML5', icon: '<i class="fab fa-html5"></i>' },
    { name: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>' },
    { name: 'JavaScript', icon: '<i class="fab fa-js"></i>' },
    { name: 'Vue.js', icon: '<i class="fab fa-vuejs"></i>' },
    { name: 'React', icon: '<i class="fab fa-react"></i>' },
    { name: 'Next.js', icon: '<i class="fab fa-react"></i>' },
    
    // Backend
    { name: 'PHP', icon: '<i class="fab fa-php"></i>' },
    { name: 'Laravel', icon: '<i class="fab fa-laravel"></i>' },
    { name: 'Node.js', icon: '<i class="fab fa-node-js"></i>' },
    { name: 'Express.js', icon: '<i class="fab fa-node-js"></i>' },
    
    // Database
    { name: 'MySQL', icon: '<i class="fas fa-database"></i>' },
    { name: 'MongoDB', icon: '<i class="fas fa-database"></i>' },
    { name: 'PostgreSQL', icon: '<i class="fas fa-database"></i>' },
    { name: 'SQL Server', icon: '<i class="fas fa-database"></i>' },
    
    // DevOps & Tools
    { name: 'Git', icon: '<i class="fab fa-git-alt"></i>' },
    { name: 'GitHub', icon: '<i class="fab fa-github"></i>' },
    { name: 'GitLab', icon: '<i class="fab fa-gitlab"></i>' },
    { name: 'AWS', icon: '<i class="fab fa-aws"></i>' },
    { name: 'Docker', icon: '<i class="fab fa-docker"></i>' },
    { name: 'Firebase', icon: '<i class="fab fa-firebase"></i>' }
];

function createTechStack() {
    const sliderTrack = document.querySelector('.slider-track');
    
    // Create two sets of tech icons for infinite scroll effect
    const techSet = technologies.map(tech => `
        <div class="tech-icon" title="${tech.name}">
            ${tech.icon}
        </div>
    `).join('');
    
    sliderTrack.innerHTML = techSet + techSet;
}

createTechStack();

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Add smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});