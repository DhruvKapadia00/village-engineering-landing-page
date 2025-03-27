// Mock data for search results
const mockResults = {
    "authentication flow": [
        {
            source: "GitHub",
            sourceIcon: "images/integrations/github.svg",
            title: "Auth Service: OAuth Implementation Guide",
            snippet: "This document outlines the OAuth 2.0 authentication flow implementation for our services. It includes code examples, sequence diagrams, and best practices for secure authentication.",
            date: "Updated 2 weeks ago",
            author: "Alex Johnson",
            authorInitials: "AJ"
        },
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Authentication Flow Documentation",
            snippet: "Comprehensive guide to our authentication system. Covers user registration, login flows, password reset, and multi-factor authentication implementation details.",
            date: "Updated 1 month ago",
            author: "Sarah Chen",
            authorInitials: "SC"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Auth Team Discussion",
            snippet: "Thread from the engineering channel discussing the authentication flow improvements and recent security updates to the OAuth implementation.",
            date: "3 days ago",
            author: "Engineering Team",
            authorInitials: "ET"
        }
    ],
    "payment api": [
        {
            source: "GitHub",
            sourceIcon: "images/integrations/github.svg",
            title: "Payment API Repository",
            snippet: "Main repository for the payment processing API. Contains implementation of Stripe and PayPal integrations, transaction handling, and security measures.",
            date: "Updated 5 days ago",
            author: "Michael Torres",
            authorInitials: "MT"
        },
        {
            source: "Jira",
            sourceIcon: "images/integrations/jira.svg",
            title: "PAY-245: Payment API Performance Optimization",
            snippet: "Task to improve the response time of the payment API endpoints. Includes performance metrics, bottlenecks identified, and proposed solutions.",
            date: "In Progress",
            author: "Dev Team",
            authorInitials: "DT"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Payment API Discussion",
            snippet: "Thread from the #payments channel discussing the recent updates to the payment API and coordination with the frontend team for integration.",
            date: "1 week ago",
            author: "Payments Team",
            authorInitials: "PT"
        }
    ],
    "deployment issues": [
        {
            source: "GitHub",
            sourceIcon: "images/integrations/github.svg",
            title: "Deployment Pipeline Configuration",
            snippet: "CI/CD pipeline configuration files and documentation. Recent changes include fixes for deployment issues related to environment variables and container orchestration.",
            date: "Updated yesterday",
            author: "DevOps Team",
            authorInitials: "DO"
        },
        {
            source: "Jira",
            sourceIcon: "images/integrations/jira.svg",
            title: "OPS-132: Production Deployment Failures",
            snippet: "Investigation into recent deployment failures in the production environment. Root cause analysis points to memory allocation issues in Kubernetes pods.",
            date: "High Priority",
            author: "Operations",
            authorInitials: "OP"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Deployment Incident Discussion",
            snippet: "Thread from the #incidents channel discussing the recent deployment failure, mitigation steps taken, and lessons learned for future deployments.",
            date: "2 days ago",
            author: "Incident Response",
            authorInitials: "IR"
        }
    ],
    "database schema": [
        {
            source: "GitHub",
            sourceIcon: "images/integrations/github.svg",
            title: "User Database Schema Definition",
            snippet: "SQL schema definitions for the user database tables. Includes user profiles, authentication data, permissions, and relationship mappings to other entities.",
            date: "Updated 3 weeks ago",
            author: "Database Team",
            authorInitials: "DT"
        },
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Database Schema Documentation",
            snippet: "Comprehensive documentation of our database architecture. Includes ER diagrams, table relationships, indexing strategy, and migration procedures.",
            date: "Updated 1 month ago",
            author: "Emma Rodriguez",
            authorInitials: "ER"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Schema Update Discussion",
            snippet: "Thread from the #database channel discussing the proposed changes to the user schema to support the new feature requirements.",
            date: "1 week ago",
            author: "Engineering",
            authorInitials: "EN"
        }
    ],
    "pr review example": [
        {
            source: "GitHub",
            sourceIcon: "images/integrations/github.svg",
            title: "PR #342: Add Payment Processing Module",
            snippet: `<div class="pr-review-example">
                <div class="pr-header">
                    <span class="pr-status approved">Approved by Merlin AI</span>
                    <span class="pr-date">Reviewed 2 days ago</span>
                </div>
                <div class="pr-summary">
                    <h4>Summary of Changes</h4>
                    <ul>
                        <li>✅ Added new PaymentProcessor class with Stripe integration</li>
                        <li>✅ Implemented transaction logging and error handling</li>
                        <li>✅ Added unit tests with 94% coverage</li>
                        <li>⚠️ Missing documentation for the refund process</li>
                    </ul>
                </div>
                <div class="code-review">
                    <h4>Code Review</h4>
                    <div class="code-comment">
                        <div class="code-snippet">
                            <pre><code>function processPayment(amount, currency) {
  // Process payment logic
  const response = await stripe.charges.create({
    amount: amount,
    currency: currency
  });
  return response;</code></pre>
                        </div>
                        <div class="ai-comment">
                            <p><strong>Merlin AI:</strong> Consider adding error handling here. If the Stripe API call fails, the function will throw an unhandled exception.</p>
                        </div>
                    </div>
                </div>
                <div class="ai-suggestions">
                    <h4>AI Suggestions</h4>
                    <ul>
                        <li>Add try/catch block around Stripe API calls</li>
                        <li>Document the refund process in README.md</li>
                        <li>Consider implementing payment retry logic</li>
                    </ul>
                </div>
            </div>`,
            date: "Updated 2 days ago",
            author: "Merlin AI Assistant",
            authorInitials: "MA"
        }
    ],
    "engineering productivity": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Engineering Productivity Benefits",
            snippet: "Village and OM1 accelerate engineering onboarding, getting new engineers contributing faster through better signals about technical contributions, code quality, and project velocity. The AI-powered GitHub PR bot provides valuable support for code review and junior developer assistance. Estimated time savings of 8 hours/week for Product/Engineering roles with annual ROI of $546,000.",
            date: "Updated 2 weeks ago",
            author: "Data Science Team",
            authorInitials: "DS"
        }
    ],
    "automated reporting": [
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Automated Status Reporting",
            snippet: "Village's People and Teams modules provide daily and weekly status reporting automatically. Engineers don't need to write up \"here's what I did\" because it's all done automatically. The system generates automated standup reports for geographically dispersed teams and reduces manual overhead for scrum masters by integrating with tools like Jira for comprehensive project tracking.",
            date: "Updated 4 days ago",
            author: "Alex Johnson",
            authorInitials: "AJ"
        }
    ]
};

