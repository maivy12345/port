(function () {
    "use strict";

    function getDetailProject(projects) {
        if (!Array.isArray(projects) || projects.length === 0) return null;

        var params = new URLSearchParams(window.location.search);
        var slug = params.get("slug");
        if (!slug) return projects[0];
        return projects.find(function (item) { return item.slug === slug; }) || projects[0];
    }

    function getNextProject(projects, currentSlug) {
        if (!Array.isArray(projects) || projects.length === 0) return null;
        var index = projects.findIndex(function (item) { return item.slug === currentSlug; });
        if (index === -1) return projects[0];
        return projects[(index + 1) % projects.length];
    }

    function text(el, value) {
        if (el) el.textContent = value || "";
    }

    function html(el, value) {
        if (el) el.innerHTML = value || "";
    }

    function ensureFallbackDetail(project) {
        var tags = project.tags || [];
        if (project.detail) return project.detail;
        return {
            product: (project.industry || "Digital Product") + " - Web & Mobile",
            channels: "Website · Product experience · Case study",
            overview: "This project focused on improving key journeys, clarifying information hierarchy, and raising conversion through a cleaner and more intuitive UX approach.",
            contextParagraph1: "The previous experience had fragmented flows and inconsistent interactions, making it difficult for users to complete key actions with confidence.",
            contextParagraph2: "The redesign aligned UX patterns and content strategy into one cohesive direction, with measurable product goals and clearer user guidance.",
            contextBullets: [
                "Improve information hierarchy and user confidence",
                "Reduce friction in critical conversion flows",
                "Align visual and interaction consistency across pages",
                "Create a scalable baseline for future iterations"
            ],
            results: [
                { value: "+36", unit: "%", description: "Primary conversion improvement" },
                { value: "-27", unit: "%", description: "Drop-off reduction on key steps" },
                { value: "4.6", unit: "/5", description: "Average usability feedback score" },
                { value: "2", unit: "x", description: "Faster design-to-dev handoff" }
            ],
            reflection: [
                "A clear structure and focused content make product decisions easier for users.",
                "Consistency across flows helps reduce cognitive load and support long-term scale.",
                "Early alignment between product, design, and engineering prevents rework later in the timeline."
            ],
            goals: tags.slice(0, 4).map(function (tag) { return "Strengthen " + tag + " outcomes"; })
        };
    }

    function renderDetailPage(projects) {
        var project = getDetailProject(projects);
        if (!project) return;

        var detail = ensureFallbackDetail(project);
        var next = getNextProject(projects, project.slug);

        document.title = project.title + " - Case Study · Meivy Nguyen";
        text(document.querySelector(".cs-hero__crumb-current"), project.title);

        var heroImg = document.querySelector(".cs-hero__bg-img");
        if (heroImg) {
            heroImg.src = project.heroImage || project.cardImage;
            heroImg.alt = project.heroAlt || (project.title + " hero");
        }

        var tagNodes = document.querySelectorAll(".cs-hero__tags .cs-tag");
        if (tagNodes[0]) tagNodes[0].textContent = project.industry || "Case Study";
        if (tagNodes[1]) tagNodes[1].textContent = "UX / UI Design";
        if (tagNodes[2]) tagNodes[2].textContent = (project.tags || []).join(" · ") || "Product design";
        if (tagNodes[3]) tagNodes[3].textContent = project.year || "2024";

        var titleAnim = document.querySelectorAll(".cs-hero__title .title-anim");
        if (titleAnim[0]) titleAnim[0].textContent = project.title;
        if (titleAnim[1]) titleAnim[1].textContent = "- " + (project.heroSubtitle || "Case study detail");
        text(document.querySelector(".cs-hero__sub"), project.heroSummary || detail.overview);

        var metaValues = document.querySelectorAll(".cs-meta__value");
        if (metaValues[0]) metaValues[0].textContent = project.client || "Confidential client";
        if (metaValues[1]) metaValues[1].textContent = project.role || "Product Designer";
        if (metaValues[2]) metaValues[2].textContent = project.deliverables || "Research · UX/UI Design · Prototype";

        var overviewMetaValues = document.querySelectorAll(".cs-meta-card__value");
        if (overviewMetaValues[0]) overviewMetaValues[0].textContent = project.client || "Confidential client";
        if (overviewMetaValues[1]) overviewMetaValues[1].textContent = detail.product;
        if (overviewMetaValues[2]) overviewMetaValues[2].textContent = detail.channels;

        var overviewParagraph = document.querySelector("#cs-overview p");
        text(overviewParagraph, detail.overview);

        var contextParagraphs = document.querySelectorAll("#cs-context p");
        if (contextParagraphs[0]) contextParagraphs[0].textContent = detail.contextParagraph1;
        if (contextParagraphs[1]) contextParagraphs[1].textContent = detail.contextParagraph2;

        var contextList = document.querySelector("#cs-context .cs-list");
        if (contextList && Array.isArray(detail.contextBullets)) {
            html(contextList, detail.contextBullets.map(function (line) {
                return "<li>" + line + "</li>";
            }).join(""));
        }

        var resultCards = document.querySelectorAll("#cs-results .cs-metric-card");
        if (Array.isArray(detail.results)) {
            detail.results.forEach(function (item, index) {
                var card = resultCards[index];
                if (!card) return;
                var number = card.querySelector(".cs-metric__number");
                var desc = card.querySelector(".cs-metric__desc");
                if (number) {
                    number.innerHTML = String(item.value || "") + '<span class="cs-metric__unit">' + String(item.unit || "") + "</span>";
                }
                if (desc) desc.textContent = item.description || "";
            });
        }

        var reflectionParagraphs = document.querySelectorAll("#cs-reflection p");
        if (Array.isArray(detail.reflection)) {
            detail.reflection.forEach(function (line, index) {
                if (reflectionParagraphs[index]) reflectionParagraphs[index].textContent = line;
            });
        }

        if (next) {
            var nextCard = document.querySelector(".cs-next__card");
            if (nextCard) nextCard.setAttribute("href", "work-detail.html?slug=" + encodeURIComponent(next.slug));
            text(document.querySelector(".cs-next__title"), next.title);
            text(document.querySelector(".cs-next__sub"), (next.tags || []).join(" · "));
            var nextThumb = document.querySelector(".cs-next__thumb img");
            if (nextThumb) {
                nextThumb.src = next.cardImage;
                nextThumb.alt = next.title;
            }
        }
    }

    document.addEventListener("DOMContentLoaded", async function () {
        var source = window.PROJECTS_DATA && window.PROJECTS_DATA.projects;
        if (window.PROJECTS_DATA && typeof window.PROJECTS_DATA.loadProjects === "function") {
            source = await window.PROJECTS_DATA.loadProjects();
        }
        renderDetailPage(source);
    });
})();
