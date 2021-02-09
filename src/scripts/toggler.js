const buttons = document.querySelectorAll('.accordion-button');

function toggleAccordion() {
    const toggler = this.getAttribute('aria-expanded');
    toggler == 'false' ? this.setAttribute('aria-expanded', 'true') : this.setAttribute('aria-expanded', 'false')
}

buttons.forEach((button) => button.addEventListener('click', toggleAccordion, true));
