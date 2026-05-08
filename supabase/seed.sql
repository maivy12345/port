-- Seed file: import all 18 projects from local data into Supabase
-- Run this in Supabase SQL Editor after running setup.sql

insert into public.projects (
  slug, title, industry, tags, categories,
  card_image, card_alt, hero_image, hero_alt,
  year, role, client_name, deliverables,
  hero_subtitle, hero_summary,
  detail_product, detail_channels, detail_overview,
  context_paragraph_1, context_paragraph_2,
  context_bullets, results, reflection,
  sort_order, is_published
) values

-- 01: One IBC App
(
  'one-ibc-app',
  'One IBC App',
  'Application / App',
  array['Leadgen', 'Branding', 'App'],
  array['leadgen', 'branding', 'app'],
  'img/Project1-OneIBC-App.jpg',
  'One IBC App case study',
  'img/Selected works1.png',
  'One IBC App - product screens',
  '2024',
  'Lead UX / UI Designer',
  'One IBC',
  'Research · Wireframes · UI System · Prototype',
  'Digital experience for mobility, business registration & client portal',
  'Redesigned the One IBC client-facing app to streamline onboarding, service discovery, and document management for international business clients.',
  'Mobile & Web Application',
  'Client portal · Service catalog · Document center',
  'One IBC needed a complete redesign of their app to reduce friction for international clients registering businesses, tracking services, and managing documents across multiple jurisdictions.',
  'International clients struggled with a fragmented experience across multiple entry points, inconsistent navigation, and unclear service status tracking.',
  'We unified the core flows into a single coherent app experience, covering onboarding, service selection, document upload, and account management.',
  array[
    'Fragmented entry points for different service types',
    'Unclear service status and next-step guidance',
    'Document upload flow with poor error handling',
    'Inconsistent UI patterns across platform sections'
  ],
  '[{"value":"+38","unit":"%","description":"Service activation completion rate"},{"value":"-45","unit":"%","description":"Support tickets related to onboarding confusion"},{"value":"4.7","unit":"/5","description":"App store usability score after launch"},{"value":"2","unit":"x","description":"Faster document submission flow"}]'::jsonb,
  array[
    'International users need reassurance at every step - clarity in language and status communication is as important as visual hierarchy.',
    'Mapping the full client journey across 3 service types revealed hidden friction points that individual screen reviews had missed.',
    'Earlier collaboration with the compliance team would have saved two rounds of revision on the document management flows.'
  ],
  1, true
),

-- 02: Offshore CompanyCorp
(
  'offshore-companycorp',
  'Offshore CompanyCorp',
  'Professional Services',
  array['Compliance'],
  array['compliance'],
  'img/Project2-OCC-Web.jpg',
  'Offshore CompanyCorp case study',
  'img/Project2-OCC-Web.jpg',
  'Offshore CompanyCorp hero',
  '2024',
  'UX / UI Designer',
  'Offshore CompanyCorp',
  'UX Audit · Wireframes · UI Design',
  'Compliance-first web experience for offshore company formation',
  'Redesigned the main website to improve trust signals, simplify the service inquiry flow, and clearly communicate complex compliance offerings.',
  'Corporate Services Website',
  'Public website · Lead generation · Service pages',
  'Offshore CompanyCorp needed a website that communicated credibility and simplified the path from service discovery to inquiry submission for international clients.',
  'Users arriving on the site had difficulty understanding service scope and differentiators, leading to low inquiry conversion and high bounce rates.',
  'We restructured the information architecture, elevated trust signals, and redesigned the inquiry flow to match client intent at each entry point.',
  array[
    'Service offerings were unclear to first-time visitors',
    'Trust signals were buried or missing from key decision pages',
    'Inquiry form had unnecessary steps increasing drop-off',
    'Mobile experience was inconsistent with desktop'
  ],
  '[{"value":"+29","unit":"%","description":"Inquiry form completion rate"},{"value":"-18","unit":"%","description":"Bounce rate on service pages"},{"value":"3","unit":"x","description":"Increase in qualified lead submissions"},{"value":"4.5","unit":"/5","description":"Client satisfaction score in user testing"}]'::jsonb,
  array[
    'Trust-building in professional services depends as much on content clarity as on visual polish.',
    'Simplifying the inquiry form from 9 fields to 5 had the single largest impact on conversion.',
    'Building with a mobile-first mindset from the start would have reduced late-stage rework significantly.'
  ],
  2, true
),

