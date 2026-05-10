(function () {
    "use strict";

    var projects = [
        {
            slug: "medpro",
            title: "Medpro — Medical Booking",
            industry: "Healthcare",
            tags: ["Healthcare", "Multi-Platform", "UX/UI"],
            categories: ["app"],
            serviceTypes: ["Web Design", "Mobile App"],
            cardImage: "img/Project5-medpro-WebApp.jpg",
            cardAlt: "Medpro case study",
            heroImage: "img/Project5-medpro-WebApp.jpg",
            heroAlt: "Medpro - medical booking platform",
            year: "2024",
            role: "Lead UX/UI Designer",
            client: "Medpro",
            deliverables: "Research · Personas · Flows · Sitemap · Design System · UI",
            detail: {
                product: "Medical Appointment Booking Platform",
                channels: "Web · Native app · Kiosk · Mini-app (Viettel Money, ZaloPay)",
                overview: "Medpro is an ecosystem, not an app. Patients book on web or mobile, walk-ins use kiosks, partner banking apps surface a mini-app version, and providers integrate with hospital management systems. The brief was to keep all surfaces consistent and faithful to how users actually move between them.",
                contextParagraph1: "Three frictions surfaced from user research and Microsoft Clarity behavioral data. Behavioral data confirmed the pattern: 9.09% dead clicks, 8.85% quick-backs, and only 1.3 minutes active time out of 3.2 average — attention without engagement. The booking page absorbed ~58% of all sessions, making it the highest-leverage surface.",
                contextParagraph2: "Three primary users: the self-booker (speed and pricing clarity), the caregiver (multi-profile coordination), and the provider (accurate sync, fewer duplicates).",
                contextBullets: [
                    "Information gap — users couldn't compare doctors, see clear pricing, or understand what happens after booking",
                    "No caregiver coordination — parents and family members managing multiple bookings had no central view; appointments lived in scattered messages",
                    "Duplicate records and unreliable sync — patients created multiple profiles; data sync between Medpro and hospitals was inconsistent"
                ],
                processIntro: "Four decisions shaped the product:",
                processSteps: [
                    {
                        title: "Caregiver mode as a first-class state, not a feature flag",
                        body: "Booking for someone else has a different mental model than booking for yourself. Profile management lives in the core flow — one account, multiple patient profiles, separate histories and reminders."
                    },
                    {
                        title: "Restructured the booking flow around analytics signal",
                        body: "Heatmap on the highest-traffic page showed users clicking specialty and service selection far more than doctor lists. I rebuilt the sequence to match real intent: specialty → service → doctor, instead of doctor-first."
                    },
                    {
                        title: "One design system across five surfaces",
                        body: "Roboto type scale, neutral palette on a single primary blue (#11A2F3), and a small set of card and button patterns that survived desktop, mobile, kiosk, and mini-app contexts. Anything needing surface-specific styling was a signal the underlying pattern was wrong."
                    },
                    {
                        title: "Held back three v1 features",
                        body: "AI doctor recommendation, AI symptom checker, and family-sharing each needed infrastructure that didn't yet exist: clean provider data, medical liability clearance, and a privacy framework. I designed them out of v1 but left structural room in the IA, so each one had a real chance later instead of shipping thin."
                    }
                ],
                results: [],
                reflection: [
                    "Healthcare booking isn't a transaction — it's a coordination problem. Patients, caregivers, providers, and hospital data systems all sit in the same flow. The strongest decisions weren't visual; they were structural — who the user is at any moment, and which system needs to know what.",
                    "If I did this again, I'd bring analytics into the design loop earlier. Clarity data on dead clicks and quick-backs reframed issues I had been treating as visual when they were navigation and intent-matching problems. Pulling that signal into the wireframe stage — not final QA — would have saved a cycle."
                ]
            }
        },
        {
            slug: "one-ibc-app",
            title: "One IBC App",
            industry: "Mobile App",
            tags: ["Mobile App", "UX/UI Design"],
            categories: ["app"],
            cardImage: "img/Project1-OneIBC-App.jpg",
            cardAlt: "One IBC App case study",
            heroImage: "img/Project1-OneIBC-App.jpg",
            heroAlt: "One IBC App - mobile screens",
            year: "2025",
            role: "UX/UI Designer",
            client: "One IBC",
            deliverables: "Research · UI System · Prototype",
            detail: {
                product: "Domestic Incorporation Mobile App",
                channels: "iOS · Android",
                overview: "One IBC's existing platform served international founders going offshore. The mobile app extended the brand in the opposite direction: founders incorporating in their home country, with the country determined by nationality at onboarding. The challenge wasn't designing one incorporation flow — it was designing a single mobile experience that could absorb the legal, procedural, and terminology differences across multiple countries without confusing the user.",
                contextParagraph1: "Incorporating domestically is paperwork-heavy and agency-fragmented in any country, and the shape of that pain looks different from market to market. Talking to one founder who had just registered a company in Vietnam, plus the internal operations team handling cases across markets, surfaced three patterns that held across countries:",
                contextParagraph2: "The primary user was a first-time founder — comfortable with mobile apps, allergic to government portals, and tied to a single jurisdiction by passport rather than choosing one.",
                contextBullets: [
                    "Status anxiety — once paperwork was submitted, founders had no visibility into where it sat; they called the consultant repeatedly for updates the consultant often didn't have either",
                    "Terminology mismatch — what's called a \"business registration certificate\" in Vietnam isn't called the same in Hong Kong; the web platform translated literally, the mobile app needed to feel native to each market",
                    "One-size-fits-all flows broke down — required documents, expected timelines, and government fees vary by country; a flow built for one market couldn't be reskinned for another without quietly misleading users"
                ],
                processIntro: "I worked across research, IA, wireframes, UI system, and a prototype. Most insight came from one founder interview and recurring sessions with the internal incorporation team, who saw patterns across hundreds of cases. Three decisions shaped the product:",
                processSteps: [
                    {
                        title: "Onboarding routes by nationality, not by browse",
                        body: "A natural design instinct was to let users explore countries before picking — but research said this was a misframe. Users weren't choosing a jurisdiction; their passport had chosen for them. The first-run flow asks for nationality, then locks the user into the matching market with all language, fees, and document requirements pre-localized. Country-switching is hidden behind settings, not foregrounded as a feature."
                    },
                    {
                        title: "Built a country-agnostic core with country-specific content layers",
                        body: "Status tracker, document upload, consultant chat, and form patterns were designed once and reused across markets. What changes per country lives in content — stage names, required documents, fee structure, terminology. This kept the design system tight and let operations onboard new countries without redesign."
                    },
                    {
                        title: "Status tracking modeled after delivery apps, not government portals",
                        body: "Founders already trust the mental model of a Grab or Shopee order moving through clear, named stages with timestamps. I borrowed that pattern for incorporation status — vertical timeline, expected duration per stage, consultant's name attached. It removed the most common reason founders called support: \"where is my paperwork right now?\""
                    },
                    {
                        title: "What I held back",
                        body: "Native in-app payment for government fees. Bank integration and per-country regulatory timelines made it unrealistic for v1. I designed the flow to hand off cleanly to bank transfer and resume status tracking afterward — so adding native payment later wouldn't break the architecture."
                    }
                ],
                results: [],
                reflection: [
                    "The biggest lesson from this project: multi-country isn't a feature, it's an architecture choice. Early on I almost designed a generic incorporation flow and treated each country as a content variant on top. That direction would have failed quietly — small mismatches (a stage that doesn't exist in Hong Kong, a document only Vietnam requires) compound into a product that feels broken in every market. Pulling the country logic into the architecture from the start, rather than patching it in later, was the most consequential decision I made.",
                    "If I did this again, I'd push for more founder interviews across at least two countries before committing to the IA. One founder plus internal expertise was enough to surface the right problems, but I had to lean heavily on the operations team to validate cross-country differences. A second or third founder voice — ideally from a different market — would have caught assumptions I didn't know I was making."
                ]
            }
        },
        {
            slug: "offshore-companycorp",
            title: "Offshore CompanyCorp",
            industry: "Professional Services",
            tags: ["Website", "UX Audit", "UI Design", "Lead Gen"],
            categories: ["compliance"],
            cardImage: "img/Project2-OCC-Web.jpg",
            cardAlt: "Offshore CompanyCorp case study",
            heroImage: "img/Project2-OCC-Web.jpg",
            heroAlt: "Offshore CompanyCorp - incorporation platform",
            year: "2025",
            role: "UX Auditor & UI Designer",
            client: "Offshore CompanyCorp (in-house)",
            deliverables: "Audit Report · Heuristic Evaluation · UI Refinements",
            heroSubtitle: "UX audit & UI refinement for a global incorporation platform",
            heroSummary: "A 2-month in-house audit of an offshore company incorporation website serving global founders — focused on reducing decision friction in the lead-to-consultation flow through clearer pricing, stronger trust signals, and a tighter CTA hierarchy.",
            detail: {
                product: "Offshore Incorporation Website",
                channels: "Marketing site · Lead form · Consultation booking",
                overview: "Offshore CompanyCorp helps global entrepreneurs incorporate companies across 30+ jurisdictions. The site is content-heavy by necessity — pricing, legal requirements, and timelines vary by country and entity type. I led a UX audit and UI refinement to make the site easier to navigate for the two highest-intent users: founders comparing jurisdictions, and businesses ready to book a consultation.",
                contextParagraph1: "The site pulled steady SEO traffic but converted unevenly. Three patterns stood out: decision overwhelm (four competing CTAs with no clear hierarchy), a trust gap above the fold (credentials buried below the scroll threshold), and fragmented pricing (add-on costs surfacing only deep in the flow).",
                contextParagraph2: "The primary user wasn't browsing — most arrived with a jurisdiction already in mind. They didn't need exploration; they needed confirmation and a clear path to consultation.",
                contextBullets: [
                    "Decision overwhelm — \"Get started\", \"Contact us\", \"Order now\", and \"Consult now\" all competed on the same screen with no clear next step",
                    "Trust gap above the fold — license, years operating, and client base appeared only after scrolling",
                    "Fragmented pricing — fees on multiple pages with different framing; add-on costs hidden deep in the flow"
                ],
                processIntro: "I structured the audit around impact × effort, not exhaustive coverage. Three decisions shaped the work:",
                processSteps: [
                    {
                        title: "Prioritized 5 surfaces over a full redesign",
                        body: "A full IA restructure would have broken years of SEO equity. I mapped 20+ findings against business impact and engineering cost, then proposed fixes within the existing route structure — letting the team ship in two sprints instead of waiting a quarter."
                    },
                    {
                        title: "Kept the lead form long, but split it into steps",
                        body: "Sales had complained that shorter forms produced lower-quality leads. Instead of cutting fields, I redesigned the form as a 3-step flow — same total fields, lower perceived load, clearer intent signal at each step."
                    },
                    {
                        title: "Moved trust signals above the fold",
                        body: "Most competitors push credentials to the footer. For an offshore decision, that's where it matters least. I argued for a trust strip — license, years operating, jurisdictions served — directly under the hero, before any pricing or CTA."
                    },
                    {
                        title: "What I held back",
                        body: "A jurisdiction recommender wizard — the most exciting idea on the table. Engineering capacity was the constraint. I logged it as a wishlist for the next quarter instead of forcing it into scope."
                    }
                ],
                auditHighlights: [
                    { label: "CTA hierarchy", body: "Four competing CTAs per page reduced to one primary + one secondary, mapped to user intent." },
                    { label: "Pricing transparency", body: "Fragmented pricing consolidated into a single comparison table with all-in cost." },
                    { label: "Trust strip", body: "Credentials repositioned above the fold, tested across three layouts." },
                    { label: "Findings matrix", body: "20+ issues plotted on impact × effort to guide sprint planning." }
                ],
                results: [],
                reflection: [
                    "The biggest shift in how I think after this project: trust isn't a section on the page — it's a quality of the whole experience. I came in expecting pricing to be the conversion blocker. Auditing it closely, I saw that even users who saw transparent pricing dropped off if they hadn't seen credibility cues first. Pricing was the symptom; trust was the system.",
                    "If I did this again, I'd talk to real founders earlier. Most of my early findings came from heuristic review and stakeholder interviews. The ones that held up strongest in implementation were the ones I later validated against actual user behavior. Two months felt long — until I realized I'd spent six weeks auditing and only two weeks listening."
                ]
            }
        },
        {
            slug: "one-ibc-portal",
            title: "One IBC Portal",
            industry: "Web Portal",
            tags: ["Web Portal", "UX/UI", "Client Lifecycle"],
            categories: ["app", "compliance"],
            cardImage: "img/Project12-OneIBC-Portal.jpg",
            cardAlt: "One IBC Portal case study",
            heroImage: "img/Project12-OneIBC-Portal.jpg",
            heroAlt: "One IBC Portal - client portal screens",
            year: "2025",
            role: "Lead UX/UI Designer",
            client: "One IBC",
            deliverables: "Research · IA · Wireframes · UI System · Prototype",
            detail: {
                product: "Client Portal — Company Lifecycle Management",
                channels: "Web portal · Client dashboard · Document vault",
                overview: "Post-incorporation, clients live inside a multi-year relationship with One IBC — annual renewals, periodic filings, regulatory updates, eventual closure. That relationship had been managed through email and consultant calls. The portal consolidates it into one surface: what they own, what's coming, what's overdue.",
                contextParagraph1: "Most clients open the portal only when a deadline hits. Low session frequency means every visit feels like a first visit — they forget the IA, their company state, and the action expected of them.",
                contextParagraph2: "Primary user: a founder running a business, not a power user. Wants the portal quietly competent, not demanding.",
                contextBullets: [
                    "Reminder fatigue — email was the source of truth, not the system; clients double-paid renewals or missed filings because they couldn't tell what was already actioned",
                    "Multi-company sprawl — serial founders held companies across jurisdictions with no consolidated view",
                    "Service discovery gap — clients needed accounting, nominee, or virtual office services without knowing One IBC offered them; cross-sell happened ad hoc through consultants"
                ],
                processIntro: "Three decisions shaped the product:",
                processSteps: [
                    {
                        title: "Multi-company as the default state, not an edge case",
                        body: "Internal data showed most active clients held more than one company. I designed the home as a multi-company overview from the start — each company a card with status, next action, and overdue flag. Single-company cases became a list of one. This shaped the entire IA."
                    },
                    {
                        title: "Compliance as ambient awareness, not alarm",
                        body: "A forward-looking compliance view sits on the home screen with progressive prominence — distant obligations as quiet lines, near-term as cards, immediate as banners with one-tap actions. Same data, different weight based on urgency."
                    },
                    {
                        title: "Closure designed with the same rigor as onboarding",
                        body: "Most portals bury closure behind a settings link. But closure is legally serious: tax clearance, asset distribution, deregistration. I designed it as a multi-step flow with stage clarity, irreversibility warnings, and mandatory consultant handoff before the final step. Users see this screen once — it has to be right."
                    },
                    {
                        title: "Held back: aggressive upsell",
                        body: "Stakeholders wanted service add-ons surfaced across the portal. Instead, I worked with the compliance and operations team to map when clients actually needed each service — accounting around filing windows, nominee in specific jurisdictions, virtual office at lease renewal. Their domain knowledge became the surfacing logic. The portal earned trust by selling only at the moment of relevance."
                    }
                ],
                results: [],
                reflection: [
                    "A portal isn't a website — it's a relationship interface. Marketing sites convert in seconds; apps retain across sessions; portals operate over years. That timescale changes the design brief: the portal can't shout, can't be silent, and must know its own limits.",
                    "If I did this again, I'd design the closure flow first. Closure stress-tests every assumption upstream — whether the document vault holds what's needed, whether the compliance log shows full history. Starting there would have surfaced systemic gaps earlier instead of at the final step."
                ]
            }
        },
        {
            slug: "bin-media",
            title: "BIN Media",
            industry: "Digital Advertising",
            tags: ["Website", "B2B", "Lead Gen", "UI/UX"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project8-binmedia-web.jpg",
            cardAlt: "BIN Media case study",
            heroImage: "img/Project8-binmedia-web.jpg",
            heroAlt: "BIN Media - digital advertising agency website",
            year: "2026",
            role: "UI/UX Designer",
            client: "BIN Media (BIN Corporation Group)",
            deliverables: "IA · Wireframes · UI System · Prototype",
            detail: {
                product: "Marketing Website — Digital Advertising Agency",
                channels: "Web · Service pages · Consultation flow",
                overview: "BIN Media offers more than ten ad services across multiple platforms. The website carries two jobs: serve as a credibility anchor for an audience that researches before reaching out, and capture qualified leads through a consultation flow. The challenge wasn't visual — it was structural: making a deep service catalog feel navigable, and making a familiar agency story feel specific.",
                contextParagraph1: "Three frictions shaped the brief, surfaced from stakeholder input and competitor analysis. The primary user is a marketing or business decision-maker comparing agencies — looking for specificity before reaching out.",
                contextParagraph2: "",
                contextBullets: [
                    "Catalog depth — ten-plus ad services with sub-categories needed a consistent template; designing each page individually would have produced inconsistency and slow content updates",
                    "Trust as the conversion driver — B2B buyers compare agencies before contacting; the site had to surface client logos, testimonials, case projects, and tenure consistently across every page, not as one section",
                    "Lead capture across browsing depths — a visitor might convert on the homepage, on a service page, or after reading case studies; consultation had to be available throughout, not gated behind a single CTA"
                ],
                processIntro: "Four decisions shaped the work:",
                processSteps: [
                    {
                        title: "Designed a single scalable template for ten-plus service pages",
                        body: "Each ad service (Google, Facebook, TikTok, YouTube, Zalo, Criteo, ADX) shares the same structural rhythm: overview → service formats → why BIN Media → pricing → consultation. The template handles content variation without breaking layout, so adding or updating services doesn't require redesign."
                    },
                    {
                        title: "Treated trust as ambient, not sectional",
                        body: "Client logos, testimonials, and project tiles recur across the homepage, service hubs, and category pages — calibrated to reinforce credibility without crowding the lead path. Specific numbers (12+ years, 2,000+ campaigns, 98% satisfaction) anchor the story without requiring the visitor to dig."
                    },
                    {
                        title: "Made lead capture available, not demanding",
                        body: "Consultation forms are surfaced throughout the site, paired with quick-contact shortcuts (Zalo, phone, WhatsApp) for visitors ready to act immediately. The form stays short — name, email, phone, channel preference, service of interest, request — to lower the cost of inquiry."
                    },
                    {
                        title: "Designed service pages to lead with outcome, not platform",
                        body: "The default agency framing opens with the platform (\"We do Google Ads\"). The template is structured to lead with what the business gets (\"Reach buyers actively searching\") and treat the platform name as the how, not the what — same content, different sequence."
                    }
                ],
                results: [],
                reflection: [
                    "Agency websites win on clarity, not flair. The audience isn't browsing for inspiration; they're auditioning a vendor. Every visual decision has to defend itself against a simple question: does this help the buyer trust us faster? That reframed how I weighted design choices — depth of trust signal over hero animation, scannable service rhythm over editorial layout, persistent contact options over a single beautiful CTA.",
                    "The clearest limit of this project was research. I designed from stakeholder briefs and competitor analysis without speaking to actual buyers. The decisions held up against the brief, but I'm aware buyer language and search behavior in this category are specific in ways internal teams sometimes generalize. If I did this again, I'd ask for at least three buyer interviews before locking the service template."
                ]
            }
        },
        {
            slug: "airnoma",
            title: "Airnoma",
            industry: "Travel Tech",
            tags: ["Mobile App", "Travel", "UI/UX"],
            categories: ["app", "branding"],
            cardImage: "img/Project3-Airnoma-App.jpg",
            cardAlt: "Airnoma case study",
            heroImage: "img/Project3-Airnoma-App.jpg",
            heroAlt: "Airnoma - travel eSIM mobile app",
            year: "2026",
            role: "UI/UX Designer (Contributor)",
            client: "Airnoma",
            deliverables: "UI · Prototype",
            detail: {
                product: "Travel eSIM App — Global Connectivity",
                channels: "Mobile app · iOS · Android",
                overview: "Airnoma simplifies one of travel's most repetitive frictions — finding reliable mobile data in a new country. The app lets travelers browse eSIM packages by destination, install in minutes, and manage active plans on the go.",
                contextParagraph1: "Travelers buying eSIMs face two recurring frictions: comparing plans across countries with unfamiliar carriers, and trusting that the eSIM will actually work on arrival. The product needed to reduce both — clear pricing per country, transparent coverage information, and a low-friction install flow.",
                contextParagraph2: "I worked on selected UI surfaces within the broader design team, focused on visual consistency and component-level details. The role was contributory rather than end-to-end — I joined specific tasks rather than owning the product direction.",
                contextBullets: [
                    "Plan comparison friction — 190+ destinations with varying carriers, data allowances, and validity made comparison difficult without a clear information hierarchy",
                    "Install trust gap — travelers needed confidence the eSIM would work before arrival; the activation flow had to feel guided, not transactional",
                    "Active plan clarity — managing multiple eSIMs across trips required a simple dashboard that surfaced status and remaining data without clutter"
                ],
                processIntro: "Key surfaces I contributed to:",
                processSteps: [
                    {
                        title: "Country browse & package selection",
                        body: "Flat list and search across 190+ destinations, structured to surface the most relevant packages — coverage, data allowance, validity, and all-in price — without requiring the user to compare across multiple screens."
                    },
                    {
                        title: "Plan detail screen",
                        body: "Coverage map, data allowance, validity period, and total price consolidated in a single view. The goal was to answer the two questions travelers ask first — will it work where I'm going, and what does it actually cost — before surfacing the purchase action."
                    },
                    {
                        title: "eSIM install flow",
                        body: "Guided activation with QR code and step-by-step instructions. Designed as the product's proof-of-value moment — not a confirmation screen, but a guided experience that walked users through activation and gave them immediate feedback that the eSIM was live."
                    },
                    {
                        title: "My eSIMs — active plan management",
                        body: "Active and expired plan dashboard with status, remaining data, and validity at a glance. Structured for travelers managing multiple plans across trips, with clear visual separation between active, scheduled, and expired eSIMs."
                    }
                ],
                results: [],
                reflection: [
                    "The clearest takeaway from this project: travel apps live or die on the install moment. Everything before the install is browsing; everything after is reassurance. Designing the install flow with that weight in mind — not as a transactional confirmation step but as the moment the product proves itself — shaped the small details I worked on."
                ]
            }
        },
        { slug: "myss-clinic", title: "myss Clinic", industry: "Healthcare / Beauty", tags: ["Branding", "Leadgen"], categories: ["branding", "leadgen"], cardImage: "img/Project4-myss-landingpage.jpg", cardAlt: "myss Clinic case study", year: "2024" },
        { slug: "md1-world", title: "MD1 World", industry: "Business Services", tags: ["Branding", "Compliance"], categories: ["branding", "compliance"], cardImage: "img/Project7-md1world-web.jpg", cardAlt: "MD1 World case study", year: "2024" },
        { slug: "tamvie-health", title: "TamVie Health", industry: "Healthcare", tags: ["Leadgen", "App"], categories: ["leadgen", "app"], serviceTypes: ["Mobile App", "Web Design"], cardImage: "img/Project9-tamvie-webapp.jpg", cardAlt: "TamVie Health case study", year: "2024" },
        { slug: "aesthetic-clinic", title: "Aesthetic clinic", industry: "Beauty", tags: ["Branding", "Leadgen"], categories: ["branding", "leadgen"], cardImage: "img/Project10-spa-landingpage.jpg", cardAlt: "Aesthetic clinic case study", year: "2024" },
        {
            slug: "ntb-industrial-park",
            title: "NTB Industrial Park",
            industry: "Industrial / B2B",
            tags: ["Website", "B2B", "Multi-Language", "UX/UI"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project6-ntbindustrialpark-web.jpg",
            cardAlt: "NTB Industrial Park case study",
            heroImage: "img/Project6-ntbindustrialpark-web.jpg",
            heroAlt: "NTB Industrial Park - investor-facing website",
            year: "2025",
            role: "UX/UI Designer",
            client: "Nam Thăng Bình Industrial Park",
            deliverables: "IA · Wireframes · UI System · Prototype",
            detail: {
                product: "Investor-Facing Multi-Language Website",
                channels: "Web · Vietnamese · English · Chinese",
                overview: "NTB is positioned as a green platform integrating renewable energy, AI infrastructure, and ESG/CBAM compliance from planning. The website's job was to communicate that positioning to a sophisticated, slow-moving B2B audience: CEOs, plant managers, and FDI investors evaluating long-term industrial commitments.",
                contextParagraph1: "Three frictions shaped the brief, surfaced from stakeholder input and competitor analysis. The primary user is a senior decision-maker mid-evaluation, often returning across weeks before requesting consultation.",
                contextParagraph2: "",
                contextBullets: [
                    "Regulatory complexity — ESG, CBAM, Power-as-a-Service, and edge AI carry real business stakes but aren't intuitive on first read",
                    "Differentiation gap — most industrial park sites look alike; NTB's actual differentiation was hidden inside generic templates",
                    "Multi-language reach — the site needed to serve Vietnamese, English, and Chinese audiences within a single IA"
                ],
                processIntro: "Three decisions shaped the work:",
                processSteps: [
                    {
                        title: "Built the IA around investor evaluation criteria, not company offerings",
                        body: "The default industrial park IA mirrors internal structure — solutions, products, services. I restructured it around what investors evaluate: location strategy, energy infrastructure, AI readiness, ESG/CBAM compliance, factory types. Each section answers a question, not promotes a feature."
                    },
                    {
                        title: "Translated regulatory topics into business outcomes",
                        body: "CBAM became \"EU export readiness.\" Microgrid + BESS became \"stable power for continuous production.\" Edge AI became \"factory-floor decisions, low latency.\" Technical accuracy preserved; framing led with consequence."
                    },
                    {
                        title: "Designed the system to scale across three languages",
                        body: "Type scale, component spacing, and layout grid were built to absorb Vietnamese, English, and Chinese content lengths without breaking. Translation was content-only — the structural design remained consistent across locales."
                    }
                ],
                results: [],
                reflection: [
                    "B2B isn't less design — it's different design. The audience doesn't want delight; they want specificity. They return multiple times before converting, and the second visit is where trust is built or lost. That shaped how I approached hierarchy: surface-level clarity for skim, depth on click for due diligence.",
                    "The clearest limit of this project was research. I designed from stakeholder input, domain reading, and competitor analysis — without talking to actual investors. The framing held up, but I'm aware investor language is precise in ways internal briefs sometimes aren't. If I did this again, I'd push for at least three FDI conversations before locking the IA."
                ]
            }
        },
        { slug: "uom-immigration", title: "UOM Immigration", industry: "Immigration Services", tags: ["Compliance", "Web Design"], categories: ["compliance", "leadgen"], serviceTypes: ["Web Design"], cardImage: "img/Project13-uom-web.jpg", cardAlt: "UOM Immigration case study", year: "2024" },
        { slug: "voltorax", title: "Voltorax", industry: "Automotive", tags: ["Branding", "E-Commerce"], categories: ["branding", "ecommerce"], cardImage: "img/Project15-voltorax-web.jpg", cardAlt: "Voltorax case study", year: "2024" },
        { slug: "saudi-evisa", title: "Saudi e-Visa", industry: "Travel / Visa", tags: ["Leadgen", "Branding"], categories: ["leadgen", "branding"], cardImage: "img/Project16-visa-landingpage.jpg", cardAlt: "Saudi e-Visa case study", year: "2024" },
        { slug: "elearning-platform", title: "E-learning Platform", industry: "Education", tags: ["App", "Branding"], categories: ["app", "branding"], serviceTypes: ["Landing Page"], cardImage: "img/Project17-Elearning-landingpage.jpg", cardAlt: "E-learning Platform case study", year: "2024" },
        { slug: "health-care-food", title: "Health care food", industry: "Organic Food", tags: ["E-Commerce", "Branding"], categories: ["ecommerce", "branding"], cardImage: "img/Project18-EcoHHB-web.jpg", cardAlt: "Health care food case study", year: "2024" },
        { slug: "jnr-vietnam", title: "JNR Vietnam", industry: "Corporate", tags: ["Leadgen", "Compliance"], categories: ["leadgen", "compliance"], cardImage: "img/Project19-JNRVIETNAM-landingpage.jpg", cardAlt: "JNR Vietnam case study", year: "2024" },
        {
            slug: "manbu",
            title: "Manbu",
            industry: "HR Tech",
            tags: ["Mobile App", "HR Tech", "Concept", "UI/UX"],
            categories: ["app", "leadgen"],
            cardImage: "img/Project11-manbu-app.jpg",
            cardAlt: "Manbu case study",
            heroImage: "img/Project11-manbu-app.jpg",
            heroAlt: "Manbu - HR super-app concept",
            year: "2023",
            role: "UI/UX Designer",
            client: "University capstone · Team of 4",
            deliverables: "Branding · UX · UI",
            detail: {
                product: "Internal HR Super-App — Mobile Concept",
                channels: "Mobile app · iOS · Android",
                overview: "Traditional HR management breaks down at company sizes above 100 employees, and most existing internal apps are functional but visually neglected. Manbu was conceived as a single internal app where employees and managers handle attendance, leave, tasks, payroll, and communication — designed to feel like a consumer product rather than enterprise software.",
                contextParagraph1: "A survey of around 200 respondents across companies in Ho Chi Minh City surfaced consistent friction with existing internal HR apps: clunky interfaces, slow notifications, missing features (no overtime adjustments, no comparable salary history, no meeting booking), and visuals that felt like compliance tools rather than something employees would willingly open.",
                contextParagraph2: "Manbu's concept response: bring the look and feel of consumer apps into HR — friendly mascot, clean UI, and feature breadth covering the daily moments employees actually use the app for, not just the ones HR mandates.",
                contextBullets: [
                    "Interface quality gap — existing HR apps were functional but visually neglected; employees used them out of obligation, not preference",
                    "Feature gaps — overtime adjustments, salary history comparison, and meeting booking were missing from most internal tools surveyed",
                    "Tone problem — enterprise HR microcopy defaults to formal and cold; the concept explored whether a friendlier voice could reduce friction in daily use"
                ],
                processIntro: "What we designed across the capstone:",
                processSteps: [
                    {
                        title: "Branding — identity built around a mascot",
                        body: "Logo combining \"M\" with a smart, agile rabbit mascot. Brand colors anchored on deep blue (#0B2C9D) with an orange accent — professional enough for corporate context, warm enough to push back against typical enterprise coldness."
                    },
                    {
                        title: "UX — flows across eight functional areas",
                        body: "Sitemap, user flows, and wireframes covering attendance, leave, task management, meetings, payroll, profile, internal mail, and petty cash. Each area scoped to the daily moments employees actually interact with HR tools, not the edge cases HR teams worry about."
                    },
                    {
                        title: "UI — full kit and screen designs",
                        body: "Full UI kit, screen designs, illustrations, popup states, and notification patterns. Illustrations and mascot-driven moments used at key touchpoints — onboarding, empty states, success confirmations — to sustain the consumer-app feel across the product."
                    },
                    {
                        title: "Tone — friendly microcopy through the mascot",
                        body: "The rabbit character carried a consistent voice through notifications, confirmations, and empty states. Pushing back against the typical formality of enterprise HR tools was a deliberate product direction, not just a visual choice."
                    }
                ],
                results: [],
                reflection: [
                    "The biggest takeaway from this project: HR software loses to consumer apps because it doesn't have to compete. Employees can't choose to install or uninstall their company's HR app, so the bar for design quality stays low. Manbu was an exercise in designing as if the bar mattered — even for a tool people are obligated to use.",
                    "This was an academic concept, not a production product. The decisions weren't tested against real engineering constraints, real user behavior at scale, or the politics of enterprise procurement. I include it in my portfolio as evidence of design thinking and execution at university level, not as a case of shipped impact."
                ]
            }
        }
    ];

    async function loadProjects() {
        try {
            if (window.SUPABASE_CONTENT && typeof window.SUPABASE_CONTENT.fetchProjects === "function") {
                var remoteProjects = await window.SUPABASE_CONTENT.fetchProjects();
                if (Array.isArray(remoteProjects) && remoteProjects.length > 0) {
                    return remoteProjects;
                }
            }
        } catch (error) {
            // Keep local fallback silently when Supabase is not ready.
        }
        return projects;
    }

    window.PROJECTS_DATA = {
        projects: projects,
        loadProjects: loadProjects
    };
})();
