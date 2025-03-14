document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
            
            if (navButtons) {
                navButtons.classList.toggle('active');
            }
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Toggle active class on the clicked item
                item.classList.toggle('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });
    
    // Animate comparison table rows
    const comparisonRows = document.querySelectorAll('.comparison-row');
    comparisonRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(20px)';
        row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        row.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 300);
    });
    
    // Simple scroll animation
    const scrollElements = document.querySelectorAll('.feature-card, .testimonial-card, .faq-item, .comparison-table');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initialize scroll animation
    handleScrollAnimation();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuToggle) menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .testimonial-card, .faq-item, .comparison-table {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.scrolled, .testimonial-card.scrolled, .faq-item.scrolled, .comparison-table.scrolled {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .feature-card:nth-child(4) {
            transition-delay: 0.6s;
        }
        
        .feature-card:nth-child(5) {
            transition-delay: 0.8s;
        }
        
        .faq-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .faq-item:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .faq-item:nth-child(4) {
            transition-delay: 0.6s;
        }
        
        /* FAQ accordion styling */
        .faq-item {
            cursor: pointer;
            overflow: hidden;
        }
        
        .faq-item p {
            max-height: 1000px;
            transition: max-height 0.5s ease;
        }
        
        .faq-item h3:after {
            content: '+';
            float: right;
            font-size: 1.5rem;
            font-weight: normal;
            transition: transform 0.3s ease;
            color: var(--primary-color);
        }
        
        .faq-item.active h3:after {
            transform: rotate(45deg);
        }
        
        @media (max-width: 768px) {
            .nav-links.active, .nav-buttons.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: white;
                padding: 20px;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                z-index: 100;
            }
            
            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);
});
