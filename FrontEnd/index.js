document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll effect on banner buttons
    const viewMenuButton = document.querySelector('.custom-button');
    const orderNowButton = document.querySelector('.custom-outline-button');
    const menuSection = document.getElementById('menu-section'); // Ensure this ID matches your HTML
    const orderForm = document.getElementById('orderFormContainer'); // Ensure this ID matches your HTML

    if (viewMenuButton && menuSection) {
        viewMenuButton.addEventListener('click', function () {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error('View Menu button or menu section not found.');
    }

    if (orderNowButton && orderForm) {
        orderNowButton.addEventListener('click', function () {
            orderForm.style.display = 'block'; // Show order form
        });
    } else {
        console.error('Order Now button or order form not found.');
    }

    // Highlight navigation item on scroll
    window.addEventListener('scroll', function () {
        let current = '';
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = link.getAttribute('href');
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });

    // Handle form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const foodItem = document.getElementById('foodItem').value;

        // Validate form data
        if (name && email && address && foodItem) {
            alert('Thank you for your order! We will contact you soon.');
            document.getElementById('orderForm').reset(); // Reset form fields after submission
            orderForm.style.display = 'none'; // Hide order form after submission
        } else {
            alert('Please fill out all fields.');
        }
    });
});
