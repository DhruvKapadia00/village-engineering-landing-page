// Village OM1 Fullscreen Demo v2
// A polished, production-quality demo of the Village OM1 experience

// QA data with prompts and answers by category
const qaData = {
  "Engineering": [
    {
      prompt: "What's slowing down engineering?",
      answer: `Here are the key factors currently slowing down engineering progress:

1. **PR Bottlenecks**
   - Several key PRs are awaiting review (e.g., PR #1141 has been idle for 5+ days).
2. **Bug Backlog**
   - 17+ critical bugs in Jira need triage.
3. **Unaligned Sprint Work**
   - Some sprint items are not tied to Q2 goals.

Team plans a cleanup sprint next week.`
    },
    {
      prompt: "Summarize PR 123",
      answer: `I couldn't find PR #123 in current records.

Related PRs:
- PR #124: Retry logic patch
- PR #122: Refactored auth validation

Please check GitHub manually.`
    },
    {
      prompt: "Who is working on onboarding?",
      answer: `Onboarding flow assignees:
- Rahul (Frontend)
- Linda (Content)
- Mel (Backend workflow)

ETA: Wednesday.`
    }
  ],
  "Product": [
    {
      prompt: "What shipped last week?",
      answer: `Shipped features:

1. Slack digest sync
2. OKR detail view
3. New integrations settings modal

Release notes in Notion.`
    },
    {
      prompt: "Roadmap status?",
      answer: `Q2 Roadmap:

- Coworker AI ✅
- Search infra 🟡
- Workflow tools 🔴 (delayed 1 week)

~68% completion.`
    },
    {
      prompt: "What got cut from Q2?",
      answer: `Removed from Q2 scope:

- PDF summarization
- Voice assistant beta

Reprioritized for infra scaling.`
    }
  ],
  "Sales": [
    {
      prompt: "Latest deal status?",
      answer: `Active enterprise deals:

1. Acme Corp: Final stage ✅
   Contract in legal review
   
2. TechGlobal: Discovery 🟡
   Demo scheduled for Thursday
   
3. DataFlow: Negotiation 🟡
   Discussing enterprise terms`
    },
    {
      prompt: "Q2 pipeline health",
      answer: `Q2 Pipeline Health:

- Total value: $2.4M
- Qualified opportunities: 14
- Late-stage deals: 5 ($1.2M)

Current win rate: 21%`
    },
    {
      prompt: "Top objections from prospects?",
      answer: `Common objections from prospects:

1. **Budget constraints** - "We don't have budget until next quarter"
   Response: Flexible payment options, ROI calculator
   
2. **Implementation concerns** - "Seems complex to set up"
   Response: 30-min setup guarantee, dedicated onboarding

3. **Security requirements** - "Need SOC2 compliance"
   Response: Share security documentation, compliance sheet`
    }
  ],
  "Customer Success": [
    {
      prompt: "At-risk accounts?",
      answer: `At-risk accounts (July):

1. **Nexus Systems** ⚠️
   - Low usage in engineering team
   - Action: Executive business review scheduled
   
2. **Meridian Inc** ⚠️
   - Contract renewal in 45 days
   - Pricing concerns raised
   - Action: Discount options prepared

3. **TechFront** 🔴
   - Usage dropped 60% last month
   - Restructuring their team
   - Action: Health check call tomorrow`
    },
    {
      prompt: "Customer feature requests",
      answer: `Top feature requests (last 30 days):

1. Advanced permissions (17 requests)
   Status: In sprint planning
   
2. Bulk import/export (14 requests)
   Status: In development, ETA 3 weeks
   
3. Custom dashboards (11 requests)
   Status: On roadmap for Q3

Feature committee meets Friday to review priorities.`
    },
    {
      prompt: "Expansion opportunities?",
      answer: `High expansion potential:

1. **GlobalTech**
   - Current: 50 seats ($24k ARR)
   - Opportunity: +100 seats ($48k ARR)
   - Next steps: Present to CTO next week
   
2. **Innovate Inc**
   - Current: Engineering only (25 seats)
   - Opportunity: Add Product team (35 seats)
   - Next steps: Demo for Product VP tomorrow
   
3. **AlphaSystems**
   - Current: Basic plan
   - Opportunity: Enterprise upgrade
   - Next steps: Security review in process`
    }
  ],
  "Operations": [
    {
      prompt: "Office reopening plans?",
      answer: `Office reopening status:

- SF HQ: Partial reopening Aug 15
  - 3 days/week flexible schedule
  - Capacity limited to 70%
  
- NYC: Open now (Tues/Thurs recommended)
  - 50% capacity, reservation required
  
- Remote policy updated in Notion
  - Equipment stipend increased to $750/year
  - Quarterly in-person team events`
    },
    {
      prompt: "IT equipment requests",
      answer: `IT equipment processing:

- Standard laptops: 3-5 business days
- Custom equipment: 2-3 weeks (supply chain delays)
- Peripherals: 1 week typically

Submit all requests through IT portal.
Expedited process available for new hires.`
    },
    {
      prompt: "Current software vendors?",
      answer: `Core software vendors:

1. **Productivity**
   - Google Workspace: $38k/yr
   - Notion: $24k/yr
   - Slack: $32k/yr

2. **Engineering**
   - Github Enterprise: $48k/yr
   - Jira/Atlassian: $36k/yr
   - AWS: ~$215k/yr (variable)

3. **Sales/Marketing**
   - Salesforce: $75k/yr
   - HubSpot: $42k/yr
   - Gong: $30k/yr

All contracts in Contract Management System.`
    }
  ],
  "Leadership": [
    {
      prompt: "Company priorities Q3?",
      answer: `Q3 2024 Company Priorities:

1. **Revenue Growth** 🎯
   - Target: $2.8M ARR (+40%)
   - Owner: Sara (CRO)
   
2. **Product Market Fit** 📈
   - Improve product NPS to 60+
   - Reduce churn to <5%
   - Owner: Michael (CPO)
   
3. **Operational Excellence** ⚙️
   - Improve gross margins to 80%
   - Standardize reporting
   - Owner: Priya (COO)

Executive team reviews weekly on Mondays.`
    },
    {
      prompt: "Fundraising plans?",
      answer: `Fundraising status:

- Series A target: $12-15M
- Timeline: Starting conversations in August
- Current runway: 14 months
- Target valuation: $70-90M

Data room preparation in progress.
Investor meetings being scheduled for September.`
    },
    {
      prompt: "All-hands meeting agenda",
      answer: `Next All-Hands Meeting (July 15):

1. CEO Update (10 min)
   - Q2 results
   - Market context
   
2. Product Demo (15 min)
   - New features
   - Customer success story
   
3. Team Spotlight (10 min)
   - Engineering: Search infrastructure
   
4. Open Q&A (15 min)
   - Submit questions via Slido

Recording will be available in Notion.`
    }
  ],
  "HR / People": [
    {
      prompt: "Open roles engineering?",
      answer: `Current Engineering Openings:

1. **Senior Backend Engineer** (2 positions)
   - Ruby/Rails, scaling experience
   - 15 applications in review
   
2. **DevOps Engineer**
   - AWS, Kubernetes, CI/CD
   - Final interviews this week
   
3. **Engineering Manager**
   - 5+ years management experience
   - New opening, just posted

Referral bonus: $5,000 (after 90 days)`
    },
    {
      prompt: "Upcoming company holidays?",
      answer: `Upcoming Company Holidays:

- July 4-5: Independence Day (Thurs-Fri)
- September 2: Labor Day
- October 14: Indigenous Peoples' Day
- November 28-29: Thanksgiving

Plus:
- Flexible PTO policy
- Year-end office closure (Dec 23-Jan 1)
- 2 floating holidays of your choice`
    },
    {
      prompt: "Benefits enrollment deadline",
      answer: `Benefits Enrollment Information:

- Open enrollment: Oct 15-Nov 10
- Changes effective: January 1
- New options: Enhanced mental health coverage

For new hires: Enrollment within 30 days of start date.
Contact benefits@company.com with questions.`
    }
  ]
};