-- 03: Medpro
(
  'medpro',
  'Medpro',
  'Healthcare',
  array['E-Commerce'],
  array['ecommerce'],
  'img/Project5-medpro-WebApp.jpg',
  'Medpro case study',
  'img/Project5-medpro-WebApp.jpg',
  'Medpro hero',
  '2024',
  'Product Designer',
  'Medpro Healthcare',
  'Research · UX/UI Design · Prototype',
  'Healthcare e-commerce platform for medical supplies and wellness products',
  'Designed an e-commerce experience for Medpro that makes it easy for patients and clinics to find, compare, and purchase medical products online.',
  'E-Commerce Web Platform',
  'Product catalog · Cart & checkout · Clinic account portal',
  'Medpro needed an e-commerce platform that served both individual patients and clinic procurement teams, with different browsing and purchasing needs.',
  'Patients and clinics had very different purchasing behaviors but were being served the same generic e-commerce experience, leading to confusion and cart abandonment.',
  'We designed a dual-mode shopping experience with tailored product discovery, pricing tiers, and checkout flows for each user type.',
  array[
    'No distinction between patient and clinic buying flows',
    'Product discovery was slow with poor search and filtering',
    'Checkout lacked bulk ordering for clinic procurement',
    'Trust signals around product quality were absent'
  ],
  '[{"value":"+41","unit":"%","description":"Checkout completion rate"},{"value":"-33","unit":"%","description":"Cart abandonment on clinic orders"},{"value":"4.6","unit":"/5","description":"Post-purchase satisfaction score"},{"value":"2.5","unit":"x","description":"Increase in repeat purchases within 60 days"}]'::jsonb,
  array[
    'Designing for two distinct user types within one platform requires clear mode-switching signals rather than two separate interfaces.',
    'Product trust signals - certifications, reviews, supplier info - were more influential on conversion than price presentation.',
    'Involving clinic procurement staff in early usability testing surfaced bulk order requirements we had not initially scoped.'
  ],
  3, true
),

-- 04: NTB Industrial Park
(
  'ntb-industrial-park',
  'NTB Industrial Park',
  'Industrial',
  array['Branding', 'Leadgen'],
  array['branding', 'leadgen'],
  'img/Project6-ntbindustrialpark-web.jpg',
  'NTB Industrial Park case study',
  'img/Project6-ntbindustrialpark-web.jpg',
  'NTB Industrial Park hero',
  '2024',
  'UX / UI Designer',
  'NTB Industrial Park',
  'Brand Identity · Web Design · UI System',
  'Industrial park brand and lead generation website',
  'Created a brand identity and web presence for NTB Industrial Park to attract foreign direct investment and communicate facility capabilities to international prospects.',
  'Corporate Branding + Website',
  'Brand identity · Corporate website · Investment landing page',
  'NTB Industrial Park needed a professional brand identity and website to position the park for international investors and manufacturing tenants.',
  'The park lacked a cohesive visual identity and a website capable of communicating facility specifications, location advantages, and investment incentives clearly.',
  'We built a brand system from the ground up alongside a web experience that guided prospects through facility discovery and inquiry submission.',
  array[
    'No existing brand identity to differentiate from competitors',
    'Facility specifications scattered across separate documents',
    'No clear investment inquiry pathway on digital channels',
    'Target audience included international investors with high credibility expectations'
  ],
  '[{"value":"+52","unit":"%","description":"Qualified investment inquiries post-launch"},{"value":"3","unit":"x","description":"Increase in international prospect reach"},{"value":"4.8","unit":"/5","description":"Stakeholder satisfaction score"},{"value":"6","unit":"wks","description":"Full brand to launch timeline"}]'::jsonb,
  array[
    'Industrial and B2B clients judge credibility through information precision - vague copy loses trust faster than outdated visuals.',
    'Translating technical facility specifications into readable investor-facing content required close collaboration with the operations team.',
    'A modular brand system from day one made it easy to extend assets across print, digital, and signage with consistency.'
  ],
  4, true
),

