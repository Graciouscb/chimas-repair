document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            contactForm.addEventListener('submit', function(event) {
                // Prevent the default form submission that would reload the page
                event.preventDefault();

                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;s
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // Simple validation check
                if (name === '' || email === '' || subject === '' || message === '') {
                    formMessage.textContent = 'Please fill out all fields.';
                    formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-700');
                    formMessage.classList.add('bg-red-100', 'text-red-700');
                    return; // Stop the function if validation fails
                }

                // Log form data to the console for demonstration
                console.log('Form Submitted!');
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Subject:', subject);
                console.log('Message:', message);
                
                // Display success message
                formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
                formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
                formMessage.classList.add('bg-green-100', 'text-green-700');

                // Clear the form fields
                contactForm.reset();
            });
        });
         const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });