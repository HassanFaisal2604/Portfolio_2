document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('.navbar a');
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Role text animation
    const roleText = document.getElementById('role-text');
    const roles = [' Front end Developer', 'Social Media Manager', 'Video Editor/Grapher'];
    let currentIndex = 0;

    function updateRole() {
        roleText.style.transition = 'opacity 1s ease';
        roleText.style.opacity = '0';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            roleText.textContent = roles[currentIndex];
            roleText.style.opacity = '1';
        }, 1000);
    }

    // Change role every 3 seconds
    setInterval(updateRole, 3000);

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        sectionObserver.observe(section);
    });

    // Header minimize on scroll
    const header = document.querySelector('.header');
    const homeSection = document.querySelector('#home');

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('minimized');
            } else {
                header.classList.remove('minimized');
            }
        });
    }, { threshold: 0.1 });

    headerObserver.observe(homeSection);
});

// Create and animate particles

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});