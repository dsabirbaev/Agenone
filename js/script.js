

// Get all the accordion items
const accordionItems = document.querySelectorAll('.services-card__item');

// Add click event listener to each item
accordionItems.forEach(item => {
    const header = item.querySelector('.services-card__item--header');

    header.addEventListener('click', () => {
        // Toggle active class on clicked item
        item.classList.toggle('active');

        // Toggle display of the content
        const content = item.querySelector('.services-card__item--body');
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';

        const arrow = item.querySelector('.accor-arr');
        arrow.classList.toggle('rotate-arrow');
    });
});