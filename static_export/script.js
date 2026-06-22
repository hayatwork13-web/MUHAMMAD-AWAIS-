/**
 * Muhammad Awais Portfolio - Core Script Rules
 * Designed to handle interactive audits and direct CTA events.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Form Submission Handling
    const contactForm = document.getElementById('portfolio-contact-form');
    const successCard = document.getElementById('contact-success');

    if (contactForm && successCard) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Collect form entries
            const name = document.getElementById('form-name')?.value;
            const email = document.getElementById('form-email')?.value;
            const url = document.getElementById('form-url')?.value;
            const desc = document.getElementById('form-desc')?.value;

            console.log('Strategy audit request collected:', { name, email, url, desc });

            // Animate transition states
            contactForm.classList.add('opacity-0', 'transition-all', 'duration-300');
            
            setTimeout(() => {
                contactForm.classList.add('hidden');
                successCard.classList.remove('hidden');
                successCard.classList.add('opacity-100', 'transition-all', 'duration-300');
            }, 300);
        });
    }

    // Interactive template switching could go here if more template previews are desired
});