// Category-specific suggestion chips
const categorySuggestions = {
    "engineering": [
        { text: "Authentication flow", query: "How to set up the authentication flow?" },
        { text: "Payment API contributors", query: "Who worked on the payment API?" },
        { text: "Deployment status", query: "What's the status of the latest deployment?" },
        { text: "User database schema", query: "Find the database schema for users" },
        { text: "PR review example", query: "Show me a PR review example" },
        { text: "Engineering productivity", query: "What are the engineering productivity benefits?" },
        { text: "Automated reporting", query: "How does automated reporting work?" }
    ],
    "product": [
        { text: "Product roadmap", query: "What's on our product roadmap for Q3?" },
        { text: "Feature prioritization", query: "How do we prioritize new features?" },
        { text: "User research findings", query: "Summarize recent user research findings" },
        { text: "Product metrics", query: "What are our key product metrics?" }
    ],
    "marketing": [
        { text: "Campaign performance", query: "How did our last email campaign perform?" },
        { text: "Content calendar", query: "Show me the content calendar for next month" },
        { text: "Brand guidelines", query: "Where can I find our brand guidelines?" },
        { text: "Social media strategy", query: "What's our social media strategy?" }
    ],
    "sales": [
        { text: "Sales pipeline", query: "What's our current sales pipeline?" },
        { text: "Deal closing process", query: "Explain our deal closing process" },
        { text: "Customer objections", query: "Common customer objections and responses" },
        { text: "Sales enablement", query: "What sales enablement resources do we have?" }
    ],
    "customer-success": [
        { text: "Customer onboarding", query: "What's our customer onboarding process?" },
        { text: "Churn reduction", query: "Strategies for reducing customer churn" },
        { text: "Support escalation", query: "How does our support escalation process work?" },
        { text: "Customer health score", query: "How do we calculate customer health scores?" }
    ],
    "operations": [
        { text: "Procurement process", query: "What's our procurement process?" },
        { text: "Security protocols", query: "Explain our security protocols" },
        { text: "Vendor management", query: "How do we manage vendor relationships?" },
        { text: "Compliance requirements", query: "What compliance requirements do we have?" }
    ],
    "leadership": [
        { text: "Company OKRs", query: "What are our company OKRs this quarter?" },
        { text: "Leadership principles", query: "What are our leadership principles?" },
        { text: "Strategic initiatives", query: "What strategic initiatives are we focusing on?" },
        { text: "Board meeting prep", query: "How should I prepare for board meetings?" }
    ],
    "hr": [
        { text: "Hiring process", query: "What's our hiring process?" },
        { text: "Performance reviews", query: "How do we conduct performance reviews?" },
        { text: "Employee benefits", query: "What employee benefits do we offer?" },
        { text: "Remote work policy", query: "What's our remote work policy?" }
    ]
};

