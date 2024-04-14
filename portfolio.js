// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu
const navToggle = document.querySelector('header nav');
const navList = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