// Current category selection
let currentCategory = 'Engineering';

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create the fullscreen button
  createFullscreenButton();
});

// Create the fullscreen button
function createFullscreenButton() {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'fullscreen-button-container';
  
  const button = document.createElement('button');
  button.id = 'om1-fullscreen-button';
  button.textContent = 'Fullscreen OM1 Demo';
  button.addEventListener('click', initFullscreenOverlay);
  
  buttonContainer.appendChild(button);
  
  // Find a suitable location to add the button
  const targetSection = document.querySelector('.app-demo-section') || document.querySelector('main') || document.querySelector('body');
  if (targetSection) {
    targetSection.appendChild(buttonContainer);
  }
}

// Create and initialize the fullscreen overlay
function initFullscreenOverlay() {
  // Save current scroll position
  document.body.dataset.scrollY = window.scrollY;
  
  // Add class to body to handle scrolling behavior and isolate the overlay
  document.body.classList.add('om1-active');
  document.body.style.overflow = 'hidden';
  
  // Create the fullscreen container
  const fullscreenElement = document.createElement('div');
  fullscreenElement.className = 'om1-fullscreen';
  fullscreenElement.id = 'om1-fullscreen';
  fullscreenElement.style.opacity = '0'; // Start with opacity 0 for fade-in
  
  // Add HTML structure
  fullscreenElement.innerHTML = `
    <div class="om1-topbar">
      <div class="om1-title">
        <div style="height: 24px; width: 24px; border-radius: 50%; background: linear-gradient(135deg, #9AE7B5 0%, #4FCCC0 100%); margin-right: 8px; vertical-align: middle; display: inline-block;"></div>
        Village
      </div>
      <button class="om1-close-button" id="om1-close-button">✕</button>
    </div>
    
    <div class="om1-content">
      <div class="om1-header">
        <div class="om1-logo" style="width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, #9AE7B5 0%, #4FCCC0 100%);"></div>
        <h1>Information to action in seconds.</h1>
        <p>Superhuman answers, analysis, and work across all your company's apps.</p>
      </div>
      
      <div class="om1-search-container">
        <div class="om1-search-input-wrapper">
          <div class="unified-search-bar">
            <div class="search-input-container">
              <input type="text" id="om1-search-input" placeholder="Focus for today">
            </div>
            <div class="search-toolbar">
              <div class="connector-icons">
                <img src="images/integrations/github.png" class="connector-icon" alt="GitHub">
                <img src="images/integrations/download.png" class="connector-icon" alt="API">
                <span class="connector-more">20+</span>
              
                <div class="memory-toggle">
                  <label class="toggle">
                    <input type="checkbox" checked>
                    <span class="toggle-slider"></span>
                  </label>
                  <span class="toggle-label">OM1</span>
                </div>
              </div>
              
              <div class="search-actions">
                <button class="mic-button">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </button>
                <button id="om1-search-button" class="search-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="om1-categories" id="om1-categories" style="display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; margin-bottom: 32px; justify-content: center;">
          <button class="om1-category-chip" data-category="Operations" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">Operations</button>
          <button class="om1-category-chip" data-category="Product" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">Product</button>
          <button class="om1-category-chip active" data-category="Engineering" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: white; border: none; background-color: #00D68F;">Engineering</button>
          <button class="om1-category-chip" data-category="Sales" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">Sales</button>
          <button class="om1-category-chip" data-category="Customer Success" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">Customer Success</button>
          <button class="om1-category-chip" data-category="Leadership" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">Leadership</button>
          <button class="om1-category-chip" data-category="HR / People" style="padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: 1px solid #E5E7EB; background-color: #FFFFFF;">HR / People</button>
        </div>
        
        <div class="om1-suggestions-container">
          <div class="om1-suggestions-title" style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #111111;">Suggestions</div>
          <div class="om1-suggestions" id="om1-suggestions">
            <!-- Suggestions will be dynamically generated here -->
          </div>
        </div>
        
        <div class="om1-response-area" id="om1-response-area">
          <!-- Response will appear here -->
        </div>
      </div>
    </div>
  `;
  
  // Add the overlay to the document
  document.body.appendChild(fullscreenElement);
  
  // Trigger fade-in
  setTimeout(() => {
    fullscreenElement.style.opacity = '1';
    fullscreenElement.style.transition = 'opacity 0.3s ease';
  }, 10);
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize with the default category
  selectCategory(currentCategory);
}