// Function to fill the search input with a suggestion
function fillSearch(query) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    
    // Type the query with animation - one character at a time
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < query.length) {
            searchInput.value = query.substring(0, i + 1);
            i++;
        } else {
            clearInterval(typeInterval);
            // Don't automatically perform search, wait for user to press Enter or click Search
        }
    }, 20);
}

// Function to cycle through suggestions automatically
function cycleAutoSuggestions() {
    // Get initial category
    const currentCategory = document.querySelector('.category-tab.active').getAttribute('data-category');
    const suggestions = categorySuggestions[currentCategory];
    let currentIndex = 0;
    let isUserInteracting = false;
    let isTypingInProgress = false;
    let cycleTimeout;
    
    // Check if user is interacting with the search
    const searchInput = document.getElementById('search-input');
    
    function checkInteraction() {
        // If search input has content or search results are showing something other than the placeholder
        const resultsContainer = document.getElementById('search-results');
        const hasResults = !resultsContainer.querySelector('.results-placeholder');
        
        if (searchInput.value.trim() !== '' || hasResults) {
            isUserInteracting = true;
        } else {
            isUserInteracting = false;
        }
    }
    
    searchInput.addEventListener('focus', function() {
        isUserInteracting = true;
    });
    
    searchInput.addEventListener('blur', function() {
        checkInteraction();
    });
    
    // Reset interaction state when search is completed
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-bar') && !e.target.closest('.suggestion-chips') && 
            !e.target.closest('.search-results') && !e.target.closest('.demo-popup')) {
            checkInteraction();
        }
    });
    
    // Function to fill search with auto-rotation tracking - only fills the search bar, doesn't perform search
    function autoCycleFillSearch(query) {
        isTypingInProgress = true;
        
        searchInput.value = '';
        
        // Type the query with animation - using substring to avoid adding extra characters
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < query.length) {
                searchInput.value = query.substring(0, i + 1);
                i++;
            } else {
                clearInterval(typeInterval);
                // Don't automatically perform search, just mark typing as complete
                setTimeout(() => {
                    isTypingInProgress = false;
                }, 2000); // Short delay before allowing next suggestion
            }
        }, 20);
    }
    
    // Start cycling through suggestions
    function startCycling() {
        // Clear any existing timeout
        if (cycleTimeout) clearTimeout(cycleTimeout);
        
        // Get current category and suggestions
        const activeTab = document.querySelector('.category-tab.active');
        const category = activeTab ? activeTab.getAttribute('data-category') : 'engineering';
        const currentSuggestions = categorySuggestions[category] || categorySuggestions['engineering'];
        
        function checkAndCycle() {
            // Only cycle if user is not interacting and typing is not in progress
            checkInteraction();
            if (!isUserInteracting && !isTypingInProgress) {
                autoCycleFillSearch(currentSuggestions[currentIndex].query);
                currentIndex = (currentIndex + 1) % currentSuggestions.length;
            }
            
            // Schedule the next check
            cycleTimeout = setTimeout(checkAndCycle, 6000); // Check every 6 seconds
        }
        
        // Start the cycle
        cycleTimeout = setTimeout(checkAndCycle, 2000);
    }
    
    // Update cycle when category changes
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const newCategory = this.getAttribute('data-category');
            updateSuggestionChips(newCategory);
            
            // Reset index for new category
            currentIndex = 0;
            
            // Restart cycling with the new category
            startCycling();
        });
    });
    
    // Initial suggestion after a delay
    setTimeout(() => {
        if (!isUserInteracting && !isTypingInProgress) {
            autoCycleFillSearch(suggestions[0].query);
            currentIndex = 1; // Start with the second suggestion next time
        }
        startCycling();
    }, 2000);
}

