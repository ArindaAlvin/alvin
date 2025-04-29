document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.innerHTML.includes('Add to Cart')) {
                e.preventDefault();
                const productName = this.closest('.card-body').querySelector('.card-title').textContent;
                alert(`${productName} has been added to your cart!`);
                
                // In a real app, you would update the cart count here
                // const cartCount = document.querySelector('.fa-shopping-cart').nextElementSibling;
                // let count = parseInt(cartCount.textContent.match(/\d+/)[0]);
                // cartCount.textContent = `Cart (${count + 1})`;
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
                this.querySelector('input').value = '';
            }
        });
    }
});