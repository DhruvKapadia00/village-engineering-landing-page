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
    ]
};

// Function to fill the search input with a suggestion
function fillSearch(query) {
    document.getElementById('search-input').value = query;
    performSearch(query);
}

// Function to perform search and display results
function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
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
    }
    
    // If we have results to show
    if (resultsToShow.length > 0) {
        // Create results header
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'results-header';
        resultsHeader.innerHTML = `<h3>Results for "${query}"</h3>`;
        resultsContainer.appendChild(resultsHeader);
        
        // Create result items
        resultsToShow.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <div class="result-source">
                    <img src="${result.sourceIcon}" alt="${result.source}" class="source-icon">
                    <span class="source-name">${result.source}</span>
                </div>
                <h4 class="result-title">${result.title}</h4>
                <p class="result-snippet">${result.snippet}</p>
                <div class="result-meta">
                    <span class="result-date">${result.date}</span>
                    <div class="result-author">
                        <div class="author-avatar">${result.authorInitials}</div>
                        <span>${result.author}</span>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else if (query.trim() !== '') {
        // No results found
        resultsContainer.innerHTML = `
            <div class="results-placeholder">
                <img src="images/no-results.svg" alt="No Results" class="placeholder-image">
                <h3>No results found</h3>
                <p>We couldn't find any matches for "${query}". Try a different search term or browse our suggested searches.</p>
            </div>
        `;
    } else {
        // Empty query, show default placeholder
        resultsContainer.innerHTML = `
            <div class="results-placeholder">
                <img src="images/search-illustration.svg" alt="Search Illustration" class="placeholder-image">
                <h3>Search across all your engineering tools</h3>
                <p>Village connects to GitHub, Jira, Slack, Notion, and more to help you find information instantly.</p>
            </div>
        `;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-button');
    
    // Search button click event
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // Enter key press event
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Add typing animation to search input
    setTimeout(() => {
        const demoQuery = "How to set up the authentication flow?";
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < demoQuery.length) {
                searchInput.value += demoQuery.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    performSearch(demoQuery);
                }, 500);
            }
        }, 100);
    }, 1500);
});
