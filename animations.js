document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('section, section *');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 100); // Stagger the animation for each element
    });
});
