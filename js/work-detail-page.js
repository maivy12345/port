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

    function getPreviousProject(projects, currentSlug) {
        if (!Array.isArray(projects) || projects.length === 0) return null;
        var index = projects.findIndex(function (item) { return item.slug === currentSlug; });
        if (index === -1) return projects[projects.length - 1];
        return projects[(index - 1 + projects.length) % projects.length];
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
        var prev = getPreviousProject(projects, project.slug);

        document.title = project.title + " - Case Study · Meivy Nguyen";
        text(document.querySelector(".cs-hero__crumb-current"), project.title);

        var heroImg = document.querySelector(".cs-hero__bg-img");
        if (heroImg) {
            heroImg.src = project.heroImage || project.cardImage;
            heroImg.alt = project.heroAlt || (project.title + " hero");
        }

        var tagNodes = document.querySelectorAll(".cs-hero__tags .cs-tag");
        if (tagNodes[0]) tagNodes[0].textContent = project.industry || "Case Study";
        if (tagNodes[1]) tagNodes[1].textContent = project.heroTagLine2 || "UX / UI Design";
        if (tagNodes[2]) tagNodes[2].textContent = (project.tags || []).join(" · ") || "Product design";
        if (tagNodes[3]) tagNodes[3].textContent = project.year || "2024";

        var titleAnim = document.querySelectorAll(".cs-hero__title .title-anim");
        if (titleAnim[0]) titleAnim[0].textContent = project.title;

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

        var contextFig = document.querySelector("#cs-context figure.cs-figure");
        if (contextFig) {
            contextFig.style.display = detail.hideContextFigure ? "none" : "";
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

        // Process section — intro text + dynamic steps
        var processIntroEl = document.querySelector("#cs-process > p");
        if (processIntroEl && detail.processIntro) {
            processIntroEl.textContent = detail.processIntro;
        }
        var stepsContainer = document.querySelector("#cs-process .cs-steps");
        if (stepsContainer && Array.isArray(detail.processSteps) && detail.processSteps.length) {
            stepsContainer.innerHTML = detail.processSteps.map(function (step, i) {
                return '<div class="cs-step"><span class="cs-step__num">' +
                    String(i + 1).padStart(2, '0') +
                    '</span><div class="cs-step__content"><h3>' + step.title + '</h3><p>' + step.body + '</p></div></div>';
            }).join('');
        }

        // Audit highlights block (appended inside #cs-process)
        var processSection = document.getElementById('cs-process');
        if (processSection && Array.isArray(detail.auditHighlights) && detail.auditHighlights.length) {
            var oldHL = processSection.querySelector('.cs-audit-highlights');
            if (oldHL) oldHL.parentNode.removeChild(oldHL);
            var hlBlock = document.createElement('div');
            hlBlock.className = 'cs-audit-highlights';
            hlBlock.innerHTML = '<p class="cs-audit-highlights__heading">Audit Highlights</p>' +
                '<div class="cs-audit-highlights__grid">' +
                detail.auditHighlights.map(function (item) {
                    return '<div class="cs-audit-highlight"><span class="cs-audit-highlight__label">' +
                        item.label + '</span><p>' + item.body + '</p></div>';
                }).join('') + '</div>';
            processSection.appendChild(hlBlock);
        }

        // Section visibility — hide sections with no data
        var goalsSection = document.getElementById('cs-goals');
        if (goalsSection) goalsSection.style.display = detail.goals ? '' : 'none';
        var personasSection = document.getElementById('cs-personas');
        if (personasSection) personasSection.style.display = detail.personas ? '' : 'none';
        var resultsSection = document.getElementById('cs-results');
        if (resultsSection) {
            resultsSection.style.display = (Array.isArray(detail.results) && detail.results.length) ? '' : 'none';
        }

        var screensSection = document.getElementById("cs-screens");
        if (screensSection) {
            var screensTitle = screensSection.querySelector(".cs-entry__title");
            if (screensTitle && detail.keyScreensTitle) {
                screensTitle.textContent = detail.keyScreensTitle;
            }
        }
        if (screensSection && Array.isArray(detail.keyScreenFigures) && detail.keyScreenFigures.length) {
            var firstP = screensSection.querySelector("p");
            if (firstP && detail.keyScreensIntro !== undefined) {
                firstP.textContent = detail.keyScreensIntro;
            }
            screensSection.querySelectorAll(".cs-screens-grid, figure.cs-figure").forEach(function (el) {
                el.parentNode.removeChild(el);
            });
            screensSection.querySelectorAll(".cs-key-surfaces-list").forEach(function (el) {
                el.parentNode.removeChild(el);
            });
            detail.keyScreenFigures.forEach(function (fig) {
                var figure = document.createElement("figure");
                figure.className = "cs-figure" + (fig.wide ? " cs-figure--wide" : "");
                var frame = document.createElement("div");
                frame.className = "cs-figure__frame";
                var img = document.createElement("img");
                img.src = fig.src || "";
                img.alt = fig.alt || "";
                img.loading = "lazy";
                img.decoding = "async";
                frame.appendChild(img);
                figure.appendChild(frame);
                if (fig.caption) {
                    var cap = document.createElement("figcaption");
                    cap.textContent = fig.caption;
                    figure.appendChild(cap);
                }
                screensSection.appendChild(figure);
            });
            if (Array.isArray(detail.keyScreenBullets) && detail.keyScreenBullets.length) {
                var listAfterFig = document.createElement("ul");
                listAfterFig.className = "cs-list cs-key-surfaces-list";
                detail.keyScreenBullets.forEach(function (line) {
                    var liB = document.createElement("li");
                    liB.textContent = line;
                    listAfterFig.appendChild(liB);
                });
                screensSection.appendChild(listAfterFig);
            }
        } else if (screensSection && Array.isArray(detail.keyScreenBullets) && detail.keyScreenBullets.length) {
            var firstPb = screensSection.querySelector("p");
            if (firstPb && detail.keyScreensIntro !== undefined) {
                firstPb.textContent = detail.keyScreensIntro;
            }
            screensSection.querySelectorAll(".cs-key-surfaces-list").forEach(function (el) {
                el.parentNode.removeChild(el);
            });
            screensSection.querySelectorAll(".cs-screens-grid, figure.cs-figure").forEach(function (el) {
                el.parentNode.removeChild(el);
            });
            var listEl = document.createElement("ul");
            listEl.className = "cs-list cs-key-surfaces-list";
            detail.keyScreenBullets.forEach(function (line) {
                var li = document.createElement("li");
                li.textContent = line;
                listEl.appendChild(li);
            });
            screensSection.appendChild(listEl);
        }

        if (Array.isArray(detail.hideSectionIds)) {
            detail.hideSectionIds.forEach(function (sid) {
                var node = document.getElementById(sid);
                if (node) node.style.display = "none";
            });
        }

        var tocNav = document.querySelector(".cs-toc__nav");
        if (tocNav) {
            tocNav.querySelectorAll('.cs-toc__link[href^="#"]').forEach(function (link) {
                var id = link.getAttribute("href").slice(1);
                var target = document.getElementById(id);
                var hiddenByDetail = Array.isArray(detail.hideSectionIds) && detail.hideSectionIds.indexOf(id) !== -1;
                var hidden = hiddenByDetail || (target && window.getComputedStyle(target).display === "none");
                if (hidden) {
                    link.style.display = "none";
                } else {
                    link.style.display = "";
                }
            });
            var tocIdx = 0;
            tocNav.querySelectorAll('.cs-toc__link[href^="#"]').forEach(function (link) {
                if (link.style.display === "none") return;
                tocIdx += 1;
                var numEl = link.querySelector(".cs-toc__num");
                if (numEl) numEl.textContent = String(tocIdx).padStart(2, "0");
            });
        }

        if (Array.isArray(detail.entryNumberOrder)) {
            detail.entryNumberOrder.forEach(function (sid, idx) {
                var sec = document.getElementById(sid);
                if (!sec) return;
                var numEl = sec.querySelector(".cs-entry__num");
                if (numEl) numEl.textContent = String(idx + 1).padStart(2, "0");
            });
        }

        var reflectionParagraphs = document.querySelectorAll("#cs-reflection p");
        if (Array.isArray(detail.reflection)) {
            reflectionParagraphs.forEach(function (p, i) {
                if (i < detail.reflection.length) {
                    p.textContent = detail.reflection[i];
                    p.style.display = '';
                } else {
                    p.style.display = 'none';
                }
            });
        }

        var prevSection = document.getElementById("csPrevSection");
        var showPrev = projects.length >= 2 && prev && prev.slug !== project.slug;

        if (prevSection) {
            if (showPrev) {
                prevSection.removeAttribute("hidden");
                var prevCard = prevSection.querySelector(".cs-prev__card");
                if (prevCard) prevCard.setAttribute("href", "work-detail.html?slug=" + encodeURIComponent(prev.slug));
                text(prevSection.querySelector(".cs-prev__title"), prev.title);
                text(prevSection.querySelector(".cs-prev__sub"), (prev.tags || []).join(" · "));
                var prevThumb = prevSection.querySelector(".cs-prev__thumb img");
                if (prevThumb) {
                    prevThumb.src = prev.cardImage;
                    prevThumb.alt = prev.title;
                }
            } else {
                prevSection.setAttribute("hidden", "hidden");
            }
        }

        var adjacentGrid = document.getElementById("csAdjacentGrid");
        if (adjacentGrid) {
            adjacentGrid.classList.toggle("cs-adjacent__grid--solo-next", !showPrev);
            adjacentGrid.classList.toggle("cs-adjacent__grid--has-prev", !!showPrev);
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