-- 05: BIN Media
(
  'bin-media',
  'BIN Media',
  'Media',
  array['Branding', 'E-Commerce'],
  array['branding', 'ecommerce'],
  'img/Project8-binmedia-web.jpg',
  'BIN Media case study',
  'img/Project8-binmedia-web.jpg',
  'BIN Media hero',
  '2024',
  'Brand & Product Designer',
  'BIN Media',
  'Brand Identity · E-Commerce UI · Design System',
  'Media brand and digital storefront for content and merchandise',
  'Built a brand identity and e-commerce experience for BIN Media that supports both content monetization and physical merchandise sales.',
  'Media Brand + E-Commerce Website',
  'Brand system · Content shop · Merchandise store',
  'BIN Media needed a brand refresh and an e-commerce platform to monetize their content and merchandise to an engaged digital audience.',
  'The existing brand lacked distinctiveness and the sales experience was fragmented across multiple third-party platforms.',
  'We developed a unified brand identity and a single e-commerce destination that combined content, digital products, and merchandise.',
  array[
    'Brand identity was undifferentiated in a crowded media landscape',
    'Sales were split across 3 separate platforms creating customer confusion',
    'No cohesive visual language connecting content and commerce',
    'Mobile purchasing experience was poorly optimized'
  ],
  '[{"value":"+44","unit":"%","description":"Direct sales through owned platform"},{"value":"-28","unit":"%","description":"Customer drop-off between discovery and purchase"},{"value":"4.7","unit":"/5","description":"Brand cohesion score from audience survey"},{"value":"1.8","unit":"x","description":"Average order value after redesign"}]'::jsonb,
  array[
    'For media brands, the visual identity needs to translate across both editorial and commercial contexts without losing its voice.',
    'Consolidating sales channels into one owned experience required strong UX to compensate for the loss of platform discoverability.',
    'Audience involvement in early testing helped us calibrate the brand tone far faster than internal reviews alone.'
  ],
  5, true
),

-- 06: Manbu
(
  'manbu',
  'Manbu',
  'Lifestyle',
  array['App', 'Leadgen'],
  array['app', 'leadgen'],
  'img/Project11-manbu-app.jpg',
  'Manbu case study',
  'img/Project11-manbu-app.jpg',
  'Manbu hero',
  '2024',
  'Product Designer',
  'Manbu',
  'User Research · App Design · Prototype',
  'Lifestyle app for community discovery and local experiences',
  'Designed the Manbu app to connect users with local lifestyle experiences, community events, and curated recommendations in their city.',
  'Mobile Application (iOS & Android)',
  'Discovery feed · Event booking · Community profiles',
  'Manbu needed a mobile app that made it easy for users to discover, join, and share local lifestyle experiences in a social and community-driven way.',
  'Users had no central place to find vetted local experiences that matched their lifestyle interests, relying on scattered social media posts and word of mouth.',
  'We designed an app centered on personalized discovery, community trust, and frictionless event participation.',
  array[
    'No personalization in experience recommendations',
    'Event discovery was passive with no social proof layer',
    'Booking flow required too many steps to confirm participation',
    'Profile and community features were disconnected from discovery'
  ],
  '[{"value":"+61","unit":"%","description":"Event participation rate post-launch"},{"value":"4.8","unit":"/5","description":"App store rating in first month"},{"value":"-40","unit":"%","description":"Drop-off in event booking flow"},{"value":"3","unit":"x","description":"Organic referral growth from social sharing"}]'::jsonb,
  array[
    'Community-driven apps live or die on social proof - making peer endorsements visible at the point of discovery made the biggest difference.',
    'Simplifying the participation flow from tap to confirmed in 2 steps dramatically increased event fill rates.',
    'Designing for lifestyle means designing for aspiration - users want to see themselves in the experience before they commit.'
  ],
  6, true
),

-- 07: Airnoma
(
  'airnoma',
  'Airnoma',
  'Travel Tech',
  array['App', 'Branding'],
  array['app', 'branding'],
  'img/Project3-Airnoma-App.jpg',
  'Airnoma case study',
  'img/Project3-Airnoma-App.jpg',
  'Airnoma hero',
  '2024',
  'Lead Product Designer',
  'Airnoma',
  'Brand Identity · App UX/UI · Design System',
  'Travel tech brand and booking app for digital nomads',
  'Designed the Airnoma brand and travel app targeting digital nomads - combining flight, accommodation, and workspace booking in a single streamlined experience.',
  'Mobile Application + Brand Identity',
  'Flight & accommodation booking · Co-working discovery · Nomad community',
  'Airnoma needed a distinctive brand and a travel booking app that addressed the specific needs of digital nomads - combining travel logistics with workspace and community discovery.',
  'Digital nomads were using 4-6 separate apps to plan trips, find accommodation, locate co-working spaces, and connect with communities, creating significant friction.',
  'We built a unified booking experience with a nomad-optimized IA, combining the three core needs into one coherent flow.',
  array[
    'No single app addressed the full nomad travel stack',
    'Existing travel apps were optimized for leisure not work-travel hybrid',
    'Community and workspace discovery had no integration with booking',
    'Trust in accommodation for work required more context than standard platforms'
  ],
  '[{"value":"+55","unit":"%","description":"Booking completion rate in prototype testing"},{"value":"4.9","unit":"/5","description":"User desirability score from target audience"},{"value":"-35","unit":"%","description":"Time to plan a full nomad trip"},{"value":"2","unit":"x","description":"Higher NPS vs competitor benchmarks"}]'::jsonb,
  array[
    'Designing for a niche audience requires deeply understanding their specific workflow - generic travel UX patterns did not map to nomad behavior.',
    'The brand needed to feel like a trusted companion rather than a transaction platform - tone of voice was as important as visual design.',
    'Combining three product categories into one app required very deliberate IA decisions to avoid overwhelming the user on first open.'
  ],
  7, true
),

