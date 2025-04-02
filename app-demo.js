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
    ],
    // Marketing-related search results
    "email campaign performance": [
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Q2 Email Campaign Performance Report",
            snippet: "Village's automated reporting provided a comprehensive analysis of our recent email campaigns, showing a 24% increase in open rates and 15% increase in click-through rates compared to Q1. The automated customer insights feature identified key engagement patterns and suggested content improvements for future campaigns.",
            date: "Updated 1 week ago",
            author: "Marketing Team",
            authorInitials: "MT"
        },
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Customer Insights: Email Engagement Analysis",
            snippet: "Using Village's deep research capabilities, we've compiled a comprehensive overview of customer feedback and engagement patterns across our email campaigns. The AI has identified key themes in successful emails and provided actionable recommendations for improving future content strategies.",
            date: "Updated 2 weeks ago",
            author: "Sarah Chen",
            authorInitials: "SC"
        }
    ],
    "content calendar": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Q3 Content Calendar and Strategy",
            snippet: "Village has compiled our upcoming content calendar with automated scheduling recommendations based on past performance data. The system has identified optimal posting times and content themes that resonate with our audience, along with suggested improvements for content distribution across channels.",
            date: "Updated 3 days ago",
            author: "Content Team",
            authorInitials: "CT"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Content Planning Discussion",
            snippet: "Thread from the #marketing channel discussing the content calendar for the upcoming month. Village's AI provided topic suggestions based on trending industry keywords and competitive analysis, helping the team prioritize content creation efforts for maximum impact.",
            date: "5 days ago",
            author: "Marketing Leadership",
            authorInitials: "ML"
        }
    ],
    "brand guidelines": [
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Brand Guidelines Master Document",
            snippet: "Comprehensive brand guidelines document including logo usage, color palette, typography, voice and tone guidelines, and visual design principles. Village provides instant access to these guidelines across teams to ensure brand consistency in all communications.",
            date: "Updated 1 month ago",
            author: "Design Team",
            authorInitials: "DT"
        },
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Brand Asset Library",
            snippet: "Centralized collection of brand assets organized and searchable through Village's knowledge management system. Includes approved logos, templates, imagery, and design components with usage guidelines for marketing and communications teams.",
            date: "Updated 2 weeks ago",
            author: "Brand Manager",
            authorInitials: "BM"
        }
    ],
    "social media strategy": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Social Media Strategy 2024",
            snippet: "Village's research and analytics tools have helped us develop a comprehensive social media strategy based on audience insights, competitive analysis, and platform-specific best practices. The document outlines our channel approach, content pillars, posting schedule, and performance metrics.",
            date: "Updated 3 weeks ago",
            author: "Social Media Team",
            authorInitials: "SM"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Social Campaign Performance Analysis",
            snippet: "Village's automated reporting has analyzed our recent social media campaigns and identified key performance patterns. The AI suggests adjusting our posting schedule to increase engagement and recommends content types that have demonstrated higher conversion rates.",
            date: "1 week ago",
            author: "Marketing Analytics",
            authorInitials: "MA"
        }
    ],
    // Product-related search results
    "product roadmap": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Product Roadmap Q3 2024",
            snippet: "Village's organizational memory has compiled our Q3 product roadmap with features prioritized based on customer feedback, market trends, and strategic goals. The document includes timeline projections, resource allocations, and key milestones with dependencies mapped across teams.",
            date: "Updated 1 week ago",
            author: "Product Leadership",
            authorInitials: "PL"
        },
        {
            source: "Jira",
            sourceIcon: "images/integrations/jira.svg",
            title: "Product Development Timeline",
            snippet: "Detailed development timeline for upcoming features and improvements. Village integrates with Jira to provide real-time status updates, resource allocations, and progress tracking across all product initiatives.",
            date: "Updated 2 days ago",
            author: "Product Management",
            authorInitials: "PM"
        }
    ],
    "feature prioritization": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Feature Prioritization Framework",
            snippet: "Village analyzes feature requests across customer feedback channels, support tickets, and sales conversations to help prioritize development efforts. The framework incorporates RICE scoring (Reach, Impact, Confidence, Effort) augmented with AI-driven insights on market trends and competitive positioning.",
            date: "Updated 2 weeks ago",
            author: "Product Strategy",
            authorInitials: "PS"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Feature Planning Discussion",
            snippet: "Thread from the #product channel discussing feature prioritization for the upcoming sprint. Village provided data-backed insights on user needs and potential impact, helping the team make informed decisions on development priorities.",
            date: "4 days ago",
            author: "Product Team",
            authorInitials: "PT"
        }
    ],
    "user research findings": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "User Research Report: Core Workflows",
            snippet: "Village has synthesized findings from recent user interviews, surveys, and usage analytics to identify key pain points and opportunities for improvement in core product workflows. The report includes user journey maps, key insights, and actionable recommendations for product enhancements.",
            date: "Updated 3 weeks ago",
            author: "UX Research Team",
            authorInitials: "UX"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "User Feedback Analysis Q2 2024",
            snippet: "Village's analytics tools have processed feedback from multiple channels to identify recurring themes and prioritize user needs. The report highlights critical usability issues, feature requests, and sentiment analysis with recommendations for product improvements.",
            date: "Updated 1 month ago",
            author: "Customer Insights",
            authorInitials: "CI"
        }
    ],
    "product metrics": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Product Performance Dashboard",
            snippet: "Village's automated reporting provides real-time metrics on product usage, feature adoption, user engagement, and retention. The dashboard tracks key performance indicators against targets and highlights areas for optimization with AI-generated insights.",
            date: "Updated daily",
            author: "Data Science",
            authorInitials: "DS"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Weekly Product Metrics Review",
            snippet: "Village automatically generates weekly reports on product metrics, highlighting significant changes and trends. The analysis includes user growth, feature usage patterns, conversion rates, and retention metrics with contextual insights for decision-making.",
            date: "Updated weekly",
            author: "Product Analytics",
            authorInitials: "PA"
        }
    ],
    // Operations-related search results
    "procurement process": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Procurement Process Documentation",
            snippet: "Village maintains a comprehensive guide to our procurement processes, including vendor selection criteria, approval workflows, budget considerations, and compliance requirements. The system ensures all team members have access to the latest procedures and helps track procurement activities.",
            date: "Updated 1 month ago",
            author: "Operations Team",
            authorInitials: "OT"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Vendor Evaluation Discussion",
            snippet: "Thread from the #operations channel discussing vendor evaluation for new software tools. Village provided historical context on previous vendor relationships and automated comparison of proposals against our procurement criteria.",
            date: "1 week ago",
            author: "Procurement",
            authorInitials: "PR"
        }
    ],
    "security protocols": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Security Protocols and Compliance Standards",
            snippet: "Village maintains our security documentation with role-based access controls to ensure information is available to authorized personnel. The document outlines data protection measures, access controls, incident response procedures, and compliance with SOC2 and GDPR requirements.",
            date: "Updated 3 weeks ago",
            author: "Security Team",
            authorInitials: "ST"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Security Training Materials",
            snippet: "Comprehensive security training resources for all team members, covering data protection, secure communication practices, and threat identification. Village tracks completion and comprehension to ensure organizational compliance with security protocols.",
            date: "Updated 2 months ago",
            author: "IT Department",
            authorInitials: "IT"
        }
    ],
    "vendor management": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Vendor Relationship Management Guide",
            snippet: "Village's organizational memory preserves our approach to vendor management, including selection criteria, performance evaluation metrics, contract negotiation guidelines, and relationship maintenance strategies. The system helps track vendor interactions and ensures consistent engagement.",
            date: "Updated 2 weeks ago",
            author: "Operations Leadership",
            authorInitials: "OL"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Quarterly Vendor Review Process",
            snippet: "Village automates the collection and analysis of vendor performance data, facilitating quarterly reviews with standardized metrics. The process includes satisfaction ratings, delivery timeliness, quality assessments, and cost-effectiveness evaluations.",
            date: "Updated quarterly",
            author: "Vendor Management",
            authorInitials: "VM"
        }
    ],
    "compliance requirements": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Compliance Requirements Overview",
            snippet: "Village maintains a comprehensive repository of compliance requirements relevant to our operations, including industry regulations, data protection standards, and contractual obligations. The system helps track compliance status and upcoming requirements with automated alerts.",
            date: "Updated monthly",
            author: "Legal Team",
            authorInitials: "LT"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Compliance Audit Documentation",
            snippet: "Village organizes and preserves all documentation related to compliance audits, including SOC2 and GDPR certification. The system provides quick access to evidence files, audit histories, and remediation plans for continuous compliance management.",
            date: "Updated quarterly",
            author: "Compliance Officer",
            authorInitials: "CO"
        }
    ],
    // HR-related search results
    "hiring process": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Hiring Process Documentation",
            snippet: "Village preserves our end-to-end hiring workflow, from requisition approval to onboarding. The document outlines role definition, candidate sourcing strategies, interview processes, evaluation criteria, and offers a consistent reference for all hiring managers.",
            date: "Updated 3 weeks ago",
            author: "Talent Acquisition",
            authorInitials: "TA"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Candidate Evaluation Discussion",
            snippet: "Village facilitates collaborative hiring decisions by organizing feedback from multiple interviewers in structured formats. Thread from the #hiring channel shows how the system helps compare candidates against job requirements and team fit criteria.",
            date: "1 week ago",
            author: "Hiring Committee",
            authorInitials: "HC"
        }
    ],
    "performance reviews": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Performance Review Process Guide",
            snippet: "Village maintains our performance review framework, including evaluation criteria, timeline, feedback collection methods, and calibration procedures. The system helps managers track objectives throughout the review period and provides historical context for growth discussions.",
            date: "Updated quarterly",
            author: "People Operations",
            authorInitials: "PO"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Performance Evaluation Templates",
            snippet: "Standardized templates for performance reviews across different roles and levels. Village ensures all managers have access to consistent evaluation tools and helps track completion rates and quality of feedback across departments.",
            date: "Updated 2 months ago",
            author: "HR Team",
            authorInitials: "HR"
        }
    ],
    "employee benefits": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Employee Benefits Overview",
            snippet: "Village provides a comprehensive repository of information about our benefits programs, including health insurance, retirement plans, time off policies, professional development allowances, and wellness initiatives. The system ensures all employees have access to the latest benefits information.",
            date: "Updated monthly",
            author: "Benefits Administration",
            authorInitials: "BA"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Benefits FAQ and Resources",
            snippet: "Village collects and organizes frequently asked questions about employee benefits, providing instant access to answers and relevant resources. Thread from the #hr-questions channel shows how the system helps employees navigate benefits enrollment and utilization.",
            date: "Updated weekly",
            author: "HR Support",
            authorInitials: "HS"
        }
    ],
    "remote work policy": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Remote Work Policy Documentation",
            snippet: "Village maintains our remote work guidelines, including eligibility criteria, communication expectations, equipment provisions, security requirements, and performance management approaches. The system ensures all team members understand remote work standards and processes.",
            date: "Updated 1 month ago",
            author: "HR Leadership",
            authorInitials: "HL"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Remote Work Best Practices Guide",
            snippet: "Compiled resources for effective remote work, including communication tools, productivity strategies, collaboration techniques, and work-life balance recommendations. Village helps preserve and share organizational knowledge about successful remote working approaches.",
            date: "Updated 2 months ago",
            author: "People Experience",
            authorInitials: "PE"
        }
    ],
    // Category-specific suggestion chips
    "engineering": [
        { text: "Authentication flow", query: "How to set up the authentication flow?" },
        { text: "Payment API contributors", query: "Who worked on the payment API?" },
        { text: "PR review example", query: "Show me a PR review example" }
    ],
    "product": [
        { text: "Product roadmap", query: "What's on our product roadmap for Q3?" },
        { text: "Feature prioritization", query: "How do we prioritize new features?" },
        { text: "User research findings", query: "Summarize recent user research findings" }
    ],
    "marketing": [
        { text: "Campaign performance", query: "How did our last email campaign perform?" },
        { text: "Content calendar", query: "Show me the content calendar for next month" },
        { text: "Brand guidelines", query: "Where can I find our brand guidelines?" }
    ],
    "operations": [
        { text: "Procurement process", query: "What's our procurement process?" },
        { text: "Security protocols", query: "Explain our security protocols" },
        { text: "Vendor management", query: "How do we manage vendor relationships?" }
    ],
    "hr": [
        { text: "Hiring process", query: "What's our hiring process?" },
        { text: "Performance reviews", query: "How do we conduct performance reviews?" },
        { text: "Employee benefits", query: "What employee benefits do we offer?" }
    ]
};

