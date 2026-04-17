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

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Wrap text for mask animations in Hero
    document.querySelectorAll(".hero__line").forEach((line) => {
        const text = line.innerHTML;
        line.innerHTML = `<span class="hero__mask"><span class="hero__text">${text}</span></span>`;
    });

    // 3. Hero GSAP Timeline
    const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial setups for elements we will animate
    gsap.set(".hero__text", { yPercent: 120, rotate: 2, opacity: 0 });
    gsap.set([".hero__eyebrow", ".hero__desc", ".hero__actions", ".hero__social"], { autoAlpha: 0, y: 20 });

    heroTimeline
        .to(".hero__eyebrow", { autoAlpha: 1, y: 0, duration: 1 }, 0.2)
        .to(".hero__text", { yPercent: 0, rotate: 0, opacity: 1, duration: 1.4, stagger: 0.15 }, "-=0.8")
        .to(".hero__desc", { autoAlpha: 1, y: 0, duration: 1 }, "-=1")
        .to([".hero__actions", ".hero__social"], { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1 }, "-=0.8");

    // 4. Scroll Reveal Animations (Replacing intersection Observer)
    gsap.utils.toArray('.reveal').forEach((elem) => {
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

    // 6. Section Titles Animations
    gsap.utils.toArray('.title-anim').forEach((title) => {
        gsap.fromTo(title,
            { y: "1em", opacity: 0 },
            {
                scrollTrigger: {
                    trigger: title.closest('.section-head') || title,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1
            }
        );
    });

    // 7. Split “Who we are” into words and animate (and any .text-split usage)
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
        var currentPath = window.location.pathname.split('/').pop() || 'index.html';
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

        gsap.fromTo(wrap, { autoAlpha: 0, y: 26 }, {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: wrap,
                start: "top 82%"
            }
        });

        // Strong cinematic parallax (intentionally high amplitude)
        gsap.fromTo(wrap, { y: 30 }, {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.45
            }
        });

        gsap.fromTo(media, { y: 110, scale: 1.34 }, {
            y: -110,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.35
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

    // Project category filter
    var tabsNav = document.getElementById("worksTabs");
    var worksGrid = document.getElementById("worksGrid");
    if (tabsNav && worksGrid) {
        var tabBtns = tabsNav.querySelectorAll(".works__tab");
        var cards = worksGrid.querySelectorAll(".work-card");

        function filterCards(filter) {
            var delay = 0;
            cards.forEach(function (card) {
                var cat = card.getAttribute("data-category");
                var show = (filter === "all" || cat === filter);
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

        tabBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                tabBtns.forEach(function (b) {
                    b.classList.remove("is-active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("is-active");
                btn.setAttribute("aria-selected", "true");
                filterCards(btn.getAttribute("data-filter"));
            });
        });
        filterCards("all");
    }

    // Stacked project cards scroll effect
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

})();