-- 08: myss Clinic
(
  'myss-clinic',
  'myss Clinic',
  'Healthcare / Beauty',
  array['Branding', 'Leadgen'],
  array['branding', 'leadgen'],
  'img/Project4-myss-landingpage.jpg',
  'myss Clinic case study',
  'img/Project4-myss-landingpage.jpg',
  'myss Clinic hero',
  '2024',
  'Brand & UX Designer',
  'myss Clinic',
  'Brand Identity · Landing Page · Lead Gen Flow',
  'Aesthetic clinic brand and high-converting landing page',
  'Created the myss Clinic brand identity and a conversion-focused landing page designed to turn qualified visitors into booked consultations.',
  'Brand Identity + Landing Page',
  'Brand system · Lead capture · Consultation booking',
  'myss Clinic needed a brand identity and digital presence that positioned them as a premium aesthetic clinic while driving direct booking inquiries.',
  'The clinic had no cohesive brand and was relying on word-of-mouth with no digital lead generation infrastructure in place.',
  'We designed a full brand system and a landing page optimized for consultation booking, targeting women aged 25-45 in the beauty and wellness space.',
  array[
    'No brand identity to differentiate from local clinic competitors',
    'No digital channel for consultation inquiries or bookings',
    'Target audience expected premium visual quality',
    'Conversion path from ad to booking was undefined'
  ],
  '[{"value":"+73","unit":"%","description":"Consultation booking rate from paid traffic"},{"value":"-50","unit":"%","description":"Cost per qualified lead vs previous channels"},{"value":"4.9","unit":"/5","description":"Brand perception score in target demographic"},{"value":"3","unit":"wks","description":"From brand brief to live landing page"}]'::jsonb,
  array[
    'In aesthetic and beauty, the brand visual language directly signals the quality of the service - every design decision carries trust weight.',
    'A clear single CTA above the fold outperformed a multi-option layout in A/B testing, doubling click-through on the booking button.',
    'Aligning the landing page copy with the actual consultation experience reduced no-show rates significantly.'
  ],
  8, true
),

-- 09: MD1 World
(
  'md1-world',
  'MD1 World',
  'Business Services',
  array['Branding', 'Compliance'],
  array['branding', 'compliance'],
  'img/Project7-md1world-web.jpg',
  'MD1 World case study',
  'img/Project7-md1world-web.jpg',
  'MD1 World hero',
  '2024',
  'Brand & UX Designer',
  'MD1 World',
  'Brand Identity · Web Design · Compliance UX',
  'Business services brand and compliance-led web platform',
  'Built the MD1 World brand and website to position the company as a credible business services provider with a compliance-first approach.',
  'Corporate Brand + Services Website',
  'Brand system · Corporate website · Compliance service pages',
  'MD1 World needed a brand that communicated authority and trustworthiness in a competitive business services market, supported by a website that made compliance offerings easy to navigate.',
  'The company lacked a strong visual identity and a web presence that matched the professionalism expected by enterprise clients.',
  'We developed a brand system anchored in clarity and authority, and a website that structured complex compliance services into digestible, actionable content.',
  array[
    'Brand identity did not reflect the expertise level of the services offered',
    'Compliance service pages were dense and hard to scan',
    'No clear client journey from landing to inquiry',
    'Enterprise clients expected a higher level of visual professionalism'
  ],
  '[{"value":"+34","unit":"%","description":"Enterprise inquiry conversion rate"},{"value":"-22","unit":"%","description":"Average time to find relevant service information"},{"value":"4.6","unit":"/5","description":"Brand credibility score in client feedback"},{"value":"2","unit":"x","description":"Increase in RFP submissions within 90 days"}]'::jsonb,
  array[
    'Enterprise clients evaluate credibility in seconds - visual consistency and content precision are the primary trust signals.',
    'Breaking compliance content into clear task-based sections increased comprehension without reducing the depth of information.',
    'Aligning the brand tone with the language clients use in real procurement conversations made the copy significantly more effective.'
  ],
  9, true
),

