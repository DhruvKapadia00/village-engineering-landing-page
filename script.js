// Function to toggle OM1 popup
function toggleOM1Popup(event) {
    // Don't show popup when clicking on the checkbox itself
    if (event.target.tagName === 'INPUT') {
        event.stopPropagation();
        return;
    }
    
    event.stopPropagation();
    
    // Get the memory toggle element
    const memoryToggle = event.currentTarget;
    
    // Get or create the popup
    let popup = document.getElementById('om1-popup');
    
    if (!popup) {
        // Create popup if it doesn't exist
        popup = document.createElement('div');
        popup.id = 'om1-popup';
        popup.className = 'popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h3>Organizational Memory (OM1)</h3>
                <p>Village's Organizational Memory (OM1) preserves and organizes all knowledge across your company's tools and systems. It enables:</p>
                <ul>
                    <li>Instant access to historical context and decisions</li>
                    <li>Automatic knowledge retention as team members come and go</li>
                    <li>Improved accuracy for answers based on your organization's specific information</li>
                    <li>Cross-referencing information across different tools and platforms</li>
                </ul>
                <p>With OM1 enabled, Village provides more accurate, context-aware responses specific to your organization.</p>
            </div>
        `;
        document.body.appendChild(popup);
    }
    
    // Toggle popup visibility
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        // Make popup visible but with opacity 0 to measure its size
        popup.style.display = 'block';
        popup.style.opacity = '0';
        
        // Position the popup correctly
        const rect = memoryToggle.getBoundingClientRect();
        
        // Position to the right of the toggle instead of below it
        popup.style.top = rect.top + window.scrollY + 'px';
        popup.style.left = (rect.right + window.scrollX + 10) + 'px';
        
        // Force layout calculation
        const popupWidth = popup.offsetWidth;
        
        // Check if popup would go off the right edge of the screen
        if (rect.right + 10 + popupWidth > window.innerWidth) {
            // If it would go off the right edge, position it to the left of the toggle
            popup.style.left = (rect.left + window.scrollX - popupWidth - 10) + 'px';
        }
        
        // Make popup visible
        popup.style.opacity = '1';
    }
    
    // Add document click listener to close popup when clicking outside
    setTimeout(() => {
        const closePopupOnClickOutside = function(e) {
            if (!memoryToggle.contains(e.target) && !popup.contains(e.target)) {
                popup.style.display = 'none';
                document.removeEventListener('click', closePopupOnClickOutside);
            }
        };
        document.addEventListener('click', closePopupOnClickOutside);
    }, 10);
}

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
    
    // OM1 Popup functionality
    const memoryToggle = document.getElementById('memory-toggle-main');
    const om1Popup = document.getElementById('om1-popup-direct');
    
    if (memoryToggle && om1Popup) {
        memoryToggle.addEventListener('click', function(e) {
            // Don't show popup when clicking on the checkbox itself
            if (e.target.tagName === 'INPUT') {
                e.stopPropagation();
                return;
            }
            
            // Toggle popup visibility
            if (om1Popup.style.display === 'block') {
                om1Popup.style.display = 'none';
            } else {
                // Make popup visible but with opacity 0 to measure its size
                om1Popup.style.display = 'block';
                om1Popup.style.opacity = '0';
                
                // Position the popup correctly
                const rect = memoryToggle.getBoundingClientRect();
                
                // Position to the right of the toggle instead of below it
                om1Popup.style.top = rect.top + window.scrollY + 'px';
                om1Popup.style.left = (rect.right + window.scrollX + 10) + 'px';
                
                // Force layout calculation
                const popupWidth = om1Popup.offsetWidth;
                
                // Check if popup would go off the right edge of the screen
                if (rect.right + 10 + popupWidth > window.innerWidth) {
                    // If it would go off the right edge, position it to the left of the toggle
                    om1Popup.style.left = (rect.left + window.scrollX - popupWidth - 10) + 'px';
                }
                
                // Make popup visible
                om1Popup.style.opacity = '1';
            }
        });
        
        // Close popup when clicking outside
        document.addEventListener('click', function(e) {
            if (!memoryToggle.contains(e.target) && !om1Popup.contains(e.target) && om1Popup.style.display === 'block') {
                om1Popup.style.display = 'none';
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