const categorySuggestions = {
    "engineering": [
        { text: "Authentication flow", query: "How to set up the authentication flow?" },
        { text: "Payment API contributors", query: "Who worked on the payment API?" },
        { text: "PR review example", query: "Show me a PR review example" }
    ],
    "product": [
        { text: "Product roadmap", query: "What's on our product roadmap for Q3?" },
        { text: "Feature prioritization", query: "How do we prioritize new features?" },
        { text: "User research findings", query: "Summarize recent user research findings" }
    ],
    "marketing": [
        { text: "Campaign performance", query: "How did our last email campaign perform?" },
        { text: "Content calendar", query: "Show me the content calendar for next month" },
        { text: "Brand guidelines", query: "Where can I find our brand guidelines?" }
    ],
    "operations": [
        { text: "Procurement process", query: "What's our procurement process?" },
        { text: "Security protocols", query: "Explain our security protocols" },
        { text: "Vendor management", query: "How do we manage vendor relationships?" }
    ],
    "hr": [
        { text: "Hiring process", query: "What's our hiring process?" },
        { text: "Performance reviews", query: "How do we conduct performance reviews?" },
        { text: "Employee benefits", query: "What employee benefits do we offer?" }
    ]
};

// Global variables to track animation intervals
let currentBackspaceInterval = null;
let currentTypeInterval = null;
let animationPauseTimeout = null;
let isTypingInProgress = false;
let isShowingSearchResults = false;  // New flag to track search state
let cycleTimeout = null;  // Make cycleTimeout globally accessible

