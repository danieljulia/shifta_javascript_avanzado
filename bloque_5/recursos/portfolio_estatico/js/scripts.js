

document.addEventListener('DOMContentLoaded', function() {
    
    let viewport_height = window.innerHeight;
    window.addEventListener('scroll', function() {
        if (window.scrollY > viewport_height) {
            document.querySelector('.home .main-header').classList.remove('light-color');
        } else {
            document.querySelector('.home .main-header').classList.add('light-color');
        }
    });
});