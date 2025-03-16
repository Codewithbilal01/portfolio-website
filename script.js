// <!-- Smooth scrolling script added at the end of body -->
// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.textContent.trim().toLowerCase().replace(' ', '-');
        let targetSection;

        switch (targetId) {
            case 'home':
                targetSection = document.querySelector('.firstsection');
                break;
            case 'about':
                targetSection = document.getElementById('about-me');
                break;
            case 'skills':
                targetSection = document.querySelector('.skills');
                break;
            case 'projects':
                targetSection = document.querySelector('.projects');
                break;
            case 'contact-us':
                targetSection = document.querySelector('.contact-us');
                break;
        }

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact button scroll
document.querySelector('.btn1').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.contact-us').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});