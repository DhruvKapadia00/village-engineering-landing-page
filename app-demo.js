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
    // Sales-related search results
    "sales pipeline": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Sales Pipeline Overview Q2 2024",
            snippet: "Village's deep research assistant has compiled a comprehensive analysis of our current sales pipeline, including conversion rates at each stage, velocity metrics, and forecasted close dates. The AI has identified key opportunities requiring attention and provided recommendations for accelerating deals.",
            date: "Updated weekly",
            author: "Sales Operations",
            authorInitials: "SO"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Pipeline Review Discussion",
            snippet: "Thread from the #sales channel discussing the current pipeline status and strategies for improving conversion rates. Village's automated reporting highlighted trends in successful deals and identified common obstacles in stalled opportunities.",
            date: "2 days ago",
            author: "Sales Leadership",
            authorInitials: "SL"
        }
    ],
    "deal closing process": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Deal Closing Process Documentation",
            snippet: "Village maintains our standardized deal closing workflow, including contract negotiation guidelines, approval processes, and closing verification steps. The system ensures all sales representatives follow consistent procedures and provides automated tracking of deals through each stage.",
            date: "Updated 1 month ago",
            author: "Sales Enablement",
            authorInitials: "SE"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Deal Closing Best Practices",
            snippet: "Village has compiled successful closing strategies and techniques from top-performing sales representatives. The document includes effective negotiation approaches, objection handling techniques, and methods for accelerating the decision process.",
            date: "Updated 3 weeks ago",
            author: "Sales Training",
            authorInitials: "ST"
        }
    ],
    "customer objections": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Common Customer Objections Database",
            snippet: "Village's organizational memory maintains a comprehensive database of customer objections and effective responses. The system categorizes objections by type (price, timing, competition, features) and provides proven frameworks for addressing each concern.",
            date: "Updated continuously",
            author: "Sales Team",
            authorInitials: "ST"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Objection Handling Workshop Summary",
            snippet: "Village captured key insights from our recent objection handling workshop, including role-playing exercises, customer psychology principles, and situation-specific approaches. The AI has categorized and organized these insights for easy reference during sales conversations.",
            date: "Updated 2 weeks ago",
            author: "Sales Development",
            authorInitials: "SD"
        }
    ],
    "sales enablement": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Sales Enablement Resources Hub",
            snippet: "Village provides a centralized repository of sales enablement resources, including product sheets, competitive comparison guides, case studies, ROI calculators, and presentation templates. The system ensures all sales materials are up-to-date and easily accessible.",
            date: "Updated continuously",
            author: "Marketing",
            authorInitials: "MK"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Sales Playbook 2024",
            snippet: "Comprehensive sales playbook covering our target markets, buyer personas, value propositions, sales methodologies, discovery frameworks, and closing techniques. Village ensures this resource evolves based on successful sales patterns and market changes.",
            date: "Updated quarterly",
            author: "Sales Strategy",
            authorInitials: "SS"
        }
    ],
    // Customer Success-related search results
    "customer onboarding": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Customer Onboarding Process",
            snippet: "Village maintains our customer onboarding workflow, from account setup to initial value delivery. The documentation includes role responsibilities, timeline expectations, milestone definitions, and success criteria for a completed onboarding.",
            date: "Updated 1 month ago",
            author: "Customer Success",
            authorInitials: "CS"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Onboarding Improvement Discussion",
            snippet: "Thread from the #customer-success channel discussing optimization of the onboarding process. Village's analytics identified common friction points and suggested improvements based on patterns in successful customer activations.",
            date: "1 week ago",
            author: "Onboarding Team",
            authorInitials: "OT"
        }
    ],
    "churn reduction": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Churn Reduction Strategies",
            snippet: "Village's data analysis has identified key indicators of churn risk and effective intervention strategies. The document outlines proactive monitoring approaches, engagement tactics for at-risk accounts, and process improvements to address common causes of customer dissatisfaction.",
            date: "Updated monthly",
            author: "Customer Retention",
            authorInitials: "CR"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Churn Analysis Report Q1 2024",
            snippet: "Village's automated reporting analyzed churn patterns for Q1, identifying common exit points, feature utilization gaps before cancellation, and feedback themes from exit surveys. The report includes specific recommendations for product and service improvements.",
            date: "Updated quarterly",
            author: "Data Analytics",
            authorInitials: "DA"
        }
    ],
    "support escalation": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Support Escalation Process",
            snippet: "Village maintains our support escalation framework, including severity definitions, response time expectations, escalation paths, and resolution protocols. The system ensures consistent handling of support issues and appropriate resource allocation based on impact.",
            date: "Updated 2 weeks ago",
            author: "Support Leadership",
            authorInitials: "SL"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Escalation Handling Discussion",
            snippet: "Thread from the #support channel discussing a complex escalation case and the resolution approach. Village preserved this discussion as a reference for handling similar situations in the future, highlighting effective communication strategies and technical solutions.",
            date: "3 days ago",
            author: "Support Team",
            authorInitials: "ST"
        }
    ],
    "customer health score": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Customer Health Score Methodology",
            snippet: "Village's analytics engine powers our customer health scoring system, which combines product usage metrics, support interactions, NPS/CSAT scores, contract data, and engagement indicators. The document explains how these factors are weighted and interpreted for proactive account management.",
            date: "Updated quarterly",
            author: "Customer Success Ops",
            authorInitials: "CO"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Health Score Dashboard Guide",
            snippet: "Documentation for using the customer health score dashboard, including how to interpret different indicators, recommended actions for various score ranges, and processes for documenting interventions. Village ensures this guide evolves based on patterns in successful account recoveries.",
            date: "Updated 2 months ago",
            author: "Success Operations",
            authorInitials: "SO"
        }
    ],
    // Leadership-related search results
    "company okrs": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Company OKRs Q2 2024",
            snippet: "Village maintains our company-wide Objectives and Key Results, tracking progress and dependencies across departments. The document outlines our top-level goals, success metrics, and the cascade of supporting objectives for each team. Current focus areas include market expansion, product adoption, and operational efficiency.",
            date: "Updated quarterly",
            author: "Executive Team",
            authorInitials: "ET"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "OKR Planning Discussion",
            snippet: "Thread from the #leadership channel discussing OKR planning for the upcoming quarter. Village's analytics provided historical performance data and trend analysis to inform goal-setting and resource allocation decisions.",
            date: "2 weeks ago",
            author: "Operations Leadership",
            authorInitials: "OL"
        }
    ],
    "leadership principles": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Leadership Principles Framework",
            snippet: "Village preserves our core leadership principles, which guide decision-making and team management across the organization. The document outlines our values-based approach to leadership, with specific examples of how these principles apply in different situations and roles.",
            date: "Updated 2 months ago",
            author: "People & Culture",
            authorInitials: "PC"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Leadership Development Resources",
            snippet: "Compilation of leadership development resources, including training materials, recommended readings, workshop outlines, and coaching frameworks. Village ensures these resources align with our leadership principles and business objectives.",
            date: "Updated monthly",
            author: "Leadership Development",
            authorInitials: "LD"
        }
    ],
    "strategic initiatives": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Strategic Initiatives Overview 2024",
            snippet: "Village tracks our key strategic initiatives, including market expansion, product evolution, operational excellence, and organizational development. The document outlines the objectives, timelines, resource allocations, risk assessments, and success metrics for each initiative.",
            date: "Updated monthly",
            author: "Strategy Team",
            authorInitials: "ST"
        },
        {
            source: "Slack",
            sourceIcon: "images/integrations/slack.svg",
            title: "Strategic Initiative Progress Review",
            snippet: "Thread from the #strategic-initiatives channel discussing progress on key initiatives. Village's reporting provides status updates, milestone achievements, resource utilization metrics, and blockers requiring leadership attention.",
            date: "1 week ago",
            author: "Executive Leadership",
            authorInitials: "EL"
        }
    ],
    "board meeting prep": [
        {
            source: "Notion",
            sourceIcon: "images/integrations/notion.svg",
            title: "Board Meeting Preparation Guide",
            snippet: "Village maintains our process for board meeting preparation, including required materials, presentation standards, data collection timelines, and stakeholder responsibilities. The document ensures consistent, comprehensive, and strategic communication with our board of directors.",
            date: "Updated quarterly",
            author: "CEO Office",
            authorInitials: "CO"
        },
        {
            source: "Google Drive",
            sourceIcon: "images/integrations/google drive.png",
            title: "Board Meeting Materials Template",
            snippet: "Standardized templates for board meeting materials, including executive summary, financial performance, strategic initiatives, market analysis, and forward-looking projections. Village helps ensure consistency and completeness in board communications.",
            date: "Updated 3 months ago",
            author: "Finance Team",
            authorInitials: "FT"
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

// Global variables to track animation intervals
let currentBackspaceInterval = null;
let currentTypeInterval = null;
let animationPauseTimeout = null;

// Function to fill the search input with a suggestion
function fillSearch(query) {
    const searchInput = document.getElementById('search-input');
    const currentText = searchInput.value;
    
    // Clear any ongoing animations first
    if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
    if (currentTypeInterval) clearInterval(currentTypeInterval);
    if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
    
    // Add typing class to prevent placeholder flickering
    searchInput.classList.add('typing-in-progress');
    
    // Remove any existing cursor first
    const existingCursors = document.querySelectorAll('.input-cursor-container');
    existingCursors.forEach(cursor => {
        if (cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
        }
    });
    
    // First backspace the current text before typing the new query
    if (currentText.length > 0) {
        let currentLength = currentText.length;
        currentBackspaceInterval = setInterval(() => {
            if (currentLength > 0) {
                searchInput.value = currentText.substring(0, currentLength - 1);
                currentLength--;
            } else {
                clearInterval(currentBackspaceInterval);
                currentBackspaceInterval = null;
                // Add a blinking cursor element during the pause
                const cursorContainer = document.createElement('span');
                cursorContainer.className = 'input-cursor-container';
                cursorContainer.innerHTML = '<span class="input-cursor"></span>';
                searchInput.parentNode.appendChild(cursorContainer);
                
                // Add a delay between backspacing and typing new query
                animationPauseTimeout = setTimeout(() => {
                    // Remove the cursor before starting to type
                    if (cursorContainer.parentNode) {
                        cursorContainer.parentNode.removeChild(cursorContainer);
                    }
                    // Start typing the new query after backspacing and delay
                    typeNewQuery();
                }, 500); // 500ms delay
            }
        }, 15); // Slightly faster backspacing
    } else {
        // If no current text, add cursor and pause before typing
        const cursorContainer = document.createElement('span');
        cursorContainer.className = 'input-cursor-container';
        cursorContainer.innerHTML = '<span class="input-cursor"></span>';
        searchInput.parentNode.appendChild(cursorContainer);
        
        // Add a delay before typing new query
        animationPauseTimeout = setTimeout(() => {
            // Remove the cursor before starting to type
            if (cursorContainer.parentNode) {
                cursorContainer.parentNode.removeChild(cursorContainer);
            }
            // Start typing the new query after delay
            typeNewQuery();
        }, 500); // 500ms delay
    }
    
    // Function to type new query after backspacing
    function typeNewQuery() {
        let i = 0;
        currentTypeInterval = setInterval(() => {
            if (i < query.length) {
                searchInput.value = query.substring(0, i + 1);
                i++;
            } else {
                clearInterval(currentTypeInterval);
                currentTypeInterval = null;
                // Remove typing class when done
                searchInput.classList.remove('typing-in-progress');
                // Don't automatically perform search, wait for user to press Enter or click Search
            }
        }, 20);
    }
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
        
        // Only consider showing results as user interaction, not just having text in the input
        if (hasResults) {
            isUserInteracting = true;
        } else {
            isUserInteracting = false;
        }
    }
    
    searchInput.addEventListener('focus', function() {
        // Don't set isUserInteracting to true on focus, only when results are showing
        checkInteraction();
    });
    
    searchInput.addEventListener('blur', function() {
        checkInteraction();
    });
    
    // Function to fill search with auto-rotation tracking - only fills the search bar, doesn't perform search
    function autoCycleFillSearch(query) {
        isTypingInProgress = true;
        
        const searchInput = document.getElementById('search-input');
        const currentText = searchInput.value;
        
        // Clear any ongoing animations first
        if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
        if (currentTypeInterval) clearInterval(currentTypeInterval);
        if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
        
        // Add typing class to prevent placeholder flickering
        searchInput.classList.add('typing-in-progress');
        
        // Remove any existing cursor first
        const existingCursors = document.querySelectorAll('.input-cursor-container');
        existingCursors.forEach(cursor => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        });
        
        // First backspace the current text before typing the new query
        if (currentText.length > 0) {
            let currentLength = currentText.length;
            currentBackspaceInterval = setInterval(() => {
                if (currentLength > 0) {
                    searchInput.value = currentText.substring(0, currentLength - 1);
                    currentLength--;
                } else {
                    clearInterval(currentBackspaceInterval);
                    currentBackspaceInterval = null;
                    // Add a blinking cursor element during the pause
                    const cursorContainer = document.createElement('span');
                    cursorContainer.className = 'input-cursor-container';
                    cursorContainer.innerHTML = '<span class="input-cursor"></span>';
                    searchInput.parentNode.appendChild(cursorContainer);
                    
                    // Add a delay between backspacing and typing new query
                    animationPauseTimeout = setTimeout(() => {
                        // Remove the cursor before starting to type
                        if (cursorContainer.parentNode) {
                            cursorContainer.parentNode.removeChild(cursorContainer);
                        }
                        // Start typing the new query after backspacing and delay
                        typeNewQuery();
                    }, 500); // 500ms delay
                }
            }, 15); // Slightly faster backspacing
        } else {
            // If no current text, add cursor and pause before typing
            const cursorContainer = document.createElement('span');
            cursorContainer.className = 'input-cursor-container';
            cursorContainer.innerHTML = '<span class="input-cursor"></span>';
            searchInput.parentNode.appendChild(cursorContainer);
            
            // Add a delay before typing new query
            animationPauseTimeout = setTimeout(() => {
                // Remove the cursor before starting to type
                if (cursorContainer.parentNode) {
                    cursorContainer.parentNode.removeChild(cursorContainer);
                }
                // Start typing the new query after delay
                typeNewQuery();
            }, 500); // 500ms delay
        }
        
        // Function to type new query after backspacing
        function typeNewQuery() {
            let i = 0;
            currentTypeInterval = setInterval(() => {
                if (i < query.length) {
                    searchInput.value = query.substring(0, i + 1);
                    i++;
                } else {
                    clearInterval(currentTypeInterval);
                    currentTypeInterval = null;
                    // Remove typing class when done
                    searchInput.classList.remove('typing-in-progress');
                    // Don't automatically perform search, just mark typing as complete
                    setTimeout(() => {
                        isTypingInProgress = false;
                    }, 1500); // Shorter delay before allowing next suggestion
                }
            }, 20);
        }
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
            cycleTimeout = setTimeout(checkAndCycle, 4000); // Check more frequently
        }
        
        // Start the cycle
        cycleTimeout = setTimeout(checkAndCycle, 1500);
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
    }, 1500);
}