// Function to perform search and display results with typing effect
function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    // Create a loading indicator first
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'chat-loading';
    loadingIndicator.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    resultsContainer.appendChild(loadingIndicator);
    
    // Determine which mock results to show based on the query
    let resultsToShow = [];
    
    if (query.toLowerCase().includes('authentication') || query.toLowerCase().includes('auth flow')) {
        resultsToShow = mockResults["authentication flow"];
    } else if (query.toLowerCase().includes('payment api') || query.toLowerCase().includes('payment')) {
        resultsToShow = mockResults["payment api"];
    } else if (query.toLowerCase().includes('deployment') || query.toLowerCase().includes('deploy')) {
        resultsToShow = mockResults["deployment issues"];
    } else if (query.toLowerCase().includes('database') || query.toLowerCase().includes('schema')) {
        resultsToShow = mockResults["database schema"];
    } else if (query.toLowerCase().includes('pr review') || query.toLowerCase().includes('pull request')) {
        resultsToShow = mockResults["pr review example"];
    }
    
    // Short delay to simulate thinking
    setTimeout(() => {
        resultsContainer.removeChild(loadingIndicator);
        
        // If we have results to show
        if (resultsToShow.length > 0) {
            // Create chat-like response container
            const chatResponse = document.createElement('div');
            chatResponse.className = 'chat-response';
            
            // Create results header
            const resultsHeader = document.createElement('div');
            resultsHeader.className = 'results-header';
            resultsHeader.innerHTML = `<h3>Results for "${query}"</h3>`;
            chatResponse.appendChild(resultsHeader);
            
            // Create response text container
            const responseText = document.createElement('div');
            responseText.className = 'response-text';
            chatResponse.appendChild(responseText);
            
            resultsContainer.appendChild(chatResponse);
            
            // Prepare the full response text
            let fullResponseHTML = '';
            
            resultsToShow.forEach((result, index) => {
                fullResponseHTML += `<div class="result-item"><div class="result-source"><img src="${result.sourceIcon}" alt="${result.source}" class="source-icon"><span class="source-name">${result.source}</span></div><h4 class="result-title">${result.title}</h4><p class="result-snippet">${result.snippet}</p><div class="result-meta"><span class="result-date">${result.date}</span><div class="result-author"><div class="author-avatar">${result.authorInitials}</div><span>${result.author}</span></div></div></div>${index < resultsToShow.length - 1 ? '<hr class="result-divider">' : ''}`;
            });
            
            // Type out the response
            typeOutResponse(responseText, fullResponseHTML);
        } else if (query.trim() !== '') {
            // No results found - create chat-like response
            const chatResponse = document.createElement('div');
            chatResponse.className = 'chat-response';
            
            const noResultsHTML = `<div class="results-placeholder"><div class="placeholder-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6A69F8" stroke-width="2"/><path d="M12 8V12L15 15" stroke="#6A69F8" stroke-width="2" stroke-linecap="round"/></svg></div><h3>No results found</h3><p>I couldn't find any matches for "${query}". Try a different search term or browse our suggested searches.</p></div>`;
            
            // Create response text container
            const responseText = document.createElement('div');
            responseText.className = 'response-text';
            chatResponse.appendChild(responseText);
            
            resultsContainer.appendChild(chatResponse);
            
            // Type out the no results message
            typeOutResponse(responseText, noResultsHTML);
        } else {
            // Empty query, show default placeholder
            resultsContainer.innerHTML = `<div class="results-placeholder"><div class="placeholder-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6A69F8" stroke-width="2"/><path d="M12 8V12L15 15" stroke="#6A69F8" stroke-width="2" stroke-linecap="round"/></svg></div><h3>Ask Village anything about your organization</h3><p>Village connects to your tools and knowledge base to provide instant, accurate answers.</p></div>`;
        }
    }, 1500); // Simulate thinking time
}

