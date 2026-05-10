(function () {
    "use strict";

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function slugify(value) {
        return String(value || "")
            .toLowerCase()
            .replace(/&/g, " and ")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    var INDUSTRY_GROUP_BY_SLUG = {
        "medpro": "Healthcare",
        "myss-clinic": "Healthcare",
        "tamvie-health": "Healthcare",
        "aesthetic-clinic": "Healthcare",
        "one-ibc-app": "Business & Finance",
        "offshore-companycorp": "Business & Finance",
        "md1-world": "Business & Finance",
        "one-ibc-portal": "Business & Finance",
        "jnr-vietnam": "Business & Finance",
        "bin-media": "Technology",
        "manbu": "Technology",
        "airnoma": "Technology",
        "health-care-food": "Commerce",
        "ntb-industrial-park": "Real Estate",
        "voltorax": "Real Estate",
        "uom-immigration": "Legal & Immigration",
        "saudi-evisa": "Legal & Immigration",
        "elearning-platform": "Education"
    };

    function normalizeIndustry(industry) {
        var raw = String(industry || "");
        if (raw) return raw;
        return "Business & Finance";
    }

    function inferPrimaryService(project) {
        var tokens = (project.categories || [])
            .concat(project.tags || [])
            .map(function (item) { return String(item).toLowerCase(); });
        var title = String(project.title || "").toLowerCase();
        var industry = String(project.industry || "").toLowerCase();

        if (title.indexOf("portal") !== -1 || title.indexOf("dashboard") !== -1 || title.indexOf("platform") !== -1) return "Portal";
        if (tokens.indexOf("app") !== -1 || industry.indexOf("app") !== -1 || title.indexOf("app") !== -1) return "Mobile App";
        if (tokens.indexOf("leadgen") !== -1) return "Landing Page";
        return "Web Design";
    }

    function formatServiceLabel(service) {
        return service;
    }

    function renderWorksGrid(source) {
        var worksGrid = document.getElementById("worksGrid");
        if (!worksGrid || !Array.isArray(source) || source.length === 0) return;

        worksGrid.innerHTML = source.map(function (project) {
            var link = "work-detail.html?slug=" + encodeURIComponent(project.slug);
            var normalizedIndustry = project.industryGroup || INDUSTRY_GROUP_BY_SLUG[project.slug] || normalizeIndustry(project.industry);
            var serviceList = Array.isArray(project.serviceTypes) && project.serviceTypes.length
                ? project.serviceTypes
                : [inferPrimaryService(project)];
            var dataService = serviceList.map(slugify).join(" ");
            var serviceLabel = serviceList.map(formatServiceLabel).join(" · ");
            return [
                '<a href="' + link + '" class="work-card case-card" data-industry="' + escapeHtml(slugify(normalizedIndustry)) + '" data-service="' + escapeHtml(dataService) + '">',
                '  <div class="case-card__image-wrap">',
                '    <img src="' + escapeHtml(project.cardImage) + '" alt="' + escapeHtml(project.cardAlt || project.title + " case study") + '" />',
                "  </div>",
                '  <div class="case-card__body">',
                '    <p class="case-card__industry">' + escapeHtml(normalizedIndustry) + "</p>",
                "    <h3>" + escapeHtml(project.title) + "</h3>",
                '    <p class="case-card__tags">' + escapeHtml(serviceLabel) + "</p>",
                "  </div>",
                "</a>"
            ].join("");
        }).join("");
    }

    document.addEventListener("DOMContentLoaded", async function () {
        var source = window.PROJECTS_DATA && window.PROJECTS_DATA.projects;
        if (window.PROJECTS_DATA && typeof window.PROJECTS_DATA.loadProjects === "function") {
            source = await window.PROJECTS_DATA.loadProjects();
        }
        renderWorksGrid(source);
        document.dispatchEvent(new CustomEvent("works:grid-updated"));
    });
})();
