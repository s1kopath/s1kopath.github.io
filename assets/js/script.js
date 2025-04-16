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
    // Frontend & UI
    { name: 'PHP', icon: '<img src="assets/images/icons/php-original.svg" title="PHP" alt="PHP" width="40" height="40"/>&nbsp;' },
    { name: 'Laravel', icon: '<img src="assets/images/icons/laravel-original.svg" title="Laravel" alt="Laravel" width="40" height="40"/>&nbsp;' },
    { name: 'Vue.js', icon: '<img src="assets/images/icons/vuejs-line-wordmark.svg" title="Vue" alt="Vue" width="40" height="40"/>&nbsp;' },
    { name: 'React', icon: '<img src="assets/images/icons/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;' },
    { name: 'Next.js', icon: '<img src="assets/images/icons/nextjs-original-wordmark.svg" title="Nextjs" alt="Nextjs" width="40" height="40"/>&nbsp;' },
    { name: 'HTML5', icon: '<img src="assets/images/icons/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;' },
    { name: 'CSS3', icon: '<img src="assets/images/icons/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;' },
    { name: 'Bootstrap', icon: '<img src="assets/images/icons/bootstrap-original-wordmark.svg" title="Bootstrap" alt="Bootstrap" width="40" height="40"/>&nbsp;' },
    { name: 'Tailwind', icon: '<img src="assets/images/icons/tailwindcss-original.svg" title="Tailwindcss" alt="tailwindcss" width="40" height="40"/>&nbsp;' },
    { name: 'jQuery', icon: '<img src="assets/images/icons/jquery-original-wordmark.svg" title="Jquery" alt="Jquery" width="40" height="40"/>&nbsp;' },
    { name: 'JavaScript', icon: '<img src="assets/images/icons/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;' },

    // Cloud & Hosting
    { name: 'Firebase', icon: '<img src="assets/images/icons/firebase-plain-wordmark.svg" title="Firebase" alt="Firebase" width="40" height="40"/>&nbsp;' },
    { name: 'AWS', icon: '<img src="assets/images/icons/amazonwebservices-plain-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;' },
    { name: 'DigitalOcean', icon: '<img src="assets/images/icons/digitalocean-original-wordmark.svg" title="DigitalOcean" alt="DigitalOcean" width="40" height="40"/>&nbsp;' },
    { name: 'cPanel', icon: '<img src="assets/images/icons/CPanel_logo.svg.png" title="cPanel" alt="cPanel" width="40" height="40"/>&nbsp;' },
    { name: 'Heroku', icon: '<img src="assets/images/icons/heroku-original-wordmark.svg" title="Heroku" alt="Heroku" width="40" height="40"/>&nbsp;' },
    { name: 'Netlify', icon: '<img src="assets/images/icons/netlify-original-wordmark.svg" title="Netlify" alt="Netlify" width="40" height="40"/>&nbsp;' },

    // Database & Backend
    { name: 'MySQL', icon: '<img src="assets/images/icons/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="40" height="40"/>&nbsp;' },
    { name: 'MongoDB', icon: '<img src="assets/images/icons/mongodb-original-wordmark.svg" title="Mongo" alt="Mongo" width="40" height="40"/>&nbsp;' },
    { name: 'PostgreSQL', icon: '<img src="assets/images/icons/postgresql-original-wordmark.svg" title="PostgreSQL" alt="PostgreSQL" width="40" height="40"/>&nbsp;' },
    { name: 'Postman', icon: '<img src="assets/images/icons/postman-original-wordmark.svg" title="Postman" alt="Postman" width="40" height="40"/>&nbsp;' },
    { name: 'Node.js', icon: '<img src="assets/images/icons/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;' },

    // Version Control & Tools
    { name: 'Git', icon: '<img src="assets/images/icons/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40"/>&nbsp;' },
    { name: 'Filament', icon: '<img src="assets/images/icons/FVauPXtT_400x400.jpg" title="Filament" alt="Filament" width="40" height="40"/>&nbsp;' },
    { name: 'Inertia', icon: '<img src="assets/images/icons/47703742.png" title="Inertia" alt="Inertia" width="40" height="40"/>&nbsp;' },
    { name: 'Livewire', icon: '<img src="assets/images/icons/laravel-livewire4180.logowik.com.webp" title="Liveware" alt="Liveware" width="40" height="40"/>&nbsp;' },
    { name: 'Docker', icon: '<img src="assets/images/icons/docker-plain.svg" title="Docker" alt="Docker" width="40" height="40"/>&nbsp;' }
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