-- 10: TamVie Health
(
  'tamvie-health',
  'TamVie Health',
  'Healthcare',
  array['Leadgen', 'App'],
  array['leadgen', 'app'],
  'img/Project9-tamvie-webapp.jpg',
  'TamVie Health case study',
  'img/Project9-tamvie-webapp.jpg',
  'TamVie Health hero',
  '2024',
  'Product Designer',
  'TamVie Health',
  'User Research · Web App Design · Lead Gen',
  'Healthcare web app and patient acquisition platform',
  'Designed the TamVie Health web app to improve patient acquisition and simplify the service discovery and appointment request flow.',
  'Healthcare Web Application',
  'Service discovery · Appointment requests · Patient portal',
  'TamVie Health needed a web app that made it easy for patients to find relevant health services, understand their options, and submit appointment requests without unnecessary friction.',
  'Patients arriving at the platform found it difficult to identify the right service for their needs and often abandoned before submitting a request.',
  'We redesigned the service discovery and request flow with a guided experience that reduced decision fatigue and improved completion rates.',
  array[
    'Service catalog was not organized around patient needs or symptoms',
    'Appointment request form was too long and clinical in tone',
    'No guidance for patients unfamiliar with the service types offered',
    'Mobile experience was slow and not optimized for quick requests'
  ],
  '[{"value":"+48","unit":"%","description":"Appointment request completion rate"},{"value":"-36","unit":"%","description":"Drop-off on service discovery pages"},{"value":"4.7","unit":"/5","description":"Patient experience score post-launch"},{"value":"2.2","unit":"x","description":"Increase in mobile submissions"}]'::jsonb,
  array[
    'Healthcare users are often anxious - reducing the number of choices at each step had a much larger impact than improving visual design alone.',
    'Restructuring service categories around patient goals rather than clinical terminology immediately improved findability.',
    'Testing with actual patients - not just internal stakeholders - revealed friction points that were invisible from the inside.'
  ],
  10, true
),

-- 11: Aesthetic clinic
(
  'aesthetic-clinic',
  'Aesthetic clinic',
  'Beauty',
  array['Branding', 'Leadgen'],
  array['branding', 'leadgen'],
  'img/Project10-spa-landingpage.jpg',
  'Aesthetic clinic case study',
  'img/Project10-spa-landingpage.jpg',
  'Aesthetic clinic hero',
  '2024',
  'Brand & UX Designer',
  'Aesthetic Clinic',
  'Brand Identity · Landing Page Design · Lead Gen',
  'Premium aesthetic clinic brand and conversion landing page',
  'Designed a brand identity and high-converting landing page for an aesthetic clinic targeting premium wellness and beauty clients.',
  'Brand Identity + Landing Page',
  'Visual brand · Consultation lead capture · Service showcase',
  'The clinic needed a premium digital presence that would attract high-intent clients and convert visits from paid campaigns into consultation bookings.',
  'Without a strong brand or optimized landing page, paid traffic was generating low-quality leads with high cost-per-booking.',
  'We built a brand that communicated premium quality and safety, and a landing page structured around the client decision journey.',
  array[
    'Brand appearance did not reflect premium service positioning',
    'Landing page had unclear hierarchy and multiple competing CTAs',
    'Service showcase lacked before/after social proof',
    'Mobile performance and load speed reduced conversion from paid ads'
  ],
  '[{"value":"+65","unit":"%","description":"Consultation booking rate from paid traffic"},{"value":"-42","unit":"%","description":"Cost per booked consultation"},{"value":"4.8","unit":"/5","description":"Visual brand appeal score"},{"value":"4","unit":"wks","description":"Brand to live page timeline"}]'::jsonb,
  array[
    'In premium beauty, aspirational imagery and social proof are conversion levers - the page needs to make the client feel confident before they fill the form.',
    'Removing secondary CTAs and focusing on a single booking action increased form submissions by more than any copy or visual change.',
    'Page speed optimization for mobile was the highest ROI technical improvement in the project.'
  ],
  11, true
),

-- 12: One IBC Portal
(
  'one-ibc-portal',
  'One IBC Portal',
  'Business Platform',
  array['App', 'Compliance'],
  array['app', 'compliance'],
  'img/Project12-OneIBC-Portal.jpg',
  'One IBC Portal case study',
  'img/Project12-OneIBC-Portal.jpg',
  'One IBC Portal hero',
  '2024',
  'Lead Product Designer',
  'One IBC',
  'UX Audit · Product Design · Design System',
  'B2B compliance and business management portal',
  'Redesigned the One IBC business portal to give corporate clients a unified workspace for managing company registrations, compliance tasks, and service requests.',
  'B2B Web Portal',
  'Company management dashboard · Compliance task center · Document library',
  'One IBC needed a redesigned portal that gave corporate clients a single workspace to manage multiple company entities, track compliance deadlines, and submit service requests.',
  'Clients managing multiple company registrations across jurisdictions were using a fragmented portal that made it difficult to track status, deadlines, and outstanding actions.',
  'We redesigned the portal architecture around the client workflow - entity management, compliance calendar, and task-based navigation.',
  array[
    'No unified view for clients managing multiple company entities',
    'Compliance deadlines were not surfaced proactively',
    'Service request flow was disconnected from entity context',
    'Document management lacked version control and tagging'
  ],
  '[{"value":"+43","unit":"%","description":"Compliance task completion rate"},{"value":"-38","unit":"%","description":"Support tickets from portal confusion"},{"value":"4.6","unit":"/5","description":"Client portal satisfaction score"},{"value":"3","unit":"x","description":"Faster multi-entity management workflow"}]'::jsonb,
  array[
    'B2B portals are productivity tools first - every design decision needs to be evaluated against how much time it saves the power user.',
    'Surfacing compliance deadlines proactively in the dashboard reduced late submissions more effectively than any reminder email campaign.',
    'The design system investment paid off immediately - consistent patterns across 12 modules reduced onboarding time for new clients.'
  ],
  12, true
),