// Set up all event listeners
function setupEventListeners() {
  // Close button event
  const closeButton = document.getElementById('om1-close-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeFullscreen);
  }
  
  // Setup category selection
  setupCategoryListeners();
  
  // Setup search functionality
  const searchInput = document.getElementById('om1-search-input');
  const searchButton = document.getElementById('om1-search-button');
  
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          handleSearch(query);
        }
      }
    });
  }
  
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      const searchInput = document.getElementById('om1-search-input');
      const query = searchInput.value.trim();
      if (query) {
        handleSearch(query);
      }
    });
  }
}

// Handle selection of a category
function selectCategory(category) {
  // Update current category
  currentCategory = category;
  
  // Highlight the active category
  highlightCategory(category);
  
  // Update suggestions based on the category
  updateSuggestions(category);
}

// Highlight the active category chip
function highlightCategory(category) {
  const categoryChips = document.querySelectorAll('.om1-category-chip');
  
  categoryChips.forEach(chip => {
    if (chip.dataset.category === category) {
      chip.classList.add('active');
      chip.style.backgroundColor = '#00D68F';
      chip.style.color = 'white';
      chip.style.border = 'none';
    } else {
      chip.classList.remove('active');
      chip.style.backgroundColor = '#FFFFFF';
      chip.style.color = '#4D4D4D';
      chip.style.border = '1px solid #E5E7EB';
    }
  });
}