// Function to fill the search input with a suggestion
function fillSearch(query) {
    const searchInput = document.getElementById('search-input');
    const currentText = searchInput.value.replace('|', ''); // Remove any existing caret
    
    // Clear any ongoing animations first
    if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
    if (currentTypeInterval) clearInterval(currentTypeInterval);
    if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
    
    // First backspace the current text before typing the new query
    if (currentText.length > 0) {
        let currentLength = currentText.length;
        currentBackspaceInterval = setInterval(() => {
            if (currentLength > 0) {
                searchInput.value = currentText.substring(0, currentLength - 1) + '|';
                currentLength--;
            } else {
                clearInterval(currentBackspaceInterval);
                currentBackspaceInterval = null;
                typeNewQuery();
            }
        }, 15);
    } else {
        typeNewQuery();
    }
    
    // Function to type new query after backspacing
    function typeNewQuery() {
        let i = 0;
        currentTypeInterval = setInterval(() => {
            if (i < query.length) {
                searchInput.value = query.substring(0, i + 1) + '|';
                i++;
            } else {
                clearInterval(currentTypeInterval);
                currentTypeInterval = null;
                searchInput.value = query; // Remove caret at the end
                // Signal that typing is complete
                if (window.onTypingComplete) {
                    window.onTypingComplete();
                }
            }
        }, 20);
    }
}