// Function to type out response with a typing effect
function typeOutResponse(element, html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html.trim().replace(/\s+/g, ' '); // Normalize whitespace
    
    // Store the full HTML
    const fullHTML = tempDiv.innerHTML;
    let displayedChars = 0;
    const totalChars = getTextContentLength(tempDiv);
    
    // Start with empty content
    element.innerHTML = '';
    
    // Function to get text content length
    function getTextContentLength(el) {
        return el.textContent.length;
    }
    
    // Function to get partial HTML
    function getPartialHTML(fullEl, ratio) {
        // Create a deep clone of the full element
        const tempEl = fullEl.cloneNode(true);
        
        // Calculate how many characters to show
        const targetChars = Math.floor(getTextContentLength(fullEl) * ratio);
        
        // Process the element tree to show only partial text
        processElementTree(tempEl, targetChars);
        
        return tempEl.innerHTML;
    }
    
    // Function to process element tree for partial display
    function processElementTree(el, targetChars) {
        let charCount = 0;
        
        // Process child nodes
        Array.from(el.childNodes).forEach(node => {
            if (charCount >= targetChars) {
                // We've reached our target, remove remaining nodes
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return;
            }
            
            if (node.nodeType === Node.TEXT_NODE) {
                // Text node
                if (charCount + node.textContent.length <= targetChars) {
                    // Include the entire text node
                    charCount += node.textContent.length;
                } else {
                    // Include partial text
                    const remainingChars = targetChars - charCount;
                    node.textContent = node.textContent.substring(0, remainingChars);
                    charCount = targetChars;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Element node - process recursively
                const beforeCount = charCount;
                processElementTree(node, targetChars - beforeCount);
                charCount += getTextContentLength(node);
            }
        });
    }
    
    // Start typing animation
    const typeInterval = setInterval(() => {
        if (displayedChars >= totalChars) {
            clearInterval(typeInterval);
            // Set final content without cursor
            element.innerHTML = fullHTML;
            return;
        }
        
        // Increment displayed characters
        displayedChars += 3; // Adjust speed by changing increment
        
        // Calculate ratio of text to show
        const ratio = Math.min(1, displayedChars / totalChars);
        
        // Get partial HTML
        const partialHTML = getPartialHTML(tempDiv, ratio);
        
        // Display with cursor
        element.innerHTML = partialHTML + '<span class="typing-cursor"></span>';
        
        // Auto-scroll to the bottom of the results container
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.scrollTop = resultsContainer.scrollHeight;
    }, 20);
}

// Function to update suggestion chips based on selected category
function updateSuggestionChips(category) {
    const suggestionChipsContainer = document.querySelector('.suggestion-chips');
    suggestionChipsContainer.innerHTML = '';
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    const suggestions = categorySuggestions[category] || categorySuggestions["engineering"];
    
    suggestions.forEach(suggestion => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion.text;
        chip.setAttribute('data-query', suggestion.query);
        chip.addEventListener('click', function() {
            fillSearch(this.getAttribute('data-query'));
        });
        suggestionChipsContainer.appendChild(chip);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update suggestion chips
            updateSuggestionChips(category);
        });
    });
    
    // Initialize suggestion chips for default category
    updateSuggestionChips('engineering');
    
    // Handle search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                // Check if it's a predefined query
                let isPredefined = false;
                for (const category in categorySuggestions) {
                    if (categorySuggestions[category].some(suggestion => suggestion.query === query)) {
                        isPredefined = true;
                        break;
                    }
                }
                
                // If not a predefined query, show the popup
                if (!isPredefined && demoPopup) {
                    demoPopup.classList.add('show');
                } else {
                    performSearch(query);
                }
            }
        }
    });

    // Handle search button click
    const searchButton = document.getElementById('send-button');
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            // Check if it's a predefined query
            let isPredefined = false;
            for (const category in categorySuggestions) {
                if (categorySuggestions[category].some(suggestion => suggestion.query === query)) {
                    isPredefined = true;
                    break;
                }
            }
            
            // If not a predefined query, show the popup
            if (!isPredefined && demoPopup) {
                demoPopup.classList.add('show');
            } else {
                performSearch(query);
            }
        }
    });
    
    // Handle suggestion chip clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('suggestion-chip')) {
            const query = e.target.getAttribute('data-query');
            fillSearch(query);
        }
    });
    
    // Start auto-suggestion cycle
    cycleAutoSuggestions();
    
    // Show default placeholder
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = `<div class="results-placeholder"><div class="placeholder-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6A69F8" stroke-width="2"/><path d="M12 8V12L15 15" stroke="#6A69F8" stroke-width="2" stroke-linecap="round"/></svg></div><h3>Ask Village anything about your organization</h3><p>Village connects to your tools and knowledge base to provide instant, accurate answers.</p></div>`;
    
    // Handle demo popup buttons
    const demoPopup = document.getElementById('demo-popup');
    const closePopup = document.getElementById('close-popup');
    const stayHereButton = document.getElementById('stay-here');
    const goToDemoButton = document.querySelector('.popup-button.primary');

    if (demoPopup) {
        // Close popup when clicking the X button
        if (closePopup) {
            closePopup.addEventListener('click', function() {
                demoPopup.classList.remove('show');
            });
        }
        
        // Stay on page button
        if (stayHereButton) {
            stayHereButton.addEventListener('click', function() {
                demoPopup.classList.remove('show');
                // Perform search with the current query
                performSearch(searchInput.value.trim());
            });
        }
        
        // Go to demo button
        if (goToDemoButton) {
            goToDemoButton.addEventListener('click', function() {
                window.location.href = 'https://www.villagelabs.ai/get-started';
            });
        }
        
        // Prevent popup close when clicking inside popup
        demoPopup.addEventListener('click', function(e) {
            if (e.target === demoPopup) {
                demoPopup.classList.remove('show');
            }
        });
        
        // Stop propagation on popup content
        const popupContent = demoPopup.querySelector('.popup-content');
        if (popupContent) {
            popupContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // Code for handling the connector popup
    const connectorIcons = document.querySelector('.connector-icons');
    const connectorPopup = document.getElementById('connector-popup');
    const memoryToggle = document.querySelector('.memory-toggle');
    const om1Popup = document.getElementById('om1-popup');
    
    // Handle toggle checkbox change
    const toggleCheckbox = memoryToggle.querySelector('input[type="checkbox"]');
    toggleCheckbox.addEventListener('change', function() {
        // You can add functionality here if needed when the toggle changes
        console.log("Organizational Memory is now " + (this.checked ? "enabled" : "disabled"));
    });

    // Show connector popup when clicking on connector icons
    connectorIcons.addEventListener('click', function(e) {
        e.stopPropagation();
        connectorPopup.style.display = 'block';
        om1Popup.style.display = 'none'; // Hide other popup if open
        
        // Position the popup correctly
        const rect = connectorIcons.getBoundingClientRect();
        connectorPopup.style.top = (rect.bottom + window.scrollY) + 'px';
        connectorPopup.style.left = (rect.left + window.scrollX) + 'px';
    });

    // Show OM1 popup when clicking on memory toggle
    memoryToggle.addEventListener('click', function(e) {
        // Don't show popup when clicking on the checkbox itself
        if (e.target.tagName === 'INPUT') {
            e.stopPropagation();
            return;
        }
        
        e.stopPropagation();
        om1Popup.style.display = 'block';
        connectorPopup.style.display = 'none'; // Hide other popup if open
        
        // Position the popup correctly
        const rect = memoryToggle.getBoundingClientRect();
        om1Popup.style.top = (rect.bottom + window.scrollY) + 'px';
        om1Popup.style.left = (rect.left + window.scrollX) + 'px';
    });

    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!connectorIcons.contains(e.target) && !connectorPopup.contains(e.target)) {
            connectorPopup.style.display = 'none';
        }
        if (!memoryToggle.contains(e.target) && !om1Popup.contains(e.target)) {
            om1Popup.style.display = 'none';
        }
    });
});