// Set up category chip click listeners
function setupCategoryListeners() {
  const categoryChips = document.querySelectorAll('.om1-category-chip');
  
  categoryChips.forEach(chip => {
    chip.addEventListener('click', function() {
      const category = this.dataset.category;
      selectCategory(category);
    });
  });
}

// Update suggestions based on selected category
function updateSuggestions(category) {
  const suggestionsContainer = document.getElementById('om1-suggestions');
  if (!suggestionsContainer) return;
  
  // Clear existing suggestions
  suggestionsContainer.innerHTML = '';
  
  // Get category data
  const categoryData = qaData[category] || [];
  
  if (categoryData.length > 0) {
    // Show up to 3 suggestions
    const suggestionsToShow = categoryData.slice(0, 3);
    
    suggestionsToShow.forEach(item => {
      const card = document.createElement('div');
      card.className = 'om1-suggestion-card';
      card.style.width = '100%';
      card.style.borderRadius = '8px';
      card.style.padding = '16px';
      card.style.cursor = 'pointer';
      card.style.transition = 'all 0.2s';
      card.style.backgroundColor = '#FFFFFF';
      card.style.border = '1px solid #E5E7EB';
      card.style.marginBottom = '12px';
      
      const title = document.createElement('div');
      title.className = 'om1-suggestion-title';
      title.style.fontWeight = '600';
      title.style.fontSize = '15px';
      title.style.marginBottom = '8px';
      title.style.color = '#111111';
      title.textContent = item.prompt;
      
      const preview = document.createElement('div');
      preview.className = 'om1-suggestion-preview';
      preview.style.fontSize = '14px';
      preview.style.fontWeight = '400';
      preview.style.color = '#6B7280';
      
      // Create a short preview from the answer
      const answerText = item.answer.replace(/\*\*/g, '');
      const previewText = answerText.split('\n')[0].substring(0, 70) + (answerText.length > 70 ? '...' : '');
      preview.textContent = previewText;
      
      card.appendChild(title);
      card.appendChild(preview);
      
      // Add hover effect
      card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#F9FAFB';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#FFFFFF';
      });
      
      // Add click handler to card
      card.addEventListener('click', function() {
        handleSearch(item.prompt);
      });
      
      suggestionsContainer.appendChild(card);
    });
  } else {
    // No suggestions for this category
    const noSuggestions = document.createElement('div');
    noSuggestions.style.padding = '16px';
    noSuggestions.style.textAlign = 'center';
    noSuggestions.style.color = '#6B7280';
    noSuggestions.textContent = 'No suggestions available for this category.';
    suggestionsContainer.appendChild(noSuggestions);
  }
}

