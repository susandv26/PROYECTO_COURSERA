document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedLanguage = document.getElementById('selectedLanguage');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedText = this.getAttribute('data-lang');
            selectedLanguage.textContent = selectedText;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedPerfil = document.getElementById('selectedPerfil');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedText = this.getAttribute('data-lang');
            selectedPerfil.textContent = selectedText;
        });
    });
});