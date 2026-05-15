(function () {
    "use strict";

    // 1. Init Lenis for smooth scrolling
    const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 2,
    });

    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // TOC hash links — smooth scroll via Lenis
    document.addEventListener('click', function (e) {
        var link = e.target.closest('.cs-toc__link[href^="#"]');
        if (!link) return;
        var hash = link.getAttribute('href');
        var target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -24 });
    });

    // 2. Hero title: split words and animate word-by-word
    var heroWords = [];
    document.querySelectorAll(".hero__line").forEach(function(line) {
        var raw = line.textContent.replace(/\s+/g, " ").trim();
        line.textContent = "";
        raw.split(" ").forEach(function(w) {
            var span = document.createElement("span");
            span.className = "word";
            span.style.display = "inline-block";
            span.textContent = w;
            line.appendChild(span);
            line.appendChild(document.createTextNode(" "));
            heroWords.push(span);
        });
    });

    // 3. Hero GSAP Timeline
    gsap.set(heroWords, { opacity: 0, y: "0.35em", rotate: 2 });
    gsap.set([".hero__eyebrow", ".hero__actions", ".hero__social"], { autoAlpha: 0, y: 20 });
    gsap.set("#planetWrap", { autoAlpha: 0, scale: 0.9 });

    const heroTimeline = gsap.timeline();

    heroTimeline
        .to(".hero__eyebrow", { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, 0.15)
        .to(heroWords, { opacity: 1, y: 0, rotate: 0, duration: 1.0, stagger: 0.08, ease: "power3.out" }, "-=0.5")
        .to("#planetWrap", { autoAlpha: 1, scale: 1, duration: 0.95, ease: "back.out(1.35)" }, "-=0.7")
        .to([".hero__actions", ".hero__social"], { autoAlpha: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out" }, "-=0.7");

    // 4. Scroll Reveal Animations (Replacing intersection Observer)
    // Exclude sections whose layout depends on CSS transforms on children (marquee tracks / masks).
    gsap.utils.toArray('.reveal:not(.about-expertise-marquee):not(.cases--marquee)').forEach((elem) => {
        gsap.fromTo(elem,
            { autoAlpha: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                },
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            }
        );
    });

    // 5. Magnetic Buttons
    const magneticBtns = document.querySelectorAll(".btn");
    magneticBtns.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.6, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 5.02 Magnetic stat cards: same feel as Say Hello button
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.querySelectorAll(".showcase--timeline .showcase-card, .pink-benefit-card:not(.pink-benefit-card--center)").forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(card, {
                    x: x * 0.24,
                    y: y * 0.24,
                    duration: 0.65,
                    ease: "power2.out"
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }

    // 5.03 Center pink card: follow cursor (not wobble)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const centerCard = document.querySelector(".pink-benefit-card--center");
        if (centerCard) {
            centerCard.addEventListener("mousemove", (e) => {
                const rect = centerCard.getBoundingClientRect();
                if (rect.width < 1 || rect.height < 1) return;
                const nx = (e.clientX - rect.left) / rect.width - 0.5;
                const ny = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(centerCard, {
                    x: nx * 10,
                    y: ny * 8 - 2,
                    rotateX: ny * -3,
                    rotateY: nx * 4.5,
                    transformPerspective: 900,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
            centerCard.addEventListener("mouseleave", () => {
                gsap.to(centerCard, {
                    x: 0,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        }
    }

    // 5.05 Hero sphere: CSS float + smooth cursor parallax
    const heroVisual = document.querySelector(".hero__visual");
    const heroSphere = document.querySelector(".hero__sphere-img");
    if (
        heroVisual &&
        heroSphere &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        const maxPx = 26;
        gsap.set(heroSphere, { transformOrigin: "50% 50%" });
        const xTo = gsap.quickTo(heroSphere, "x", { duration: 0.7, ease: "sine.out" });
        const yTo = gsap.quickTo(heroSphere, "y", { duration: 0.7, ease: "sine.out" });
        const rotTo = gsap.quickTo(heroSphere, "rotation", { duration: 0.8, ease: "sine.out" });
        heroVisual.addEventListener("mousemove", (e) => {
            const rect = heroVisual.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) return;
            const nx = (e.clientX - rect.left) / rect.width - 0.5;
            const ny = (e.clientY - rect.top) / rect.height - 0.5;
            xTo(nx * 2 * maxPx);
            yTo(ny * 2 * maxPx);
            rotTo(nx * -3.2 + ny * 1.6);
        });
        heroVisual.addEventListener("mouseleave", () => {
            xTo(0);
            yTo(0);
            rotTo(0);
        });
    }

    // 5.1 Subtle 3D tilt for focus cards
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.querySelectorAll(".focus-card").forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
                const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
                gsap.to(card, {
                    rotateX: rx,
                    rotateY: ry,
                    transformPerspective: 900,
                    duration: 0.45,
                    ease: "power2.out"
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
            });
        });
    }

    // 6. Section titles: word-by-word reveal
    function wrapHeadingWords(el) {
        if (!el || el.dataset.wordReady === "true") return;

        // Collect plain text, preserving <br> as line break marker
        var rawHTML = el.innerHTML
            .replace(/<br\s*\/?>/gi, " ")
            .replace(/<[^>]+>/g, "");
        var rawText = rawHTML.replace(/\s+/g, " ").trim();

        el.innerHTML = "";

        rawText.split(" ").forEach(function (w) {
            if (!w) return;
            var span = document.createElement("span");
            span.className = "word";
            span.textContent = w;
            el.appendChild(span);
            el.appendChild(document.createTextNode(" "));
        });

        el.dataset.wordReady = "true";
    }

    var sectionTitleTargets = gsap.utils.toArray(
        '.works__head h2, .pink-benefits__head h2, .aboutme__headline, .cta-block__title, .section-head h2:not(.cases-marquee__title), .approach__head h2'
    );

    sectionTitleTargets.forEach(function (titleEl) {
        wrapHeadingWords(titleEl);
        var words = titleEl.querySelectorAll('.word');
        if (!words.length) return;

        gsap.fromTo(words,
            { color: "rgba(244,244,245,0.1)", y: "0.35em", rotate: 2 },
            {
                scrollTrigger: {
                    trigger: titleEl,
                    start: "top 82%",
                    once: true
                },
                color: "#f4f4f5",
                y: 0,
                rotate: 0,
                duration: 1.0,
                stagger: 0.1,
                ease: "power3.out"
            }
        );
    });

    // 7. Split â€œWho we areâ€ into words and animate (and any .text-split usage)
    var splitElements = gsap.utils.toArray('#aboutSplit, .text-split');
    
    splitElements.forEach(function(el) {
        var raw = el.textContent.replace(/\s+/g, " ").trim();
        el.textContent = "";
        
        var words = raw.split(" ");
        words.forEach(function (w) {
            var span = document.createElement("span");
            span.className = "word";
            span.innerHTML = w + "&nbsp;";
            el.appendChild(span);
        });

        gsap.fromTo(el.querySelectorAll('.word'),
            { opacity: 0.08, y: "0.35em", rotate: 2 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    once: true
                },
                opacity: 1,
                y: 0,
                rotate: 0,
                duration: 0.8,
                stagger: 0.04,
                ease: "power3.out"
            }
        );
    });

    // 8. Stats Count-up replacing observer
    function animateValue(el, target, duration, suffix) {
        var start = 0;
        var startTime = null;
        suffix = suffix || "";

        function step(ts) {
            if (!startTime) startTime = ts;
            var p = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = Math.round(start + (target - start) * eased);
            el.textContent = String(val) + suffix;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    var statsSection = document.getElementById("stats");
    if (statsSection) {
        ScrollTrigger.create({
            trigger: statsSection,
            start: "top 75%",
            once: true,
            onEnter: () => {
                document.querySelectorAll(".showcase-metric[data-target]").forEach((el, idx) => {
                    var target = parseInt(el.getAttribute("data-target"), 10);
                    var suffix = el.getAttribute("data-suffix") || "";
                    if (isNaN(target)) return;
                    setTimeout(() => {
                        animateValue(el, target, 1400, suffix);
                    }, idx * 150);
                });
            }
        });
    }

    // Header logic
    var header = document.querySelector(".header");
    var menuBtn = document.getElementById("menuBtn");
    var nav = document.getElementById("nav");
    var yearEl = document.getElementById("year");

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Mark active header nav item based on current page
    if (nav) {
        var currentPath = window.location.pathname.split('/').pop() || 'home.html';
        nav.querySelectorAll("a[href]").forEach(function (link) {
            var href = link.getAttribute("href");
            if (!href || href.charAt(0) === "#") return;
            var target = href.split('/').pop();
            if (target === currentPath) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function onScroll() {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            menuBtn.classList.toggle("is-open", open);
            menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
            if(open) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function (e) {
                const target = document.querySelector(this.getAttribute("href"));
                if(target) {
                    e.preventDefault();
                    lenis.scrollTo(target);
                }
                nav.classList.remove("is-open");
                menuBtn.classList.remove("is-open");
                menuBtn.setAttribute("aria-expanded", "false");
                lenis.start();
            });
        });
    }

    // Parallax elements
    gsap.utils.toArray('.showcase-visual').forEach(visual => {
        gsap.to(visual, {
            y: -40,
            scrollTrigger: {
                trigger: visual.closest('.showcase-card'),
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Parallax media on About page (and any .parallax-media)
    gsap.utils.toArray('.parallax-media').forEach(media => {
        if (media.classList.contains('parallax-media--deep')) return;
        if (media.closest('.philosophy-video')) return;
        var parent = media.closest('figure') || media.parentElement;
        gsap.to(media, {
            y: -30,
            scrollTrigger: {
                trigger: parent,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    (function initPhilosophyVideoFx() {
        var wrap = document.querySelector(".philosophy-video");
        var media = wrap ? wrap.querySelector(".philosophy-video__media--fx") : null;
        if (!wrap || !media) return;

        gsap.fromTo(wrap, { autoAlpha: 0, y: 16 }, {
            autoAlpha: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: wrap,
                start: "top 82%"
            }
        });

        /* Single-axis parallax on video only; keep scale in tween so GSAP does not strip CSS overscan */
        gsap.fromTo(media, { y: 12, scale: 1.1 }, {
            y: -12,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.85
            }
        });
    })();

    gsap.utils.toArray('.parallax-media--deep').forEach(media => {
        var parent = media.closest('figure') || media.parentElement;
        gsap.fromTo(media, { y: 28, scale: 1.06 }, {
            y: -42,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
                trigger: parent,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.65
            }
        });
    });

    (function initExpertiseSectionMotion() {
        var sec = document.querySelector(".expertise-process");
        if (!sec) return;

        var left = sec.querySelector(".expertise-process__col--left");
        var right = sec.querySelector(".expertise-process__col--right");
        if (left) {
            gsap.fromTo(left, { y: 56 }, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: sec,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.1
                }
            });
        }
        if (right) {
            gsap.fromTo(right, { y: -32 }, {
                y: 48,
                ease: "none",
                scrollTrigger: {
                    trigger: sec,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.1
                }
            });
        }

        var rail = sec.querySelector(".timeline--rail");
        var lineFill = rail ? rail.querySelector(".timeline__line-fill") : null;
        if (lineFill && rail) {
            gsap.fromTo(lineFill, { scaleY: 0 }, {
                scaleY: 1,
                ease: "none",
                transformOrigin: "top center",
                scrollTrigger: {
                    trigger: rail,
                    start: "top 78%",
                    end: "bottom 45%",
                    scrub: 0.35
                }
            });
        }

        var stack = sec.querySelector(".timeline__stack");
        if (stack) {
            gsap.fromTo(stack.querySelectorAll(".timeline-item"),
                { autoAlpha: 0, x: -24 },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.95,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: stack,
                        start: "top 86%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    })();

    // Testimonial slider
    var track = document.getElementById("testimonialTrack");
    var dotsWrap = document.getElementById("testimonialDots");
    var testimonials = track ? track.querySelectorAll(".testimonial") : [];
    var current = 0;
    var slideCount = testimonials.length;

    function goToSlide(index) {
        if (!track || slideCount === 0) return;
        current = (index + slideCount) % slideCount;
        track.style.transform = "translateX(-" + current * 100 + "%)";
        if (dotsWrap) {
            dotsWrap.querySelectorAll("button").forEach(function (btn, i) {
                btn.classList.toggle("is-active", i === current);
            });
        }
    }

    if (dotsWrap && slideCount > 0) {
        for (var j = 0; j < slideCount; j++) {
            var dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", "Slide " + (j + 1));
            if (j === 0) dot.classList.add("is-active");
            (function (idx) {
                dot.addEventListener("click", function () { goToSlide(idx); });
            })(j);
            dotsWrap.appendChild(dot);
        }
        var auto = setInterval(function () { goToSlide(current + 1); }, 5500);
        track.addEventListener("mouseenter", function () { clearInterval(auto); });
        track.addEventListener("mouseleave", function () { auto = setInterval(function () { goToSlide(current + 1); }, 5500); });
    }

    // Works page filter: Industry + Service
    (function initWorksDualFilter() {
        var filtersWrap = document.getElementById("worksFilters");
        var worksGrid = document.getElementById("worksGrid");
        if (!filtersWrap || !worksGrid) return;

        var industryBtns = filtersWrap.querySelectorAll('.works__tab[data-filter-group="industry"][data-filter-value]');
        var industryFilters = document.getElementById("worksIndustryFilters");
        var serviceDropdown = document.getElementById("worksServiceDropdown");
        var serviceTrigger = document.getElementById("worksServiceTrigger");
        var serviceMenu = document.getElementById("worksServiceMenu");
        var serviceLabel = document.getElementById("worksServiceLabel");
        var serviceOptions = serviceMenu ? serviceMenu.querySelectorAll(".works__service-option[data-service-value]") : [];
        var active = { industry: "all", service: "all" };

        function getCards() {
            return worksGrid.querySelectorAll(".work-card");
        }

        function filterCards() {
            var cards = getCards();
            var delay = 0;
            cards.forEach(function (card) {
                var industry = card.getAttribute("data-industry") || "";
                var services = (card.getAttribute("data-service") || "").split(/\s+/);
                var matchIndustry = active.industry === "all" || industry === active.industry;
                var matchService = active.service === "all" || services.indexOf(active.service) !== -1;
                var show = matchIndustry && matchService;
                card.classList.remove("is-visible-anim");
                if (show) {
                    card.classList.remove("is-hidden");
                    setTimeout(function () { card.classList.add("is-visible-anim"); }, delay);
                    delay += 60;
                } else {
                    card.classList.add("is-hidden");
                }
            });
        }

        industryBtns.forEach(function (btn) {
            if (btn.dataset.filterBound === "true") return;
            btn.dataset.filterBound = "true";
            btn.addEventListener("click", function () {
                var group = btn.getAttribute("data-filter-group");
                var value = btn.getAttribute("data-filter-value") || "all";
                if (!group) return;

                filtersWrap
                    .querySelectorAll('.works__tab[data-filter-group="' + group + '"]')
                    .forEach(function (item) {
                        item.classList.remove("is-active");
                    });

                btn.classList.add("is-active");
                active[group] = value;
                filterCards();
            });
        });

        if (industryFilters) {
            var industryFadeBlock = industryFilters.closest(".works__filter-block");
            var isDown = false;
            var startX = 0;
            var scrollLeft = 0;
            var moved = false;

            function updateIndustryEdgeFade() {
                if (!industryFadeBlock) return;
                var maxScroll = industryFilters.scrollWidth - industryFilters.clientWidth;
                if (maxScroll <= 1) {
                    industryFadeBlock.classList.remove("has-left-fade");
                    industryFadeBlock.classList.remove("has-right-fade");
                    return;
                }
                var x = industryFilters.scrollLeft;
                industryFadeBlock.classList.toggle("has-left-fade", x > 2);
                industryFadeBlock.classList.toggle("has-right-fade", x < (maxScroll - 2));
            }

            industryFilters.addEventListener("mousedown", function (e) {
                isDown = true;
                moved = false;
                industryFilters.classList.add("is-dragging");
                startX = e.pageX - industryFilters.offsetLeft;
                scrollLeft = industryFilters.scrollLeft;
            });

            industryFilters.addEventListener("mouseleave", function () {
                isDown = false;
                industryFilters.classList.remove("is-dragging");
            });

            industryFilters.addEventListener("mouseup", function () {
                isDown = false;
                industryFilters.classList.remove("is-dragging");
            });

            industryFilters.addEventListener("mousemove", function (e) {
                if (!isDown) return;
                e.preventDefault();
                var x = e.pageX - industryFilters.offsetLeft;
                var walk = (x - startX) * 1.1;
                if (Math.abs(walk) > 2) moved = true;
                industryFilters.scrollLeft = scrollLeft - walk;
                updateIndustryEdgeFade();
            });

            industryFilters.addEventListener("scroll", updateIndustryEdgeFade, { passive: true });
            window.addEventListener("resize", updateIndustryEdgeFade);

            industryFilters.querySelectorAll(".works__tab").forEach(function (btn) {
                btn.addEventListener("click", function (e) {
                    if (moved) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            });

            document.addEventListener("works:grid-updated", updateIndustryEdgeFade);
            updateIndustryEdgeFade();
        }

        function closeServiceMenu() {
            if (!serviceTrigger || !serviceMenu) return;
            serviceMenu.classList.remove("is-open");
            serviceTrigger.classList.remove("is-open");
            serviceTrigger.setAttribute("aria-expanded", "false");
        }

        function openServiceMenu() {
            if (!serviceTrigger || !serviceMenu) return;
            serviceMenu.classList.add("is-open");
            serviceTrigger.classList.add("is-open");
            serviceTrigger.setAttribute("aria-expanded", "true");
        }

        function setServiceValue(value, labelText) {
            active.service = value || "all";
            if (serviceLabel) serviceLabel.textContent = labelText || "All Services";
            serviceOptions.forEach(function (option) {
                var isActive = (option.getAttribute("data-service-value") || "all") === active.service;
                option.classList.toggle("is-active", isActive);
                option.setAttribute("aria-selected", isActive ? "true" : "false");
            });
            filterCards();
        }

        if (serviceTrigger && serviceMenu) {
            serviceTrigger.addEventListener("click", function () {
                if (serviceMenu.classList.contains("is-open")) {
                    closeServiceMenu();
                } else {
                    openServiceMenu();
                }
            });

            serviceOptions.forEach(function (option) {
                option.addEventListener("click", function () {
                    setServiceValue(
                        option.getAttribute("data-service-value") || "all",
                        option.textContent.trim()
                    );
                    closeServiceMenu();
                });
            });

            document.addEventListener("click", function (event) {
                if (!serviceDropdown) return;
                if (serviceDropdown.contains(event.target)) return;
                closeServiceMenu();
            });

            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") closeServiceMenu();
            });
        }

        function syncActiveFromUI() {
            var activeBtn = filtersWrap.querySelector('.works__tab.is-active[data-filter-group="industry"]');
            active.industry = activeBtn ? (activeBtn.getAttribute("data-filter-value") || "all") : "all";
            var activeServiceOption = serviceMenu ? serviceMenu.querySelector(".works__service-option.is-active") : null;
            active.service = activeServiceOption ? (activeServiceOption.getAttribute("data-service-value") || "all") : "all";
            if (serviceLabel && activeServiceOption) {
                serviceLabel.textContent = activeServiceOption.textContent.trim();
            }
        }

        document.addEventListener("works:grid-updated", function () {
            syncActiveFromUI();
            filterCards();
        });

        syncActiveFromUI();
        filterCards();
    })();

    // Stacked work cards scroll effect
    (function () {
        var panels = gsap.utils.toArray('#projPanels .proj-item');
        if (!panels || panels.length < 2) return;

        panels.forEach(function (panel, i) {
            // Each card (except the last) scales down as the next card stacks over it
            if (i < panels.length - 1) {
                gsap.to(panel, {
                    scale: 0.94,
                    opacity: 0.75,
                    borderRadius: '28px',
                    scrollTrigger: {
                        trigger: panels[i + 1],
                        start: 'top 85%',
                        end: 'top top',
                        scrub: 0.8,
                    }
                });
            }
        });
    })();

    // Magnetic button effect
    const magnetBtns = document.querySelectorAll('.header__btn-contact, .cta-form__submit');

    magnetBtns.forEach(btn => {
        const isContact = btn.classList.contains('header__btn-contact');
        const hoverShadow = isContact
            ? '0 12px 30px rgba(255,255,255,0.15)'
            : '0 12px 30px rgba(255,157,222,0.25)';

        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                boxShadow: hoverShadow,
                duration: 0.25,
                ease: 'power2.out',
            });
        });

        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.35;
            const dy = (e.clientY - cy) * 0.35;
            gsap.to(btn, {
                x: dx,
                y: dy,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                boxShadow: '0 0px 0px rgba(0,0,0,0)',
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
            });
        });
    });

})();