// Handle search and display results with typewriter effect
function handleSearch(query) {
  if (!query) return;
  
  const searchInput = document.getElementById('om1-search-input');
  const responseArea = document.getElementById('om1-response-area');
  
  // Update search input with the query
  if (searchInput) {
    searchInput.value = query;
  }
  
  // Show loading indicator
  if (responseArea) {
    responseArea.innerHTML = `
      <div class="om1-loading" style="display: flex; align-items: center; gap: 16px; padding: 24px; color: #666666; background-color: #FFFFFF; border-radius: 8px; font-weight: 400; border: 1px solid #E5E7EB;">
        <div class="loading-spinner">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #9AE7B5 0%, #4FCCC0 100%); animation: pulse 1.5s infinite ease-in-out;"></div>
        </div>
        <span>Searching organizational memory...</span>
      </div>
    `;
  }
  
  // Find matching answer from the Q&A data
  let bestMatch = null;
  let bestCategory = null;
  
  // Search through all categories
  for (const category in qaData) {
    const categoryItems = qaData[category];
    for (const item of categoryItems) {
      if (item.prompt.toLowerCase() === query.toLowerCase()) {
        bestMatch = item;
        bestCategory = category;
        break;
      }
    }
    if (bestMatch) break;
  }
  
  // If no exact match, look for partial matches
  if (!bestMatch) {
    const lowerQuery = query.toLowerCase();
    
    // Special case for "PR 123" to match the UI in the image
    if (lowerQuery.includes("pr 123") || lowerQuery.includes("pr #123")) {
      bestMatch = {
        prompt: query,
        answer: `I cannot find any information about PR #123 in the provided documents. The available PRs in the context are:

1. PR #1523: Enhanced LLM processing and user experience improvements
2. PR #1485: UI/UX improvements and speech recognition enhancements
3. PR #1583: Refactored custom report notifications
4. PR #1607: Added Electron desktop application [Github core #1607]

If you need information about PR #123 specifically, I recommend:

1. Checking the PR directly on GitHub at github.com/villagelabsco/core/pull/123`
      };
    } else {
      // Existing code for partial matches
      for (const category in qaData) {
        const categoryItems = qaData[category];
        for (const item of categoryItems) {
          if (item.prompt.toLowerCase().includes(lowerQuery) || 
              lowerQuery.includes(item.prompt.toLowerCase())) {
            bestMatch = item;
            bestCategory = category;
            break;
          }
        }
        if (bestMatch) break;
      }
    }
  }
  
  // Create a fallback response if no match found
  if (!bestMatch) {
    bestMatch = {
      prompt: query,
      answer: "I don't have specific information about that in my organizational memory. This is a demo with limited data. In a real implementation, Village would connect to your company's knowledge base to provide more accurate answers."
    };
  }
  
  // Simulate delay for loading
  setTimeout(() => {
    if (responseArea) {
      // Display the question and prepare for answer
      responseArea.innerHTML = `
        <div class="om1-answer" style="width: 100%; border-radius: 8px; overflow: hidden; background-color: #FFFFFF; border: 1px solid #E5E7EB;">
          <div class="om1-query-display" style="padding: 16px; background-color: #FFFFFF; border-bottom: 1px solid #E5E7EB; font-weight: 600; font-size: 15px; color: #111111;">
            ${query}
          </div>
          <div class="om1-answer-content" style="padding: 16px; line-height: 1.6; font-size: 15px; color: #4D4D4D; background-color: #FFFFFF;">
            <div id="typing-animation" style="display: inline; white-space: pre-wrap;"></div>
            <span id="typing-cursor" style="display: inline-block; width: 2px; height: 18px; background-color: #00D68F; margin-left: 2px; animation: blink 1s infinite; vertical-align: middle;"></span>
          </div>
        </div>
      `;
      
      // Start typing effect for the answer
      const typingElement = document.getElementById('typing-animation');
      const cursor = document.getElementById('typing-cursor');
      
      if (typingElement && cursor) {
        typeWriterEffect(typingElement, bestMatch.answer, cursor);
      }
      
      // Update category if found in a different one
      if (bestCategory && bestCategory !== currentCategory) {
        selectCategory(bestCategory);
      }
    }
  }, 1500); // Simulate 1.5 second loading time
}