-- 13: UOM Immigration
(
  'uom-immigration',
  'UOM Immigration',
  'Immigration Services',
  array['Compliance', 'Leadgen'],
  array['compliance', 'leadgen'],
  'img/Project13-uom-web.jpg',
  'UOM Immigration case study',
  'img/Project13-uom-web.jpg',
  'UOM Immigration hero',
  '2024',
  'UX / UI Designer',
  'UOM Immigration',
  'Web Design · Compliance UX · Lead Gen',
  'Immigration services website with compliance-first UX',
  'Designed the UOM Immigration website to improve lead quality by helping users self-qualify and submit well-informed consultation requests.',
  'Professional Services Website',
  'Service pages · Self-qualification flow · Consultation inquiry',
  'UOM Immigration needed a website that would attract qualified leads, communicate service credibility, and guide users through complex visa and immigration options before they inquired.',
  'Immigration clients were often overwhelmed by complex legal options and lacked the context to submit useful inquiries, reducing conversion quality.',
  'We designed a content-led experience that guided users through their situation before presenting service options and the inquiry form.',
  array[
    'Users could not self-identify the correct service category for their situation',
    'Complex compliance information was presented without structure or guidance',
    'Inquiry form received many unqualified or incomplete submissions',
    'Trust signals and accreditation were not prominent enough for first-time visitors'
  ],
  '[{"value":"+39","unit":"%","description":"Qualified lead submission rate"},{"value":"-25","unit":"%","description":"Incomplete inquiry form submissions"},{"value":"4.5","unit":"/5","description":"First-visit trust score in user testing"},{"value":"2","unit":"x","description":"Increase in consultation conversion from inquiry"}]'::jsonb,
  array[
    'In compliance and legal services, helping users understand their situation before presenting solutions creates significantly higher quality leads.',
    'A guided self-qualification flow reduced the volume of inquiries but doubled the conversion rate of those that were submitted.',
    'Displaying accreditations and case outcomes prominently on service pages was more impactful than any copy optimization.'
  ],
  13, true
),

-- 14: Voltorax
(
  'voltorax',
  'Voltorax',
  'Automotive',
  array['Branding', 'E-Commerce'],
  array['branding', 'ecommerce'],
  'img/Project15-voltorax-web.jpg',
  'Voltorax case study',
  'img/Project15-voltorax-web.jpg',
  'Voltorax hero',
  '2024',
  'Brand & Product Designer',
  'Voltorax',
  'Brand Identity · E-Commerce Design · UI System',
  'Automotive brand and e-commerce platform for electric vehicle accessories',
  'Built the Voltorax brand identity and e-commerce experience for a new electric vehicle accessories brand entering a competitive automotive market.',
  'Brand Identity + E-Commerce Website',
  'Brand system · Product catalog · Cart & checkout',
  'Voltorax needed a distinctive brand and an e-commerce platform that positioned them as the go-to source for quality EV accessories in a rapidly growing market.',
  'The EV accessories market lacked a brand that combined technical credibility with a modern consumer-facing experience.',
  'We built a brand anchored in precision and performance, and an e-commerce experience designed for both enthusiast and first-time EV accessory buyers.',
  array[
    'No established brand identity in a new product category',
    'Target audience spanned both technical enthusiasts and everyday EV owners',
    'Product comparisons and compatibility information were critical to purchase confidence',
    'Checkout needed to handle complex shipping for fragile or large items'
  ],
  '[{"value":"+57","unit":"%","description":"Add-to-cart rate from product pages"},{"value":"-31","unit":"%","description":"Cart abandonment at checkout"},{"value":"4.8","unit":"/5","description":"Brand perception score from target audience"},{"value":"1.9","unit":"x","description":"Average order value vs initial projections"}]'::jsonb,
  array[
    'EV accessory buyers need compatibility confidence before price - making fitment information prominent was the single biggest conversion driver.',
    'A strong brand in an emerging category can create category ownership - investing in distinctive visual identity early pays long-term dividends.',
    'Iterating the checkout flow with real purchase data from beta users uncovered friction points that pre-launch testing had not revealed.'
  ],
  14, true
),

