(function () {
    "use strict";

    var projects = [
        {
            slug: "one-ibc-app",
            title: "One IBC App",
            industry: "Application / App",
            tags: ["Leadgen", "Branding", "App"],
            categories: ["leadgen", "branding", "app"],
            cardImage: "img/Project1-OneIBC-App.jpg",
            cardAlt: "One IBC App case study",
            heroImage: "img/Selected works1.png",
            heroAlt: "One IBC App - product screens",
            year: "2024",
            role: "Lead UX / UI Designer",
            client: "One IBC",
            deliverables: "Research · Wireframes · UI System · Prototype",
            heroSubtitle: "Digital experience for care, booking & health records",
            heroSummary: "Improved the healthcare experience by simplifying user flows for browsing services, accessing doctor information, and managing health-related actions in a more intuitive way.",
            detail: {
                product: "Healthcare booking platform - Web & Mobile",
                channels: "Patient portal · Clinic staff app · Admin dashboard",
                overview: "One IBC needed a full redesign of their patient-facing platform to reduce booking friction, increase conversion at key decision points, and unify three disconnected user roles into one coherent product experience.",
                contextParagraph1: "Patients and medical staff struggled with a fragmented system that made it hard to find doctors, book appointments, and track health records. The interface lacked hierarchy, leading to high drop-off rates at key decision points.",
                contextParagraph2: "We needed to redesign the core flows from the ground up - creating a unified experience that served three distinct user groups: patients, clinic staff, and administrators.",
                contextBullets: [
                    "Information overload on the doctor discovery screen",
                    "Unclear booking status & confirmation flow",
                    "No unified view for appointment history across clinics",
                    "Three separate codebases with inconsistent design patterns"
                ],
                results: [
                    { value: "+42", unit: "%", description: "Booking completion rate" },
                    { value: "-3.2", unit: "min", description: "Average time to find a doctor" },
                    { value: "4.8", unit: "/5", description: "Usability score from Maze testing" },
                    { value: "3", unit: "x", description: "Faster staff onboarding" }
                ],
                reflection: [
                    "Designing for healthcare means designing for high-stakes moments. Clear, calm UI is not just an aesthetic choice - it is a functional requirement when users are stressed or unwell.",
                    "The biggest shift was moving from feature parity to task clarity. Cutting features that users did not need freed up space for the flows that actually mattered.",
                    "If I were to do this again, I would push for earlier engineering involvement during IA restructuring so technical constraints are validated sooner."
                ]
            }
        },
        { slug: "offshore-companycorp", title: "Offshore CompanyCorp", industry: "Professional Services", tags: ["Compliance"], categories: ["compliance"], cardImage: "img/Project2-OCC-Web.jpg", cardAlt: "Offshore CompanyCorp case study", year: "2024" },
        { slug: "medpro", title: "Medpro", industry: "Healthcare", tags: ["E-Commerce"], categories: ["ecommerce"], cardImage: "img/Project5-medpro-WebApp.jpg", cardAlt: "Medpro case study", year: "2024" },
        { slug: "ntb-industrial-park", title: "NTB Industrial Park", industry: "Industrial", tags: ["Branding", "Leadgen"], categories: ["branding", "leadgen"], cardImage: "img/Project6-ntbindustrialpark-web.jpg", cardAlt: "NTB Industrial Park case study", year: "2024" },
        { slug: "bin-media", title: "BIN Media", industry: "Media", tags: ["Branding", "E-Commerce"], categories: ["branding", "ecommerce"], cardImage: "img/Project8-binmedia-web.jpg", cardAlt: "BIN Media case study", year: "2024" },
        { slug: "manbu", title: "Manbu", industry: "Lifestyle", tags: ["App", "Leadgen"], categories: ["app", "leadgen"], cardImage: "img/Project11-manbu-app.jpg", cardAlt: "Manbu case study", year: "2024" },
        { slug: "airnoma", title: "Airnoma", industry: "Travel Tech", tags: ["App", "Branding"], categories: ["app", "branding"], cardImage: "img/Project3-Airnoma-App.jpg", cardAlt: "Airnoma case study", year: "2024" },
        { slug: "myss-clinic", title: "myss Clinic", industry: "Healthcare / Beauty", tags: ["Branding", "Leadgen"], categories: ["branding", "leadgen"], cardImage: "img/Project4-myss-landingpage.jpg", cardAlt: "myss Clinic case study", year: "2024" },
        { slug: "md1-world", title: "MD1 World", industry: "Business Services", tags: ["Branding", "Compliance"], categories: ["branding", "compliance"], cardImage: "img/Project7-md1world-web.jpg", cardAlt: "MD1 World case study", year: "2024" },
        { slug: "tamvie-health", title: "TamVie Health", industry: "Healthcare", tags: ["Leadgen", "App"], categories: ["leadgen", "app"], cardImage: "img/Project9-tamvie-webapp.jpg", cardAlt: "TamVie Health case study", year: "2024" },
        { slug: "aesthetic-clinic", title: "Aesthetic clinic", industry: "Beauty", tags: ["Branding", "Leadgen"], categories: ["branding", "leadgen"], cardImage: "img/Project10-spa-landingpage.jpg", cardAlt: "Aesthetic clinic case study", year: "2024" },
        { slug: "one-ibc-portal", title: "One IBC Portal", industry: "Business Platform", tags: ["App", "Compliance"], categories: ["app", "compliance"], cardImage: "img/Project12-OneIBC-Portal.jpg", cardAlt: "One IBC Portal case study", year: "2024" },
        { slug: "uom-immigration", title: "UOM Immigration", industry: "Immigration Services", tags: ["Compliance", "Leadgen"], categories: ["compliance", "leadgen"], cardImage: "img/Project13-uom-web.jpg", cardAlt: "UOM Immigration case study", year: "2024" },
        { slug: "voltorax", title: "Voltorax", industry: "Automotive", tags: ["Branding", "E-Commerce"], categories: ["branding", "ecommerce"], cardImage: "img/Project15-voltorax-web.jpg", cardAlt: "Voltorax case study", year: "2024" },
        { slug: "saudi-evisa", title: "Saudi e-Visa", industry: "Travel / Visa", tags: ["Leadgen", "Branding"], categories: ["leadgen", "branding"], cardImage: "img/Project16-visa-landingpage.jpg", cardAlt: "Saudi e-Visa case study", year: "2024" },
        { slug: "elearning-platform", title: "E-learning Platform", industry: "Education", tags: ["App", "Branding"], categories: ["app", "branding"], cardImage: "img/Project17-Elearning-landingpage.jpg", cardAlt: "E-learning Platform case study", year: "2024" },
        { slug: "health-care-food", title: "Health care food", industry: "Organic Food", tags: ["E-Commerce", "Branding"], categories: ["ecommerce", "branding"], cardImage: "img/Project18-EcoHHB-web.jpg", cardAlt: "Health care food case study", year: "2024" },
        { slug: "jnr-vietnam", title: "JNR Vietnam", industry: "Corporate", tags: ["Leadgen", "Compliance"], categories: ["leadgen", "compliance"], cardImage: "img/Project19-JNRVIETNAM-landingpage.jpg", cardAlt: "JNR Vietnam case study", year: "2024" }
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
