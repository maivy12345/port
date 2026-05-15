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
            slug: "eco-hhb",
            title: "Eco-HHB",
            industry: "Corporate & sustainability",
            industryGroup: "Commerce",
            heroTagLine2: "UI/UX",
            tags: ["Website", "Corporate", "Sustainability"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project18-EcoHHB-web.jpg",
            cardAlt: "Eco-HHB case study",
            heroImage: "img/Project18-EcoHHB-web.jpg",
            heroAlt: "Eco-HHB — corporate and sustainability website",
            year: "2024",
            role: "UI/UX Designer",
            client: "Eco-HHB",
            deliverables: "IA · Wireframes · UI System · Web",
            detail: {
                product: "Multi-sector corporate website — clean products & sustainable values",
                channels: "Web · Agriculture · Retail · Distribution · Real estate · Transport",
                overview: "Eco-HHB operates across multiple sectors but anchors its identity around clean products and sustainable values. The website's job was to present that breadth without scattering attention — letting visitors understand what the company does, what it stands for, and how to engage, in a single coherent surface.",
                contextParagraph1: "The brief surfaced three frictions: a wide business spread (agriculture, retail, distribution, real estate, transport) that risked feeling unfocused; a sustainability message that needed to feel grounded in real products and partners, not slogans; and a mixed audience including end consumers, business partners, and press.",
                contextParagraph2: "The primary visitor is either a consumer interested in clean-product sourcing or a partner evaluating the company's credibility and reach.",
                contextBullets: [],
                hideContextFigure: true,
                processIntro: "Three structural decisions shaped the site:",
                processSteps: [
                    {
                        title: "Anchored the homepage on values, then breadth",
                        body: "Most corporate sites lead with business lines. Eco-HHB opens with mission, vision, and product values — so visitors meet the brand before the catalog. Business lines and partners surface after, framed as how the values are delivered."
                    },
                    {
                        title: "Treated partners and press as trust signals, not decoration",
                        body: "Partner logos (Sokfarm, Moshav Farm, Bình An Farm) and press mentions appear consistently across the site. They double as credibility anchors and as proof that the sustainability message has real backing."
                    },
                    {
                        title: "Designed a flexible card system for diverse content",
                        body: "News, products, partners, testimonials, and business lines all needed visual presence. One card pattern with content variations carries them — keeping the site coherent across very different content types."
                    }
                ],
                results: [],
                reflection: [
                    "The biggest takeaway: corporate websites for multi-industry groups have to feel coherent without flattening the differences. Every business line needs its own breathing room, but the brand has to stay one brand across all of them. The decisions here leaned toward a unified visual rhythm with enough flexibility for each sector to read distinctly — so the company comes across as broad but not generic, and ambitious while still grounded in a clear set of values."
                ],
                keyScreensTitle: "Key Surfaces",
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project18-EcoHHB-web.jpg",
                        alt: "Eco-HHB — key screens from the corporate website",
                        caption: "Eco-HHB — website",
                        wide: true
                    }
                ],
                keyScreenBullets: [
                    "Homepage — mission, business lines overview, partner network, testimonials",
                    "About — vision, mission, founder story",
                    "Business lines — retail, agriculture, distribution, real estate, transport, import-export",
                    "News & press — articles, interviews, press mentions",
                    "Partnership — cooperation opportunities",
                    "Contact — multi-channel intake"
                ],
                entryNumberOrder: ["cs-overview", "cs-context", "cs-process", "cs-screens", "cs-reflection"]
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
        {
            slug: "myss-clinic",
            title: "Myss Clinic",
            industry: "Healthcare",
            heroTagLine2: "Web design",
            tags: ["Website", "Healthcare", "Dermatology"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project4-myss-landingpage.jpg",
            cardAlt: "Myss Clinic case study",
            heroImage: "img/Project4-myss-landingpage.jpg",
            heroAlt: "Myss Clinic website",
            year: "2026",
            role: "UI/UX Designer",
            client: "Myss Clinic by Dr.Anna",
            deliverables: "UX · UI · Prototype",
            detail: {
                product: "Dermatology clinic website",
                channels: "Web · Healthcare",
                overview: "A website for Myss Clinic by Dr.Anna — a dermatology clinic in Ho Chi Minh City offering medical-standard skin treatment, anti-aging, and aesthetic services. The site needed to balance two voices that don't usually share a page: clinical authority (doctor-led treatment, medical protocols) and consumer warmth (skincare, relaxation, transformation). The work focused on a layout and visual system that lets both read clearly without one undermining the other.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway from this project: in dermatology, trust and beauty have to share the same surface, but they can't compete for it. Visitors come for medical reassurance and stay for the aesthetic promise — or vice versa. Designing for that meant treating doctor credentials, treatment protocols, and clinical photography with the same care as brand visuals and customer testimonials, instead of letting either side dominate the page."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project4-myss-landingpage.jpg",
                        alt: "Myss Clinic website — key screens",
                        caption: "Myss Clinic — website",
                        wide: true
                    }
                ]
            }
        },
        {
            slug: "md1-world",
            title: "MD1 World",
            industry: "Charity",
            heroTagLine2: "UI/UX",
            tags: ["UX/UI Design"],
            categories: ["branding", "leadgen"],
            cardImage: "img/Project7-md1world-web.jpg",
            cardAlt: "MD1 World case study",
            heroImage: "img/Project7-md1world-web.jpg",
            heroAlt: "MD1 World — donor website",
            year: "2025",
            role: "UI/UX Designer",
            client: "Confidential client",
            deliverables: "Research",
            serviceTypes: ["Web Design"],
            detail: {
                product: "Donor-facing charity website",
                channels: "Web · Donations · Medical fundraising",
                overview: "MD1 World connects donors with children needing medical treatment they otherwise couldn't afford. The website's two jobs: tell each child's story with dignity, and make donating simple enough that emotional intent doesn't get lost in friction.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway: charity design lives between emotion and trust. Stories pull donors in, but trust is what makes them act — clear allocation of funds, transparent updates, and a donation flow that respects both the donor and the child. Designing for that meant giving equal weight to the storytelling and the credibility signals, instead of leaning on either alone."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project7-md1world-web.jpg",
                        alt: "MD1 World — key screens from the donor website",
                        caption: "MD1 World — donor website",
                        wide: true
                    }
                ]
            }
        },
        {
            slug: "tamvie-health",
            title: "TamVie",
            industry: "Healthcare",
            heroTagLine2: "UI/UX",
            tags: ["Web App", "Healthcare", "Telemedicine", "UI/UX"],
            categories: ["leadgen", "app"],
            serviceTypes: ["Mobile App", "Web Design"],
            cardImage: "img/Project9-tamvie-webapp.jpg",
            cardAlt: "TamVie case study",
            heroImage: "img/Project9-tamvie-webapp.jpg",
            heroAlt: "TamVie — telemedicine and health content platform",
            year: "2025",
            role: "UI/UX Designer",
            client: "TamVie",
            deliverables: "Research · IA · Wireframes · UI System · Prototype",
            detail: {
                product: "Telemedicine, health content & wearable data platform",
                channels: "Web app · iOS · Android · Healthcare",
                overview: "Most telemedicine products are transactional — book a doctor, talk once, close the tab. TamVie was designed against that model: a platform where patients follow doctors over time, learn from health content, share data from wearables, and consult when needed. The brief was to merge three usually-separate patterns — telehealth booking, health content feed, and device-data visualization — into one coherent product without making any one of them feel grafted on.",
                contextParagraph1: "Three frictions shaped the brief, surfaced from stakeholder input and competitor analysis:",
                contextParagraph2: "Two primary users with different needs share the same product: The patient — wants accessible, trustworthy health information, easy connection to doctors, and one place to see their own health data. The doctor — wants to reach more patients, manage limited time efficiently, and use device data to make better decisions during short consultations.",
                contextBullets: [
                    "Telemedicine is transactional. Existing platforms treat consultation as a one-shot purchase. Patients have no reason to return between visits, and doctors have no surface to stay present in patients' lives.",
                    "Health content is fragmented and untrusted. Patients pull health advice from Facebook posts, blog SEO, and forwarded messages — sources that are personalized in algorithm but not in credibility.",
                    "Wearable data sits unused. Many patients own devices measuring blood pressure, glucose, heart rate. That data rarely reaches the doctor in a usable form; when it does, it's a screenshot."
                ],
                hideContextFigure: true,
                processIntro: "I worked across research, IA, wireframes, UI system, and prototype. Three decisions shaped the product:",
                processSteps: [
                    {
                        title: "Made the feed the home, not a doctor directory.",
                        body: "The default telehealth pattern opens on a doctor list. TamVie opens on a content feed from the doctors a patient follows. The shift turns the platform from a search tool used when sick into a place patients return to between visits — and turns doctor presence into an ongoing brand, not a transactional listing."
                    },
                    {
                        title: "Integrated device data into the consultation context, not a separate tab.",
                        body: "For doctors, patient health metrics surface alongside the consultation flow — recent readings, trends, and anomalies visible in the same view as appointment notes. Designing it as adjacent context rather than a settings-level tab made it usable in short consultations where switching screens isn't an option."
                    },
                    {
                        title: "Designed the doctor profile as a content hub, not a booking page.",
                        body: "Most telehealth platforms reduce doctors to a card with credentials and a \"Book now\" button. TamVie's doctor profile shows their content history, follower count, specialties, and consultation availability in one place. The profile doubles as a credibility anchor and a long-term touchpoint — patients can follow a doctor before they need one."
                    }
                ],
                results: [],
                reflection: [
                    "In healthcare, importing a pattern from another industry can hurt as much as help. Feed mechanics work for content discovery, but the like-comment-share grammar of social media translates badly when the subject is medical advice. Designing TamVie meant borrowing what worked (following, personalized feed, saved library) and rejecting what didn't (open commenting, virality optimization, anonymous engagement). The hardest decisions weren't about adding features — they were about which familiar patterns to deliberately not import.",
                    "If I did this again, I'd push earlier for a clearer separation between \"doctors I follow for content\" and \"doctors I'd book a consultation with.\" In early designs the two blurred — patients followed doctors as content creators but felt awkward booking them as physicians, and vice versa. Splitting that affordance later cost a redesign cycle that could have been avoided with a sharper IA from the start."
                ],
                keyScreensTitle: "Key Surfaces",
                keyScreensIntro: "",
                keyScreenBullets: [
                    "Feed (home) — content from followed doctors and personalized recommendations",
                    "Recommendations — suggested doctors and content tuned to patient interests and metrics",
                    "Following & Saved — managed library of doctors followed and content saved for later",
                    "Doctor profile — credentials, content history, availability, consultation booking",
                    "Patient health dashboard — device-measured metrics with trend visualization",
                    "Consultation booking — schedule, payment, pre-visit context capture",
                    "Active consultation — video session with patient metrics visible in context",
                    "Doctor's patient view — appointment list, patient history, device data, notes"
                ]
            }
        },
        {
            slug: "elearning-platform",
            title: "E-learning Platform",
            industry: "Education",
            heroTagLine2: "UI/UX",
            tags: ["Education"],
            categories: ["app", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project14-Elearning-landingpage.jpg",
            cardAlt: "E-learning Platform case study",
            heroImage: "img/Project14-Elearning-landingpage.jpg",
            heroAlt: "E-learning Platform — courses and progress",
            year: "2024",
            role: "UI/UX Designer",
            client: "Confidential client",
            deliverables: "UX/UI Design · Web",
            detail: {
                product: "Structured e-learning platform for students",
                channels: "Web · Education · Courses · Progress tracking",
                overview: "An e-learning platform delivering structured courses for students — covering subject lessons, exercises, and progress tracking. The platform needed to balance two design priorities: make courses easy to discover and start, and keep students returning long enough to actually complete them.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway: e-learning sells the dream of starting, but design has to support the grind of continuing. It's easy to make signup feel exciting; it's much harder to make session number twelve feel worth showing up for. The decisions on this project leaned toward visible progress, small daily wins, and lesson structures short enough that finishing one always felt achievable — because in education, the design problem isn't enrollment, it's the second week."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project14-Elearning-landingpage.jpg",
                        alt: "E-learning Platform — key screens from the student experience",
                        caption: "E-learning Platform — product screens",
                        wide: true
                    }
                ]
            }
        },
        {
            slug: "aesthetic-clinic",
            title: "Aesthetic Clinic",
            industry: "Beauty",
            industryGroup: "Beauty",
            heroTagLine2: "UI/UX",
            tags: ["Beauty", "Lead Gen"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project10-spa-landingpage.jpg",
            cardAlt: "Aesthetic Clinic case study",
            heroImage: "img/Project10-spa-landingpage.jpg",
            heroAlt: "Aesthetic Clinic — marketing website",
            year: "2023",
            role: "UI/UX Designer",
            client: "Confidential client",
            deliverables: "UX/UI Design · Web",
            detail: {
                product: "Marketing & booking website for an aesthetic clinic",
                channels: "Web · Beauty · Lead generation",
                overview: "A website for an aesthetic clinic offering skin treatments, anti-aging, and facial aesthetic services. The site needed to present a wide treatment menu clearly, showcase results without overstating them, and make the path to booking simple — anchored on a calm, considered visual tone that matched the category.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway: in aesthetics, the design itself is part of the pitch. Visitors judge the clinic's taste and standards from the website before they ever walk in. A polished, restrained layout signals the same quality the clinic claims to deliver in person — and the inverse is also true. That changed how I approached small details (spacing, typography, photo treatment): they weren't decoration, they were credentials."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project10-spa-landingpage.jpg",
                        alt: "Aesthetic Clinic — key screens from the marketing website",
                        caption: "Aesthetic Clinic — website",
                        wide: true
                    }
                ]
            }
        },
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
        {
            slug: "uom-immigration",
            title: "UOM Global",
            industry: "Immigration Services",
            heroTagLine2: "UI/UX",
            tags: ["Website", "Immigration", "Lead Gen", "Multi-Language", "UI System"],
            categories: ["compliance", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project13-uom-web.jpg",
            cardAlt: "UOM Global case study",
            heroImage: "img/Project13-uom-web.jpg",
            heroAlt: "UOM Global — US visa advisory website",
            year: "2025",
            role: "UI/UX Designer",
            client: "UOM Global",
            deliverables: "IA · Wireframes · UI System · Prototype",
            detail: {
                product: "US visa advisory and lead-generation website",
                channels: "Web · Immigration · Multi-language · Lead capture",
                overview: "UOM Global helps clients choose, prepare, and apply for US visas — a process that takes 12–36 months and involves significant financial and personal stakes. The website serves three core jobs: explain visa categories clearly enough for non-experts, build trust through credentials and client outcomes, and capture qualified leads at multiple browsing depths.",
                contextParagraph1: "Three frictions shaped the brief:",
                contextParagraph2: "The primary user is a senior decision-maker — entrepreneur, executive, investor, or skilled worker — researching long before reaching out.",
                contextBullets: [
                    "Visa complexity. Five visa types (L1, EB-1C, EB-3, EB-5, F1) each carry different requirements, costs, and timelines. Visitors often don't know which path applies to them.",
                    "Trust as the conversion driver. Clients commit significant money and life decisions to the process. Credentials, transparent process, and real client outcomes had to be visible early.",
                    "Multi-language audience. The site serves Vietnamese, Hong Kong Chinese, and global English audiences — each with different reading habits and regional context."
                ],
                hideContextFigure: true,
                processIntro: "Three structural decisions shaped how the site informs and converts:",
                processSteps: [
                    {
                        title: "Structured visa pages around user goals, not visa codes",
                        body: "The default immigration site groups pages by visa name (EB-5, L1, etc.). I designed each page to lead with the user's situation — investor, executive, skilled worker, student — and treat the visa code as the answer, not the headline."
                    },
                    {
                        title: "Made trust visible across every page, not just \"About\"",
                        body: "Client testimonials, partner law firm credentials, success indicators, and process transparency appear across the homepage, visa pages, and FAQ — not concentrated in one section. Visitors at any depth can verify credibility without backtracking."
                    },
                    {
                        title: "Designed a clear five-step process visualization",
                        body: "The \"journey with UOM\" section breaks the immigration path into five stages — consultation, strategy, paperwork, filing, post-visa support. Naming each stage makes a multi-year process feel finite and manageable, instead of opaque."
                    }
                ],
                results: [],
                reflection: [
                    "The biggest takeaway: in high-stakes decisions, design has to slow people down before it speeds them up. Immigration isn't a category where conversion-rate thinking helps — pushing a visitor to \"book now\" before they understand which visa applies to them produces bad leads and bad outcomes. The structural decisions on this project leaned toward giving visitors the time and clarity to figure out what they actually need first, with conversion paths available the moment they're ready."
                ],
                keyScreensTitle: "Key Surfaces",
                keyScreensIntro: "",
                keyScreenBullets: [
                    "Homepage — visa categories overview, journey stages, trust signals, lead form",
                    "Visa detail pages — eligibility, benefits, timeline, cost, requirements per visa type",
                    "About — company credentials, partner network, team",
                    "FAQ — common questions grouped by visa type and stage",
                    "Resources — articles, document library, guides",
                    "Profile evaluation — short intake form for free eligibility assessment",
                    "Appointment booking — consultation scheduling",
                    "Contact — multi-channel intake with regional support"
                ],
                entryNumberOrder: ["cs-overview", "cs-context", "cs-process", "cs-screens", "cs-reflection"]
            }
        },
        {
            slug: "voltorax",
            title: "VoltoraX",
            industry: "Clean Energy / B2B",
            industryGroup: "Business & Finance",
            heroTagLine2: "UI/UX",
            tags: ["Website", "B2B", "Clean Energy", "UI/UX"],
            categories: ["branding", "leadgen"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project15-voltorax-web.jpg",
            cardAlt: "VoltoraX case study",
            heroImage: "img/Project15-voltorax-web.jpg",
            heroAlt: "VoltoraX — clean energy and infrastructure website",
            year: "2026",
            role: "UI/UX Designer",
            client: "VoltoraX (NTB Group)",
            deliverables: "IA · UI System · Prototype",
            detail: {
                product: "B2B marketing website — clean electricity, infrastructure & service contracts",
                channels: "Web · B2B · Clean energy · NTB ecosystem",
                overview: "VoltoraX sells what businesses can't see — clean electricity, energy infrastructure, and long-term service contracts. The website's job is to turn that invisible product into something a procurement lead, plant manager, or sustainability officer can evaluate without needing an engineering briefing first. The site sits inside the broader NTB ecosystem, so it also needed to read as a credible extension of an established industrial brand.",
                contextParagraph1: "The site needed to solve three things at once: make an intangible product visible through business outcomes (stable power, lower costs, ESG readiness), present a spread of services (solar, BESS, microgrid, Power-as-a-Service) without losing clarity, and surface long-term trust signals — track record, partners, ecosystem alignment — before a visitor reaches pricing. The primary user is a B2B decision-maker evaluating energy options against cost, reliability, and compliance criteria.",
                contextParagraph2: "",
                contextBullets: [],
                hideContextFigure: true,
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway so far: selling an invisible product means designing for legibility before persuasion. Energy buyers don't need to be excited — they need to understand. The decisions on this project lean toward clarity over flair: short copy, predictable structure, outcome-first framing. The hardest part isn't making the site look modern; it's making something fundamentally abstract feel concrete enough for a stranger to evaluate.",
                    "This project is still in progress and hasn't gone live. The case study captures preliminary design intent rather than shipped work."
                ],
                hideSectionIds: ["cs-process"],
                entryNumberOrder: ["cs-overview", "cs-context", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project15-voltorax-web.jpg",
                        alt: "VoltoraX — key screens from the B2B marketing website (work in progress)",
                        caption: "VoltoraX — website (preliminary)",
                        wide: true
                    }
                ]
            }
        },
        {
            slug: "saudi-evisa",
            title: "Saudi Arabia eVisa",
            industry: "Travel / Visa",
            industryGroup: "Legal & Immigration",
            heroTagLine2: "UI/UX",
            tags: ["Travel/Visa", "Lead Gen"],
            categories: ["leadgen", "branding"],
            serviceTypes: ["Landing Page"],
            cardImage: "img/Project16-visa-landingpage.jpg",
            cardAlt: "Saudi Arabia eVisa case study",
            heroImage: "img/Project16-visa-landingpage.jpg",
            heroAlt: "Saudi Arabia eVisa — destination landing page",
            year: "2024",
            role: "UI/UX Designer",
            client: "Confidential client",
            deliverables: "UX/UI Design · Web",
            detail: {
                product: "e-visa destination page — GlobalVisaCorp gateway",
                channels: "Web · Travel · Lead generation",
                overview: "A destination page for Saudi Arabia e-visa applications within GlobalVisaCorp — the gateway for travelers applying online for tourism, Umrah, and business visits. The page needed to surface eligibility, fees, processing time, and requirements quickly, while presenting Saudi Arabia as a destination worth visiting — balancing transactional clarity with travel-page warmth.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway: visa pages live where transactional design meets travel inspiration. Most visa sites collapse to forms and fine print, losing the moment when a visitor is still deciding whether to apply. The decisions on this page leaned toward giving destination context (visual, evocative) the same weight as procedural detail (clear, scannable) — so the page works for both the visitor still imagining the trip and the one ready to start the application."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project16-visa-landingpage.jpg",
                        alt: "Saudi Arabia eVisa — key screens from the destination landing page",
                        caption: "Saudi Arabia eVisa — landing page",
                        wide: true
                    }
                ]
            }
        },
        {
            slug: "jnr-vietnam",
            title: "JNR Vietnam",
            industry: "Corporate / Exhibition",
            industryGroup: "Business & Finance",
            heroTagLine2: "UI/UX",
            tags: ["Website", "B2B", "Exhibition"],
            categories: ["leadgen", "branding"],
            serviceTypes: ["Web Design"],
            cardImage: "img/Project19-JNRVIETNAM-landingpage.jpg",
            cardAlt: "JNR Vietnam case study",
            heroImage: "img/Project19-JNRVIETNAM-landingpage.jpg",
            heroAlt: "JNR Vietnam — exhibition and booth design portfolio website",
            year: "2024",
            role: "UI/UX Designer",
            client: "JNR Vietnam",
            deliverables: "UX/UI Design · Web",
            detail: {
                product: "B2B portfolio website — booths, events & interior projects",
                channels: "Web · B2B · Exhibition · Events",
                overview: "JNR Vietnam works in a category where the work itself is the proof — a well-built booth is the best portfolio piece. The website's job was to surface that portfolio quickly, communicate the company's range of services and trusted partner network, and make it easy for event organizers and brands to start a conversation.",
                contextParagraph1: "",
                contextParagraph2: "",
                contextBullets: [],
                processIntro: "",
                processSteps: [],
                results: [],
                reflection: [
                    "The biggest takeaway: for portfolio-driven businesses, the website is the showroom — and bad layout dilutes good work. Booth design, event setup, and interior projects rely on visuals to sell themselves; cramped grids, low-resolution thumbnails, or weak hierarchy hurt the work more than they help the brand. The decisions on this project leaned toward giving the imagery room to breathe and the partners visible weight — letting the work do most of the talking."
                ],
                hideSectionIds: ["cs-context", "cs-process"],
                entryNumberOrder: ["cs-overview", "cs-screens", "cs-reflection"],
                keyScreensIntro: "",
                keyScreenFigures: [
                    {
                        src: "img/Project19-JNRVIETNAM-landingpage.jpg",
                        alt: "JNR Vietnam — key screens from the portfolio website",
                        caption: "JNR Vietnam — website",
                        wide: true
                    }
                ]
            }
        },
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
        return projects;
    }

    window.PROJECTS_DATA = {
        projects: projects,
        loadProjects: loadProjects
    };
})();
