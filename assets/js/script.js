// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Enhanced animation
    if (hamburger.classList.contains('active')) {
        hamburger.style.transform = 'rotate(90deg)';
        hamburger.querySelectorAll('span').forEach((span, index) => {
            if (index === 1) {
                span.style.opacity = '0';
            } else if (index === 0) {
                span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            } else {
                span.style.transform = 'rotate(-45deg) translate(5px, -5px)';
            }
        });
    } else {
        hamburger.style.transform = 'rotate(0)';
        hamburger.querySelectorAll('span').forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'none';
        });
    }
});

// Smooth scroll to contact section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will contact you soon.');
    
    // Reset form
    this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#133821';
    } else {
        navbar.style.backgroundColor = '#1a4d2e';
    }
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add loading animation
const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'loading-overlay';
loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
document.body.appendChild(loadingOverlay);

window.addEventListener('load', () => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.remove();
    }, 500);
});

// Enhanced form interaction
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Smooth reveal for benefit cards
const benefitCards = document.querySelectorAll('.benefit-card');
benefitCards.forEach((card, index) => {
    card.style.animation = `fadeInUp ${0.3 + index * 0.1}s ease-out forwards`;
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add typing effect to hero heading
const heroHeading = document.querySelector('.hero-content h1');
const text = heroHeading.textContent;
heroHeading.textContent = '';
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        heroHeading.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 1000); // Start after loading animation
});

// Enhance form validation with custom messages
const contactForm = document.getElementById('contactForm');
const inputs = contactForm.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.classList.add('error');
        
        let message = 'Please fill out this field';
        if (input.type === 'email') {
            message = 'Please enter a valid email address';
        } else if (input.type === 'tel') {
            message = 'Please enter a valid phone number';
        }
        
        const existingMessage = input.parentElement.querySelector('.error-message');
        if (!existingMessage) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            input.parentElement.appendChild(errorDiv);
        }
    });
    
    input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
});

// Add CSS for error states
const style = document.createElement('style');
style.textContent = `
    .contact-form input.error,
    .contact-form textarea.error {
        border-color: #ff4444;
        animation: shake 0.5s;
    }
    
    .error-message {
        color: #ff4444;
        font-size: 0.8rem;
        margin-top: 0.3rem;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Add scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.className = 'scroll-top';
scrollTopButton.innerHTML = '↑';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS for scroll-to-top button
style.textContent += `
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: #1a4d2e;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s;
        z-index: 1000;
    }
    
    .scroll-top.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .scroll-top:hover {
        background: #2a6d4e;
        transform: translateY(-5px);
    }
`;

// Image preloader
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const newImg = new Image();
            newImg.src = src;
        }
    });
}

// Add to window load event
window.addEventListener('load', () => {
    preloadImages();
    // ... existing load event code ...
});

// Add image loading animation
document.querySelectorAll('img').forEach(img => {
    img.classList.add('image-loading');
    img.onload = function() {
        this.classList.remove('image-loading');
        this.classList.add('image-loaded');
    };
});

// Active link indicator
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Get current scroll position
    let fromTop = window.scrollY + 100; // Offset for better trigger point

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        // Check if section is in viewport
        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current section's link
            correspondingLink.classList.add('active');
        }
    });
}

// Add scroll event listener for active link
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink); 