-- 15: Saudi e-Visa
(
  'saudi-evisa',
  'Saudi e-Visa',
  'Travel / Visa',
  array['Leadgen', 'Branding'],
  array['leadgen', 'branding'],
  'img/Project16-visa-landingpage.jpg',
  'Saudi e-Visa case study',
  'img/Project16-visa-landingpage.jpg',
  'Saudi e-Visa hero',
  '2024',
  'UX / UI Designer',
  'Saudi e-Visa Service',
  'Landing Page Design · Lead Gen · Brand Application',
  'Visa application landing page for Saudi tourism e-Visa',
  'Designed a high-converting landing page for Saudi e-Visa applications targeting international tourists with a clear, guided application entry flow.',
  'Lead Generation Landing Page',
  'Visa inquiry · Application start · Tourist information',
  'The Saudi e-Visa service needed a landing page that reduced friction for first-time applicants, clearly communicated eligibility, and guided users into starting the application.',
  'International tourists were confused by complex eligibility requirements and abandoned visa application pages before submitting inquiries.',
  'We designed a landing page that led with eligibility guidance and reduced the perceived complexity of starting an application.',
  array[
    'Eligibility requirements were unclear for non-Arabic speaking visitors',
    'Application start flow had too many steps before showing progress',
    'Trust signals for an official service were not prominent',
    'Mobile experience did not match the behavior of international tourists'
  ],
  '[{"value":"+68","unit":"%","description":"Application inquiry start rate"},{"value":"-44","unit":"%","description":"Drop-off before application submission"},{"value":"4.7","unit":"/5","description":"Clarity score in multi-country user testing"},{"value":"3","unit":"x","description":"Increase in mobile application starts"}]'::jsonb,
  array[
    'Government and official service landing pages need to lead with trust and simplicity - users are already apprehensive about bureaucratic processes.',
    'Structuring eligibility information as a simple checklist before showing the application form significantly reduced premature abandonment.',
    'Testing across multiple nationalities revealed language and cultural context differences that required content adaptation beyond translation.'
  ],
  15, true
),

-- 16: E-learning Platform
(
  'elearning-platform',
  'E-learning Platform',
  'Education',
  array['App', 'Branding'],
  array['app', 'branding'],
  'img/Project17-Elearning-landingpage.jpg',
  'E-learning Platform case study',
  'img/Project17-Elearning-landingpage.jpg',
  'E-learning Platform hero',
  '2024',
  'Product Designer',
  'E-learning Platform',
  'Brand Identity · App Design · Learning UX',
  'Digital learning platform for professional skills and certifications',
  'Designed the brand and product experience for an e-learning platform focused on professional upskilling, featuring course discovery, progress tracking, and certification.',
  'Mobile & Web Learning Application',
  'Course catalog · Learning experience · Certificate program',
  'The e-learning platform needed a brand and product experience that motivated learners to start and complete courses, with a focus on professional skills and certification outcomes.',
  'Learners were starting courses but not completing them, partly due to a lack of progress motivation and unclear paths to certification.',
  'We redesigned the learning experience around completion and outcome clarity, with visible progress, structured modules, and certification milestones.',
  array[
    'Course catalog was not organized around career outcomes',
    'Learning progress was not visually rewarding enough to sustain motivation',
    'Certification path was unclear until late in the course',
    'Mobile learning experience was not optimized for short session behavior'
  ],
  '[{"value":"+49","unit":"%","description":"Course completion rate"},{"value":"-37","unit":"%","description":"Drop-off after first module"},{"value":"4.8","unit":"/5","description":"Learner satisfaction score"},{"value":"2.3","unit":"x","description":"Increase in certification exam attempts"}]'::jsonb,
  array[
    'Learning product design is fundamentally about motivation architecture - progress visibility and milestone celebration drive completion more than content quality alone.',
    'Organizing courses by job outcome rather than subject matter dramatically improved course selection satisfaction.',
    'Short-session mobile design required rethinking module length and auto-save behavior from the ground up.'
  ],
  16, true
),

