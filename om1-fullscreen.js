// Village OM1 Fullscreen Demo
// This script creates a fullscreen overlay that simulates the OM1 experience

// Parse the Q&A data from categories_with_qa.txt
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

// Categories to display
const categories = [
  "Operations", 
  "Product", 
  "Engineering", 
  "Sales", 
  "Customer Success", 
  "Operations", 
  "Leadership", 
  "HR / People"
];

// Keep track of currently selected category
let currentCategory = "Engineering";

// Initialize the fullscreen overlay when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create and inject the fullscreen button
  const fullscreenButton = document.createElement('button');
  fullscreenButton.id = 'om1-fullscreen-button';
  fullscreenButton.textContent = 'Fullscreen OM1 Demo';
  fullscreenButton.classList.add('button-primary');
  
  // Find a suitable place to inject the button (e.g., after the hero section)
  const targetSection = document.querySelector('.app-demo-section') || document.querySelector('section');
  if (targetSection) {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('fullscreen-button-container');
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.margin = '20px 0';
    buttonContainer.appendChild(fullscreenButton);
    
    targetSection.appendChild(buttonContainer);
  }
  
  // Initialize fullscreen overlay when button is clicked
  fullscreenButton.addEventListener('click', initFullscreenOverlay);
});

// Initialize and create the fullscreen overlay
function initFullscreenOverlay() {
  // Add class to body to prevent scrolling
  document.body.classList.add('om1-active');
  
  // Create overlay container
  const overlay = document.createElement('div');
  overlay.id = 'om1-fullscreen';
  overlay.classList.add('om1-fullscreen');
  
  // Add overlay HTML structure
  overlay.innerHTML = `
    <div class="om1-topbar">
      <div class="om1-title">
        <img src="images/village-logo.png" alt="Village Logo" class="om1-logo-small" style="height: 24px; margin-right: 8px; vertical-align: middle;">
        Village
      </div>
      <button class="om1-close-button">✕</button>
    </div>
    
    <div class="om1-content">
      <div class="om1-header">
        <div class="om1-logo" style="background: linear-gradient(135deg, #9AE7B5 0%, #4FCCC0 100%);"></div>
        <h1>Information to action in seconds.</h1>
        <p>Superhuman answers, analysis, and work across all your company's apps.</p>
      </div>
      
      <div class="om1-search-container">
        <div class="om1-search-input-wrapper" style="position: relative; margin-bottom: 20px;">
          <input type="text" id="om1-search-input" placeholder="Focus for today" style="width: 100%; padding: 12px 50px 12px 16px; border-radius: 8px; border: 1px solid #E5E7EB; font-size: 16px; outline: none;">
          <button id="om1-search-button" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background-color: #00D68F; color: white; border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 9H21" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 21V9" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span style="color: #6B7280; font-size: 14px; margin-left: 4px;">+20</span>
          </div>
          
          <div style="margin-left: auto; display: flex; align-items: center;">
            <div class="om1-toggle" style="margin-right: 6px;">
              <input type="checkbox" checked style="display: none;">
              <span class="om1-toggle-slider" style="position: relative; display: inline-block; width: 36px; height: 20px; background-color: #00D68F; border-radius: 34px;">
                <span style="position: absolute; content: ''; height: 16px; width: 16px; right: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%;"></span>
              </span>
            </div>
            <span style="color: #6B7280; font-size: 14px;">OM1</span>
          </div>
        </div>
        
        <div class="om1-categories" style="display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; margin-bottom: 32px;">
          <button class="om1-category-chip" data-category="Operations" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Operations</button>
          <button class="om1-category-chip" data-category="Product" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Product</button>
          <button class="om1-category-chip active" data-category="Engineering" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: white; border: none; background-color: #00D68F;">Engineering</button>
          <button class="om1-category-chip" data-category="Sales" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Sales</button>
          <button class="om1-category-chip" data-category="Customer Success" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Customer Success</button>
          <button class="om1-category-chip" data-category="Operations" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Operations</button>
          <button class="om1-category-chip" data-category="Leadership" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">Leadership</button>
          <button class="om1-category-chip" data-category="HR / People" style="padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 400; cursor: pointer; white-space: nowrap; color: #4D4D4D; border: none; background-color: #F5F5F5;">HR / People</button>
        </div>
        
        <div class="om1-suggestions-container">
          <div class="om1-suggestions-title" style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #111111;">Suggestions</div>
          <div class="om1-suggestions" id="om1-suggestions">
            <div class="om1-suggestion-card" style="width: 100%; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s; background-color: #F5F5F5; border: none; margin-bottom: 12px;">
              <div class="om1-suggestion-title" style="font-weight: 600; font-size: 15px; margin-bottom: 8px; color: #111111;">Focus for today</div>
              <div class="om1-suggestion-preview" style="font-size: 14px; font-weight: 400; color: #6B7280;">Tell me what I need to know today. Look across all the apps I work...</div>
            </div>
            <div class="om1-suggestion-card" style="width: 100%; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s; background-color: #F5F5F5; border: none; margin-bottom: 12px;">
              <div class="om1-suggestion-title" style="font-weight: 600; font-size: 15px; margin-bottom: 8px; color: #111111;">Stakeholder feedback</div>
              <div class="om1-suggestion-preview" style="font-size: 14px; font-weight: 400; color: #6B7280;">Consolidate feedback from meetings, emails, and collaboration to...</div>
            </div>
            <div class="om1-suggestion-card" style="width: 100%; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s; background-color: #F5F5F5; border: none; margin-bottom: 12px;">
              <div class="om1-suggestion-title" style="font-weight: 600; font-size: 15px; margin-bottom: 8px; color: #111111;">Product roadmap</div>
              <div class="om1-suggestion-preview" style="font-size: 14px; font-weight: 400; color: #6B7280;">What's our product roadmap for the next quarter? What features are...</div>
            </div>
          </div>
        </div>
        
        <div class="om1-response-area" id="om1-response-area">
          <!-- Response will appear here -->
        </div>
      </div>
    </div>
  `;
  
  // Add overlay to body
  document.body.appendChild(overlay);
  
  // Set up close button
  const closeButton = overlay.querySelector('.om1-close-button');
  closeButton.addEventListener('click', () => {
    closeFullscreen();
  });
  
  // Set up connectors popup
  const connectorIcons = overlay.querySelector('.om1-connector-icons');
  connectorIcons.addEventListener('click', function(e) {
    e.stopPropagation();
    
    // Create popup if it doesn't exist
    if (!document.getElementById('om1-connector-popup')) {
      const popup = document.createElement('div');
      popup.id = 'om1-connector-popup';
      popup.className = 'om1-popup';
      popup.innerHTML = `
        <div class="om1-popup-content">
          <h3>Available Integrations</h3>
          <p>Village connects to 20+ tools in your tech stack</p>
          
          <div class="om1-connector-grid">
            <div class="om1-connector-item">
              <img src="images/github-logo.svg" alt="GitHub" class="om1-connector-logo">
            </div>
            <div class="om1-connector-item">
              <img src="images/notion-logo.svg" alt="Notion" class="om1-connector-logo">
            </div>
            <div class="om1-connector-item">
              <img src="images/integrations/google-drive.svg" alt="Google Drive" class="om1-connector-logo">
            </div>
            <div class="om1-connector-item">
              <img src="images/jira-logo.svg" alt="Jira" class="om1-connector-logo">
            </div>
            <div class="om1-connector-item">
              <img src="images/slack-logo.svg" alt="Slack" class="om1-connector-logo">
            </div>
            <div class="om1-connector-item">
              <img src="images/linear-logo.svg" alt="Linear" class="om1-connector-logo">
            </div>
          </div>
          
          <p>Each connector allows Village to securely access and learn from your company data while respecting access controls.</p>
          
          <div class="om1-connector-more-link">
            <a href="#" class="om1-btn-demo">Learn more about connectors</a>
          </div>
        </div>
      `;
      overlay.querySelector('.om1-search-bar').appendChild(popup);
    }
    
    // Toggle popup visibility
    const popup = document.getElementById('om1-connector-popup');
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
    } else {
      // Hide any other popups
      document.querySelectorAll('.om1-popup').forEach(p => {
        p.style.display = 'none';
      });
      
      // Position and show popup
      popup.style.display = 'block';
      popup.style.top = '70px';
    }
  });
  
  // Set up OM1 popup
  const memoryToggle = overlay.querySelector('.om1-memory-toggle');
  memoryToggle.addEventListener('click', function(e) {
    if (e.target.tagName === 'INPUT') {
      return; // Allow the toggle to work without showing popup
    }
    
    e.stopPropagation();
    
    // Create popup if it doesn't exist
    if (!document.getElementById('om1-memory-popup')) {
      const popup = document.createElement('div');
      popup.id = 'om1-memory-popup';
      popup.className = 'om1-popup';
      popup.innerHTML = `
        <div class="om1-popup-content">
          <h3>Organizational Memory (OM1)</h3>
          <p>Village's proprietary Organizational Memory technology learns from your organization's data to provide more accurate and contextual responses.</p>
          
          <p>With OM1 enabled, Village can:</p>
          <ul>
            <li>Recall company-specific information</li>
            <li>Reference previous conversations and decisions</li>
            <li>Connect data across different tools and platforms</li>
            <li>Understand your organization's unique terminology</li>
          </ul>
          
          <p>Toggle OM1 off to get responses based only on general knowledge without using your company data.</p>
        </div>
      `;
      overlay.querySelector('.om1-search-bar').appendChild(popup);
    }
    
    // Toggle popup visibility
    const popup = document.getElementById('om1-memory-popup');
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
    } else {
      // Hide any other popups
      document.querySelectorAll('.om1-popup').forEach(p => {
        p.style.display = 'none';
      });
      
      // Position and show popup
      popup.style.display = 'block';
      popup.style.top = '70px';
      popup.style.right = '16px';
      popup.style.left = 'auto';
    }
  });
  
  // Close popups when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.om1-popup').forEach(popup => {
      popup.style.display = 'none';
    });
  });
  
  // Set up category selection
  const categoryChips = overlay.querySelectorAll('.om1-category-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Remove active class from all chips
      categoryChips.forEach(c => c.classList.remove('active'));
      // Add active class to clicked chip
      chip.classList.add('active');
      
      const category = chip.getAttribute('data-category');
      currentCategory = category;
      updateSuggestions(category);
    });
  });
  
  // Set up search functionality
  const searchInput = document.getElementById('om1-search-input');
  const searchButton = document.getElementById('om1-search-button');
  
  if (searchInput && searchButton) {
  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      handleSearch(searchInput.value);
    }
  });
  
  searchButton.addEventListener('click', () => {
    handleSearch(searchInput.value);
  });
}

  // Set up suggestion card click handlers
  document.querySelectorAll('.om1-suggestion-card').forEach(card => {
    card.addEventListener('click', function() {
      const questionText = this.querySelector('.om1-suggestion-title').textContent;
      if (searchInput) {
        searchInput.value = questionText;
        handleSearch(questionText);
      }
    });
  });
}