// Function to perform search and display results with typing effect
function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    // Clear any ongoing animations first to prevent conflicts
    if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
    if (currentTypeInterval) clearInterval(currentTypeInterval);
    if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
    
    // Remove any existing cursor
    const existingCursors = document.querySelectorAll('.input-cursor-container');
    existingCursors.forEach(cursor => {
        if (cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
        }
    });
    
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
    // Sales searches
    else if (queryLower.includes('sales pipeline') || queryLower.includes('pipeline')) {
        resultsToShow = mockResults["sales pipeline"];
    } else if (queryLower.includes('deal closing') || queryLower.includes('closing process')) {
        resultsToShow = mockResults["deal closing process"];
    } else if (queryLower.includes('customer objections') || queryLower.includes('objections')) {
        resultsToShow = mockResults["customer objections"];
    } else if (queryLower.includes('sales enablement') || queryLower.includes('enablement')) {
        resultsToShow = mockResults["sales enablement"];
    }
    // Customer Success searches
    else if (queryLower.includes('customer onboarding') || queryLower.includes('onboarding')) {
        resultsToShow = mockResults["customer onboarding"];
    } else if (queryLower.includes('churn reduction') || queryLower.includes('churn')) {
        resultsToShow = mockResults["churn reduction"];
    } else if (queryLower.includes('support escalation') || queryLower.includes('escalation')) {
        resultsToShow = mockResults["support escalation"];
    } else if (queryLower.includes('customer health') || queryLower.includes('health score')) {
        resultsToShow = mockResults["customer health score"];
    }
    // Leadership searches
    else if (queryLower.includes('company okrs') || queryLower.includes('okrs')) {
        resultsToShow = mockResults["company okrs"];
    } else if (queryLower.includes('leadership principles') || queryLower.includes('principles')) {
        resultsToShow = mockResults["leadership principles"];
    } else if (queryLower.includes('strategic initiatives') || queryLower.includes('initiatives')) {
        resultsToShow = mockResults["strategic initiatives"];
    } else if (queryLower.includes('board meeting') || queryLower.includes('board prep')) {
        resultsToShow = mockResults["board meeting prep"];
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
        chip.addEventListener('click', function(e) {
            // First clear any ongoing search process
            if (currentBackspaceInterval) clearInterval(currentBackspaceInterval);
            if (currentTypeInterval) clearInterval(currentTypeInterval);
            if (animationPauseTimeout) clearTimeout(animationPauseTimeout);
            
            // Make sure we remove all cursor elements
            const existingCursors = document.querySelectorAll('.input-cursor-container');
            existingCursors.forEach(cursor => {
                if (cursor.parentNode) {
                    cursor.parentNode.removeChild(cursor);
                }
            });
            
            // Set isTypingInProgress for auto cycle
            isTypingInProgress = true;
            
            // Then fill with the new query
            const query = this.getAttribute('data-query');
            fillSearch(query);
            
            // Prevent default behavior and stop propagation
            e.preventDefault();
            e.stopPropagation();
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
