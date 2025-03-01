// Search Functionality - Filter Products
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

// Function to filter products
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        
        // If the search term matches the product name, display the card
        if (productName.includes(searchTerm)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Navigation Links Redirection
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior for smoother transitions
        event.preventDefault();
        const targetPage = link.getAttribute('href');

        // Here you can add logic to animate or load pages dynamically, 
        // but for simplicity, this will just redirect to the page.
        window.location.href = targetPage;
    });
});