// Update suggestions based on selected category
function updateSuggestions(category) {
  const suggestionsContainer = document.querySelector('.om1-suggestions');
  if (!suggestionsContainer) return;
  
  // Example questions for each category
  const suggestions = {
    "Engineering": [
      {
        title: "What's slowing down engineering?",
        preview: "Find the bottlenecks in our engineering workflow and development process..."
      },
      {
        title: "Summarize PR 123",
        preview: "Get a quick overview of what changed in pull request #123 and its status..."
      },
      {
        title: "Who is working on onboarding?",
        preview: "Find team members assigned to the onboarding project and their progress..."
      }
    ],
    "Product": [
      {
        title: "What shipped last week?",
        preview: "Get a summary of all features and updates shipped in the past week..."
      },
      {
        title: "Roadmap status?",
        preview: "Check the current status of our product roadmap and key milestones..."
      },
      {
        title: "What got cut from Q2?",
        preview: "See which features or initiatives were deprioritized from Q2 plans..."
      }
    ],
    "Sales": [
      {
        title: "Latest deal status?",
        preview: "Get the current status of active enterprise deals in the pipeline..."
      },
      {
        title: "Q2 pipeline health",
        preview: "Overview of our Q2 sales pipeline, qualified opportunities, and forecasts..."
      },
      {
        title: "Top objections from prospects?",
        preview: "Analyze common objections from prospects and recommended responses..."
      }
    ],
    "Customer Success": [
      {
        title: "At-risk accounts?",
        preview: "Identify accounts showing warning signs and recommended actions..."
      },
      {
        title: "Customer feature requests",
        preview: "Summarize the most requested features from customers by frequency..."
      },
      {
        title: "Expansion opportunities?",
        preview: "Highlight accounts with high potential for seat expansion or upsells..."
      }
    ],
    "Operations": [
      {
        title: "Office reopening plans?",
        preview: "Details about office reopening timelines, policies, and requirements..."
      },
      {
        title: "IT equipment requests",
        preview: "Current process and timelines for requesting IT equipment and software..."
      },
      {
        title: "Current software vendors?",
        preview: "List of our current software vendors, contract terms, and renewal dates..."
      }
    ],
    "Leadership": [
      {
        title: "Company priorities Q3?",
        preview: "Overview of the top company priorities and OKRs for the quarter..."
      },
      {
        title: "Fundraising plans?",
        preview: "Details about our fundraising strategy, timeline, and target investors..."
      },
      {
        title: "All-hands meeting agenda",
        preview: "Preview the agenda for the upcoming all-hands meeting and key topics..."
      }
    ],
    "HR / People": [
      {
        title: "Open roles engineering?",
        preview: "List of open positions in the engineering department and hiring status..."
      },
      {
        title: "Upcoming company holidays?",
        preview: "Schedule of upcoming company holidays, PTO policies, and closures..."
      },
      {
        title: "Benefits enrollment deadline",
        preview: "Important deadlines for benefits enrollment and available options..."
      }
    ]
  };
  
  // Default suggestions if category not found
  const defaultSuggestions = [
    {
      title: "Focus for today",
      preview: "Tell me what I need to know today. Look across all the apps I work..."
    },
    {
      title: "Stakeholder feedback",
      preview: "Consolidate feedback from meetings, emails, and collaboration to..."
    },
    {
      title: "Product roadmap",
      preview: "What's our product roadmap for the next quarter? What features are..."
    }
  ];
  
  // Get suggestions for the selected category
  const categorySuggestions = suggestions[category] || defaultSuggestions;
  
  // Clear previous suggestions
  suggestionsContainer.innerHTML = '';
  
  // Create new suggestion cards
  categorySuggestions.forEach(suggestion => {
    const card = document.createElement('div');
    card.className = 'om1-suggestion-card';
    card.innerHTML = `
      <div class="om1-suggestion-title">${suggestion.title}</div>
      <div class="om1-suggestion-preview">${suggestion.preview}</div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => {
      const searchInput = document.getElementById('om1-search-input');
      if (searchInput) {
        searchInput.value = suggestion.title;
        handleSearch(suggestion.title);
      }
    });
    
    suggestionsContainer.appendChild(card);
  });
}

// Handle search and show response
function handleSearch(query) {
  if (!query.trim()) return;
  
  const responseArea = document.getElementById('om1-response-area');
  if (!responseArea) return;
  
  // Show loading state
  responseArea.innerHTML = `
    <div class="om1-loading">
      <div class="loading-spinner">
        <img src="images/village-logo.png" alt="Village Logo" width="32" height="32">
      </div>
      <span>Searching organizational memory...</span>
    </div>
  `;
  
  // Define example answers for specific queries
  const answers = {
    "What's slowing down engineering?": `Here are the key factors currently slowing down engineering progress:

1. **PR Bottlenecks**
   - Several key PRs are awaiting review (e.g., PR #1141 has been idle for 5+ days).
2. **Bug Backlog**
   - 17+ critical bugs in Jira need triage.
3. **Unaligned Sprint Work**
   - Some sprint items are not tied to Q2 goals.

Team plans a cleanup sprint next week.`,
    
    "Summarize PR 123": `I couldn't find PR #123 in current records.

Related PRs:
- PR #124: Retry logic patch
- PR #122: Refactored auth validation

Please check GitHub manually.`,
    
    "Who is working on onboarding?": `Onboarding flow assignees:
- Rahul (Frontend)
- Linda (Content)
- Mel (Backend workflow)

ETA: Wednesday.`,
    
    "What shipped last week?": `Shipped features:

1. Slack digest sync
2. OKR detail view
3. New integrations settings modal

Release notes in Notion.`,
    
    "Roadmap status?": `Q2 Roadmap:

- Coworker AI ✅
- Search infra 🟡
- Workflow tools 🔴 (delayed 1 week)

~68% completion.`,
    
    "What got cut from Q2?": `Removed from Q2 scope:

- PDF summarization
- Voice assistant beta

Reprioritized for infra scaling.`,
    
    "Company priorities Q3?": `Q3 2024 Company Priorities:

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
  };
  
  // Default/fallback response
  const defaultAnswer = `I don't have specific information about that in my organizational memory. This is a demonstration with limited data. In a real implementation, Village would access your organization's knowledge base to provide accurate answers to a wide range of questions.`;
  
  // Choose response based on query
  const answer = answers[query] || defaultAnswer;
  
  // Simulate network delay
  setTimeout(() => {
      responseArea.innerHTML = `
        <div class="om1-answer">
        <div class="om1-query-display">${query}</div>
        <div class="om1-answer-content">
          <div class="typing-animation"></div>
          <span class="typing-cursor"></span>
          </div>
        </div>
      `;
    
    // Animate typing
    const typingElement = document.querySelector('.typing-animation');
    const cursor = document.querySelector('.typing-cursor');
    
    let index = 0;
    const speed = 20;
    
    function typeWriter() {
      if (index < answer.length) {
        typingElement.innerHTML += answer.charAt(index);
        index++;
        responseArea.scrollTop = responseArea.scrollHeight;
        setTimeout(typeWriter, speed);
    } else {
        cursor.style.display = 'none';
      }
    }
    
    setTimeout(typeWriter, 300);
    
  }, 1500);
}

// Close the fullscreen overlay
const closeFullscreen = () => {
  const fullscreenElement = document.getElementById('om1-fullscreen');
  if (fullscreenElement) {
    document.body.removeChild(fullscreenElement);
    // Remove class from body to re-enable scrolling
    document.body.classList.remove('om1-active');
  }
}; 