// Function for auto-cycling through search queries with animation
function autoCycleFillSearch(query) {
    isTypingInProgress = true;
    
    // Use the fillSearch function for the animation
    fillSearch(query);
    
    // Set up callback for when typing is complete
    window.onTypingComplete = () => {
        setTimeout(() => {
            isTypingInProgress = false;
            window.onTypingComplete = null;
        }, 300);
    };
}

// Function to cycle through suggestions automatically
function cycleAutoSuggestions() {
    let currentCategory = 'engineering';
    let currentIndex = 0;
    let isUserInteracting = false;
    
    function checkAndCycle() {
        // Get current category from active tab
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            currentCategory = activeTab.getAttribute('data-category');
        }
        
        const suggestions = categorySuggestions[currentCategory] || categorySuggestions["engineering"];
        
        // Only cycle if not showing search results and not typing
        if (!isShowingSearchResults && !isUserInteracting && !isTypingInProgress) {
            autoCycleFillSearch(suggestions[currentIndex].query);
            currentIndex = (currentIndex + 1) % suggestions.length;
        }
        
        // Only set new timeout if we're not showing search results
        if (!isShowingSearchResults) {
            if (cycleTimeout) clearTimeout(cycleTimeout);
            cycleTimeout = setTimeout(checkAndCycle, 2500);
        }
    }
    
    // Start first suggestion sooner
    setTimeout(() => {
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            currentCategory = activeTab.getAttribute('data-category');
        }
        const suggestions = categorySuggestions[currentCategory] || categorySuggestions["engineering"];
        if (!isShowingSearchResults && !isTypingInProgress) {
            autoCycleFillSearch(suggestions[0].query);
            currentIndex = 1;
            // Only set new timeout if we're not showing search results
            if (!isShowingSearchResults) {
                if (cycleTimeout) clearTimeout(cycleTimeout);
                cycleTimeout = setTimeout(checkAndCycle, 2500);
            }
        }
    }, 800);
    
    // Update category when tabs are clicked
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const newCategory = this.getAttribute('data-category');
            if (newCategory !== currentCategory) {
                currentCategory = newCategory;
                currentIndex = 0;
                // Clear existing timeout
                if (cycleTimeout) {
                    clearTimeout(cycleTimeout);
                }
                // Start new cycle immediately with first suggestion of new category
                const suggestions = categorySuggestions[currentCategory];
                if (!isTypingInProgress) {
                    autoCycleFillSearch(suggestions[0].query);
                    currentIndex = 1;
                    cycleTimeout = setTimeout(checkAndCycle, 2500);
                }
            }
        });
    });
}