// Typewriter effect for text
function typeWriterEffect(element, text, cursor) {
  let i = 0;
  const formattedText = formatMarkdown(text);
  const speed = 15; // Adjust speed (lower is faster)
  
  function type() {
    if (i < formattedText.length) {
      // Handle HTML tags in the formatted text
      if (formattedText.charAt(i) === '<') {
        // Find the end of the HTML tag
        const endOfTag = formattedText.indexOf('>', i);
        if (endOfTag !== -1) {
          const htmlTag = formattedText.substring(i, endOfTag + 1);
          element.innerHTML += htmlTag;
          i = endOfTag + 1;
        } else {
          element.innerHTML += formattedText.charAt(i);
          i++;
        }
      } else {
        element.innerHTML += formattedText.charAt(i);
        i++;
      }
      
      // Scroll the response area to show latest content
      const responseArea = document.getElementById('om1-response-area');
      if (responseArea) {
        responseArea.scrollTop = responseArea.scrollHeight;
      }
      
      setTimeout(type, speed);
    } else {
      // Done typing, hide cursor
      if (cursor) {
        cursor.style.display = 'none';
      }
    }
  }
  
  // Start typing
  type();
}

// Format markdown text to HTML
function formatMarkdown(text) {
  if (!text) return '';
  
  // Replace markdown with HTML
  let formattedText = text
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Bullet lists
    .replace(/^- (.*)/gm, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*)/gm, '<li>$1</li>')
    // GitHub style links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #00D68F; text-decoration: none; border-bottom: 1px solid rgba(0, 214, 143, 0.2); font-weight: 500;">$1</a>')
    // URL patterns that look like links
    .replace(/(\s|^)(https?:\/\/[^\s]+)/g, '$1<a href="$2" style="color: #00D68F; text-decoration: none; border-bottom: 1px solid rgba(0, 214, 143, 0.2); font-weight: 500;">$2</a>')
    // Special handling for GitHub repository paths
    .replace(/github\.com\/([a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/pull\/\d+)/g, '<a href="https://github.com/$1" style="color: #00D68F; text-decoration: none; border-bottom: 1px solid rgba(0, 214, 143, 0.2); font-weight: 500;">github.com/$1</a>')
    // Line breaks
    .replace(/\n/g, '<br>');
  
  // Wrap bullet list items in <ul>
  if (formattedText.includes('<li>')) {
    let inList = false;
    let newText = '';
    formattedText.split('<br>').forEach(line => {
      if (line.trim().startsWith('<li>')) {
        if (!inList) {
          inList = true;
          newText += '<ul style="margin-top: 12px; margin-bottom: 12px; padding-left: 24px;">';
        }
        newText += line;
      } else {
        if (inList) {
          inList = false;
          newText += '</ul>';
        }
        newText += line + '<br>';
      }
    });
    
    if (inList) {
      newText += '</ul>';
    }
    
    formattedText = newText;
  }
  
  return formattedText;
}

// Close the fullscreen overlay
function closeFullscreen() {
  const fullscreenElement = document.getElementById('om1-fullscreen');
  if (fullscreenElement) {
    // Fade out effect
    fullscreenElement.style.opacity = '0';
    fullscreenElement.style.transition = 'opacity 0.3s ease';
    
    // Remove after animation completes
    setTimeout(() => {
      document.body.removeChild(fullscreenElement);
      // Re-enable scrolling by removing the class
      document.body.classList.remove('om1-active');
      document.body.style.overflow = '';
      // Restore scroll position if needed
      window.scrollTo(0, parseInt(document.body.dataset.scrollY || '0'));
    }, 300);
  }
}

// Add keyframe animation for blinking cursor
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.7; }
  }
`;
document.head.appendChild(styleElement);