-- 17: Health care food
(
  'health-care-food',
  'Health care food',
  'Organic Food',
  array['E-Commerce', 'Branding'],
  array['ecommerce', 'branding'],
  'img/Project18-EcoHHB-web.jpg',
  'Health care food case study',
  'img/Project18-EcoHHB-web.jpg',
  'Health care food hero',
  '2024',
  'Brand & Product Designer',
  'EcoHHB',
  'Brand Identity · E-Commerce Design · Packaging Direction',
  'Organic food brand and e-commerce experience',
  'Designed the EcoHHB brand and online store to connect health-conscious consumers with certified organic food products through a clean, trust-first shopping experience.',
  'Brand Identity + E-Commerce Website',
  'Brand system · Product store · Subscription option',
  'EcoHHB needed a brand and e-commerce experience that communicated organic quality, built consumer trust, and simplified the path from product discovery to purchase.',
  'Health-conscious consumers were skeptical of organic claims online and needed strong trust signals and transparent product information before purchasing.',
  'We built a brand centered on transparency and provenance, and an e-commerce experience that surfaced certifications, sourcing stories, and ingredient clarity.',
  array[
    'Organic certification information was not visible on product pages',
    'Brand did not communicate farm-to-table provenance clearly',
    'Product discovery was not organized around health goals',
    'Subscription option was buried in the checkout flow'
  ],
  '[{"value":"+53","unit":"%","description":"First-purchase conversion rate"},{"value":"+38","unit":"%","description":"Subscription sign-up rate"},{"value":"4.9","unit":"/5","description":"Brand trust score in customer survey"},{"value":"2.1","unit":"x","description":"Repeat purchase rate in first 90 days"}]'::jsonb,
  array[
    'In organic food, trust is the product - every brand and UX decision either builds or erodes it.',
    'Surfacing farm sourcing stories on product pages increased conversion more than any promotional discount tested.',
    'Making the subscription option prominent and frictionless was the highest-value single change in the entire project.'
  ],
  17, true
),

-- 18: JNR Vietnam
(
  'jnr-vietnam',
  'JNR Vietnam',
  'Corporate',
  array['Leadgen', 'Compliance'],
  array['leadgen', 'compliance'],
  'img/Project19-JNRVIETNAM-landingpage.jpg',
  'JNR Vietnam case study',
  'img/Project19-JNRVIETNAM-landingpage.jpg',
  'JNR Vietnam hero',
  '2024',
  'UX / UI Designer',
  'JNR Vietnam',
  'Web Design · Brand Application · Lead Gen',
  'Corporate services website for Vietnam market entry and business setup',
  'Designed the JNR Vietnam website to help foreign businesses navigate Vietnam market entry services with a clear, trust-first lead generation experience.',
  'Corporate Services Website',
  'Service pages · Market entry guide · Consultation inquiry',
  'JNR Vietnam needed a website that communicated their expertise in Vietnam market entry and guided foreign business owners through service selection before submitting inquiries.',
  'Foreign businesses researching Vietnam entry were overwhelmed by regulatory complexity and left before finding relevant service information.',
  'We designed a content-structured experience that led with market context, organized services by business scenario, and guided users toward a qualified inquiry.',
  array[
    'Service pages were organized by product type, not by client business scenario',
    'Market context and regulatory overview were absent, reducing credibility',
    'Inquiry form attracted unqualified leads due to lack of pre-qualification',
    'Mobile experience was not optimized for international visitors'
  ],
  '[{"value":"+45","unit":"%","description":"Qualified consultation inquiry rate"},{"value":"-29","unit":"%","description":"Unqualified inquiry submissions"},{"value":"4.6","unit":"/5","description":"Site credibility score in user testing"},{"value":"2.5","unit":"x","description":"Increase in international visitor engagement"}]'::jsonb,
  array[
    'For foreign market entry services, demonstrating local expertise through content structure is more persuasive than any visual design choice.',
    'Organizing services by business scenario (starting a company vs expanding an existing one) reduced inquiry pre-qualification workload for the sales team.',
    'Including a concise regulatory overview section reduced bounce rate from international organic traffic by a measurable margin.'
  ],
  18, true
)

on conflict (slug) do update set
  title = excluded.title,
  industry = excluded.industry,
  tags = excluded.tags,
  categories = excluded.categories,
  card_image = excluded.card_image,
  card_alt = excluded.card_alt,
  hero_image = excluded.hero_image,
  hero_alt = excluded.hero_alt,
  year = excluded.year,
  role = excluded.role,
  client_name = excluded.client_name,
  deliverables = excluded.deliverables,
  hero_subtitle = excluded.hero_subtitle,
  hero_summary = excluded.hero_summary,
  detail_product = excluded.detail_product,
  detail_channels = excluded.detail_channels,
  detail_overview = excluded.detail_overview,
  context_paragraph_1 = excluded.context_paragraph_1,
  context_paragraph_2 = excluded.context_paragraph_2,
  context_bullets = excluded.context_bullets,
  results = excluded.results,
  reflection = excluded.reflection,
  sort_order = excluded.sort_order,
  is_published = excluded.is_published,
  updated_at = now();