// Function to perform search and display results with typing effect
function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    // Stop the auto-cycling when performing search
    isShowingSearchResults = true;
    if (cycleTimeout) {
        clearTimeout(cycleTimeout);
        cycleTimeout = null;
    }
    
    // Clear any ongoing animations first
    if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
    if (currentTypeInterval) clearInterval(currentTypeInterval);
    if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
    
    // Create a loading indicator with the logo and text
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'chat-loading';
    loadingIndicator.innerHTML = `
        <div class="loading-content">
            <img src="images/Ellipse 2.png" alt="Village Logo" class="loading-logo">
            <p class="loading-text">Retrieved organizational memory. Generating response...</p>
        </div>
    `;
    resultsContainer.appendChild(loadingIndicator);
    
    // Determine which mock results to show based on the query
    let resultsToShow = [];
    const queryLower = query.toLowerCase();
    
    // Engineering searches
    if (queryLower.includes('authentication') || queryLower.includes('auth flow')) {
        resultsToShow = mockResults["authentication flow"];
    } else if (queryLower.includes('payment api') || queryLower.includes('payment')) {
        resultsToShow = mockResults["payment api"];
    } else if (queryLower.includes('deployment') || queryLower.includes('deploy')) {
        resultsToShow = mockResults["deployment issues"];
    } else if (queryLower.includes('database') || queryLower.includes('schema')) {
        resultsToShow = mockResults["database schema"];
    } else if (queryLower.includes('pr review') || queryLower.includes('pull request')) {
        resultsToShow = mockResults["pr review example"];
    } else if (queryLower.includes('engineering productivity')) {
        resultsToShow = mockResults["engineering productivity"];
    } else if (queryLower.includes('automated reporting') || queryLower.includes('report')) {
        resultsToShow = mockResults["automated reporting"];
    }
    // Marketing searches
    else if (queryLower.includes('email campaign') || queryLower.includes('campaign performance')) {
        resultsToShow = mockResults["email campaign performance"];
    } else if (queryLower.includes('content calendar')) {
        resultsToShow = mockResults["content calendar"];
    } else if (queryLower.includes('brand guidelines')) {
        resultsToShow = mockResults["brand guidelines"];
    } else if (queryLower.includes('social media') || queryLower.includes('social strategy')) {
        resultsToShow = mockResults["social media strategy"];
    }
    // Product searches
    else if (queryLower.includes('product roadmap') || queryLower.includes('roadmap')) {
        resultsToShow = mockResults["product roadmap"];
    } else if (queryLower.includes('feature prioritization') || queryLower.includes('prioritize')) {
        resultsToShow = mockResults["feature prioritization"];
    } else if (queryLower.includes('user research') || queryLower.includes('research findings')) {
        resultsToShow = mockResults["user research findings"];
    } else if (queryLower.includes('product metrics') || queryLower.includes('metrics')) {
        resultsToShow = mockResults["product metrics"];
    }
    // Operations searches
    else if (queryLower.includes('procurement') || queryLower.includes('procurement process')) {
        resultsToShow = mockResults["procurement process"];
    } else if (queryLower.includes('security') || queryLower.includes('security protocols')) {
        resultsToShow = mockResults["security protocols"];
    } else if (queryLower.includes('vendor') || queryLower.includes('vendor management')) {
        resultsToShow = mockResults["vendor management"];
    } else if (queryLower.includes('compliance') || queryLower.includes('compliance requirements')) {
        resultsToShow = mockResults["compliance requirements"];
    }
    // HR searches
    else if (queryLower.includes('hiring') || queryLower.includes('hiring process')) {
        resultsToShow = mockResults["hiring process"];
    } else if (queryLower.includes('performance review') || queryLower.includes('review')) {
        resultsToShow = mockResults["performance reviews"];
    } else if (queryLower.includes('employee benefits') || queryLower.includes('benefits')) {
        resultsToShow = mockResults["employee benefits"];
    } else if (queryLower.includes('remote work') || queryLower.includes('remote policy')) {
        resultsToShow = mockResults["remote work policy"];
    }
    
    // Short delay to simulate thinking
    setTimeout(() => {
        resultsContainer.removeChild(loadingIndicator);
        
        // If we have results to show
        if (resultsToShow.length > 0) {
            // Create chat-like response container
            const chatResponse = document.createElement('div');
            chatResponse.className = 'chat-response';
            
            // Create response text container
            const responseText = document.createElement('div');
            responseText.className = 'response-text';
            chatResponse.appendChild(responseText);
            
            resultsContainer.appendChild(chatResponse);
            
            // Create a GitHub PR style response
            let fullResponseHTML = `
                <div class="github-pr-container">
                    <div class="pr-content">
                        <p class="pr-context"><img src="images/village-icon.svg" class="inline-logo" alt="Village Logo">Here are the most recent pull requests from GitHub, focusing on the latest changes:</p>
                        <h3 class="pr-title">${resultsToShow[0].title}</h3>
                        <p class="pr-description">This is the most recent PR, focusing on ${resultsToShow[0].title.toLowerCase()}:</p>
                        <ul class="pr-changes">`;
            
            // Add bullet points for each result
            resultsToShow.forEach(result => {
                fullResponseHTML += `
                    <li class="pr-change-item">
                        <span class="pr-change-text">${result.snippet}</span>
                        <span class="pr-link">[<span style="color: #41cfa4;">${result.source}</span>]</span>
                    </li>`;
            });
            
            // Add risk score and other sections
            fullResponseHTML += `
                        </ul>
                        <div class="pr-risk-score">
                            <strong>Risk Score:</strong> 4/10 - Moderate changes with potential interaction complexity
                        </div>
                        
                        <h4 class="pr-section-title">Notable Code Changes:</h4>
                        <div class="code-block">
                            <pre><code>useEffect(() => {
  isListeningRef.current = isListening;
  currentHandleSubmitRef.current = handleSubmit;
}, );</code></pre>
                        </div>
                        
                        <h4 class="pr-section-title">Potential Issues:</h4>
                        <ul class="pr-issues">
                            <li>Complex state management using multiple refs could lead to unexpected behavior</li>
                            <li>Async handling of attachments during speech input stop could introduce race conditions</li>
                        </ul>
                        
                        <h4 class="pr-section-title">Related Active Issues:</h4>
                        <ul class="pr-related-issues">
                            <li>A bug was recently reported regarding ${resultsToShow[0].title.toLowerCase()} continuing to record after submission</li>
                        </ul>
                    </div>
                </div>
            `;
            
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
            resultsContainer.innerHTML = `<div class="results-placeholder">
                <img src="images/search-illustration.svg" alt="Search Illustration" class="placeholder-image">
                <h3>Search across all your engineering tools</h3>
                <p>Village connects to GitHub, Jira, Slack, Notion, and more to help you find information instantly.</p>
            </div>`;
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
    const suggestionChipsContainer = document.querySelector('.search-categories .suggestion-chips');
    if (!suggestionChipsContainer) return;
    
    suggestionChipsContainer.innerHTML = '';
    const suggestions = categorySuggestions[category] || categorySuggestions["engineering"];
    
    suggestions.forEach(suggestion => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        chip.setAttribute('data-query', suggestion.query);
        
        // Create title element
        const titleElement = document.createElement('div');
        titleElement.className = 'suggestion-title';
        titleElement.textContent = suggestion.text;
        
        // Create preview element that shows the actual query
        const previewElement = document.createElement('div');
        previewElement.className = 'suggestion-preview';
        previewElement.textContent = suggestion.query;
        
        // Add elements to chip
        chip.appendChild(titleElement);
        chip.appendChild(previewElement);
        
        // Add click event listener
        chip.addEventListener('click', function() {
            // Stop the auto-cycling
            isShowingSearchResults = true;
            // Use fillSearch to animate the text
            fillSearch(suggestion.query);
        });
        
        suggestionChipsContainer.appendChild(chip);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Remove fullscreen button since we're keeping only the regular version
    removeFullscreenButton();
    
    // Add a CSS rule to ensure all elements in the app demo section use Inter font
    const style = document.createElement('style');
    style.textContent = `
        .app-demo-section * {
            font-family: 'Inter', sans-serif !important;
        }
        
        .app-demo-section h3,
        .app-demo-section h4,
        .app-demo-section .demo-title,
        .app-demo-section .result-title,
        .app-demo-section .suggestions h3 {
            font-weight: 500 !important;
        }
        
        .app-demo-section p,
        .app-demo-section input,
        .app-demo-section .result-snippet,
        .app-demo-section .source-name,
        .app-demo-section .result-date,
        .app-demo-section .result-author {
            font-weight: 400 !important;
        }
        
        .app-demo-container .search-input-container input {
            font-family: 'Inter', sans-serif !important;
            font-weight: 400 !important;
        }
    `;
    document.head.appendChild(style);
    
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
                    if (categorySuggestions[category].some(suggestion => 
                        suggestion.query.toLowerCase() === query.toLowerCase() ||  // Exact match
                        suggestion.text.toLowerCase() === query.toLowerCase()      // Match suggestion text
                    )) {
                        isPredefined = true;
                        break;
                    }
                }
                
                // Only show popup for non-predefined (user-typed) queries
                if (!isPredefined && demoPopup) {
                    demoPopup.classList.add('show');
                } else {
                    performSearch(query);
                }
            }
        }
    });
    
    // Remove cursor when input is focused
    searchInput.addEventListener('focus', function() {
        // Remove any existing cursor when user focuses on the input
        const existingCursors = document.querySelectorAll('.input-cursor-container');
        existingCursors.forEach(cursor => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        });
    });

    // Handle search button click
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            // Check if it's a predefined query
            let isPredefined = false;
            for (const category in categorySuggestions) {
                if (categorySuggestions[category].some(suggestion => 
                    suggestion.query.toLowerCase() === query.toLowerCase() ||  // Exact match
                    suggestion.text.toLowerCase() === query.toLowerCase()      // Match suggestion text
                )) {
                    isPredefined = true;
                    break;
                }
            }
            
            // Only show popup for non-predefined (user-typed) queries
            if (!isPredefined && demoPopup) {
                demoPopup.classList.add('show');
            } else {
                performSearch(query);
            }
        }
    });
    
    // Start auto-suggestion cycle
    cycleAutoSuggestions();
    
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
        
        // Calculate horizontal position to ensure popup stays within viewport
        const windowWidth = window.innerWidth;
        const popupWidth = connectorPopup.offsetWidth;
        let leftPosition = rect.left + window.scrollX;
        
        // Adjust if it would go off the right edge
        if (leftPosition + popupWidth > windowWidth - 20) {
            leftPosition = Math.max(20, windowWidth - popupWidth - 20);
        }
        
        connectorPopup.style.left = leftPosition + 'px';
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
        
        // Calculate horizontal position to ensure popup stays within viewport
        const windowWidth = window.innerWidth;
        const popupWidth = om1Popup.offsetWidth;
        let leftPosition = rect.left + window.scrollX;
        
        // Adjust if it would go off the right edge
        if (leftPosition + popupWidth > windowWidth - 20) {
            leftPosition = Math.max(20, windowWidth - popupWidth - 20);
        }
        
        om1Popup.style.left = leftPosition + 'px';
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

// Add reset function for when search is cleared
function resetSearch() {
    isShowingSearchResults = false;
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = `
        <div class="results-placeholder">
            <img src="images/search-illustration.svg" alt="Search Illustration" class="placeholder-image">
            <h3>Search across all your engineering tools</h3>
            <p>Village connects to GitHub, Jira, Slack, Notion, and more to help you find information instantly.</p>
        </div>
    `;
    // Restart the suggestion cycle
    cycleAutoSuggestions();
}

// Remove fullscreen button if it exists (since we're removing the fullscreen version)
function removeFullscreenButton() {
    // Remove any fullscreen buttons that might be added by the fullscreen scripts
    const fullscreenButton = document.getElementById('om1-fullscreen-button');
    if (fullscreenButton) {
        fullscreenButton.parentNode.removeChild(fullscreenButton);
    }
    
    // Also remove any fullscreen button containers
    const buttonContainers = document.querySelectorAll('.fullscreen-button-container');
    buttonContainers.forEach(container => {
        container.parentNode.removeChild(container);
    });
}
