(function () {
    "use strict";

    var header = document.querySelector(".header");
    var menuBtn = document.getElementById("menuBtn");
    var nav = document.getElementById("nav");
    var yearEl = document.getElementById("year");
    var track = document.getElementById("testimonialTrack");
    var dotsWrap = document.getElementById("testimonialDots");
    var ctaForm = document.getElementById("ctaForm");
    var aboutSplit = document.getElementById("aboutSplit");

    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
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
            document.body.style.overflow = open ? "hidden" : "";
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("is-open");
                menuBtn.classList.remove("is-open");
                menuBtn.setAttribute("aria-expanded", "false");
                document.body.style.overflow = "";
            });
        });
    }

    /* Split “Who we are” into characters (demo-style) */
    if (aboutSplit && aboutSplit.hasAttribute("data-split")) {
        var raw = aboutSplit.textContent.trim();
        aboutSplit.textContent = "";
        var ci = 0;
        for (var i = 0; i < raw.length; i++) {
            var ch = raw[i];
            var span = document.createElement("span");
            span.className = "char";
            span.style.setProperty("--ci", String(ci));
            if (ch === " ") {
                span.innerHTML = "&nbsp;";
            } else {
                span.textContent = ch;
            }
            aboutSplit.appendChild(span);
            ci++;
        }
    }

    /* Count-up with optional progress bar (synced with number) */
    function animateValue(el, target, duration, suffix, barEl, onDone) {
        var start = 0;
        var startTime = null;
        suffix = suffix || "";
        if (typeof barEl === "function" && onDone === undefined) {
            onDone = barEl;
            barEl = null;
        }

        function step(ts) {
            if (!startTime) startTime = ts;
            var p = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = Math.round(start + (target - start) * eased);
            el.textContent = String(val) + suffix;
            if (barEl) {
                var maxW = parseFloat(barEl.getAttribute("data-fill") || String(target));
                if (!isNaN(maxW)) {
                    barEl.style.width = (val / target) * maxW + "%";
                }
            }
            if (p < 1) {
                requestAnimationFrame(step);
            } else if (typeof onDone === "function") {
                onDone();
            }
        }

        requestAnimationFrame(step);
    }

    var statsAnimated = false;
    var statNums = document.querySelectorAll(".showcase-metric[data-target]");

    var statsObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting || statsAnimated) return;
                statsAnimated = true;

                statNums.forEach(function (el, idx) {
                    var target = parseInt(el.getAttribute("data-target"), 10);
                    var suffix = el.getAttribute("data-suffix") || "";
                    if (isNaN(target)) return;

                    window.setTimeout(function () {
                        animateValue(el, target, 1400, suffix, null, null);
                    }, idx * 110);
                });
            });
        },
        { threshold: 0.25 }
    );

    var statsSection = document.getElementById("stats");
    if (statsSection) statsObserver.observe(statsSection);

    /* Scroll reveal */
    document.querySelectorAll(".reveal").forEach(function (el) {
        var obs = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );
        obs.observe(el);
    });

    /* Testimonial slider */
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
                dot.addEventListener("click", function () {
                    goToSlide(idx);
                });
            })(j);
            dotsWrap.appendChild(dot);
        }

        var auto = setInterval(function () {
            goToSlide(current + 1);
        }, 5500);

        track.addEventListener("mouseenter", function () {
            clearInterval(auto);
        });
        track.addEventListener("mouseleave", function () {
            auto = setInterval(function () {
                goToSlide(current + 1);
            }, 5500);
        });
    }

    if (ctaForm) {
        ctaForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var input = ctaForm.querySelector('input[type="email"]');
            if (input && input.value) {
                alert("Thanks — this is a static demo; wire a backend to send real email.");
            }
        });
    }

    /* ── Project category tab filter ── */
    var tabsNav   = document.getElementById("worksTabs");
    var worksGrid = document.getElementById("worksGrid");

    if (tabsNav && worksGrid) {
        var tabBtns = tabsNav.querySelectorAll(".works__tab");
        var cards   = worksGrid.querySelectorAll(".work-card");

        function filterCards(filter) {
            var delay = 0;
            cards.forEach(function (card) {
                var cat = card.getAttribute("data-category");
                var show = (filter === "all" || cat === filter);

                // Remove animation class before toggling visibility
                card.classList.remove("is-visible-anim");

                if (show) {
                    card.classList.remove("is-hidden");
                    // Stagger the reveal animation
                    (function (el, d) {
                        setTimeout(function () {
                            el.classList.add("is-visible-anim");
                        }, d);
                    })(card, delay);
                    delay += 60;
                } else {
                    card.classList.add("is-hidden");
                }
            });
        }

        tabBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                // Update tab states
                tabBtns.forEach(function (b) {
                    b.classList.remove("is-active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("is-active");
                btn.setAttribute("aria-selected", "true");

                filterCards(btn.getAttribute("data-filter"));
            });
        });

        // Apply "All" on load so animation classes are primed
        filterCards("all");
    }

})();
