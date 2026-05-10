/* ================================================
   Work Detail â€” Scroll Spy TOC + Copy Link
   ================================================ */

(function () {
    'use strict';

    /* â”€â”€ Scroll spy â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    function initScrollSpy() {
        const links = Array.from(document.querySelectorAll('.cs-toc__link[href^="#"]'));
        if (!links.length) return;

        const sections = links.map(link => {
            const id = link.getAttribute('href').slice(1);
            return document.getElementById(id);
        }).filter(Boolean);

        if (!sections.length) return;

        let activeIndex = -1;

        function setActive(index) {
            if (index === activeIndex) return;
            activeIndex = index;
            links.forEach((link, i) => {
                link.classList.toggle('is-active', i === index);
            });
        }

        function onScroll() {
            const scrollY = window.scrollY;
            const windowH = window.innerHeight;
            const offset = windowH * 0.35;

            let current = 0;
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                const top = rect.top + scrollY;
                if (scrollY + offset >= top) {
                    current = i;
                }
            }
            setActive(current);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* Smooth scroll handled in main.js via Lenis */
    function initTocSmooth() {}

    /* â”€â”€ Copy link button â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    function initCopyLink() {
        const btn = document.getElementById('copyLinkBtn');
        if (!btn) return;
        btn.addEventListener('click', function () {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const origColor = btn.style.color;
                btn.style.color = 'var(--accent)';
                btn.setAttribute('aria-label', 'Link copied!');
                setTimeout(() => {
                    btn.style.color = origColor;
                    btn.setAttribute('aria-label', 'Copy link');
                }, 2000);
            }).catch(() => {
                /* clipboard not available â€” silent fail */
            });
        });
    }

    /* â”€â”€ GSAP title animation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    function initHeroTitle() {
        if (typeof gsap === 'undefined') return;
        const spans = document.querySelectorAll('.cs-hero__title .title-anim');
        if (!spans.length) return;
        gsap.from(spans, {
            y: 60,
            opacity: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.15,
            delay: 0.15
        });
        const sub = document.querySelector('.cs-hero__sub');
        const crumb = document.querySelector('.cs-hero__crumb');
        const tags = document.querySelector('.cs-hero__tags');
        if (sub || crumb || tags) {
            gsap.from([crumb, tags, sub].filter(Boolean), {
                y: 24,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                stagger: 0.1,
                delay: 0.4
            });
        }
    }

    /* â”€â”€ GSAP reveal for cs-entry sections â”€â”€â”€â”€â”€â”€ */
    function initEntryReveal() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        document.querySelectorAll('.cs-entry').forEach(entry => {
            gsap.from(entry, {
                opacity: 0,
                y: 32,
                duration: 0.85,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: entry,
                    start: 'top 88%',
                    once: true
                }
            });
        });
    }

    /* â”€â”€ Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    /* -- TOC sliding indicator ----------------------------- */
    function initTocIndicator() {
        const indicator = document.querySelector('.cs-toc__indicator');
        if (!indicator) return;

        function updateIndicator() {
            const active = document.querySelector('.cs-toc__link.is-active');
            if (!active) return;
            const nav = active.closest('.cs-toc__nav');
            if (!nav) return;
            const navTop = nav.getBoundingClientRect().top;
            const linkRect = active.getBoundingClientRect();
            indicator.style.transform = `translateY(${linkRect.top - navTop}px)`;
            indicator.style.height = `${linkRect.height}px`;
            indicator.classList.add('is-ready');
        }

        requestAnimationFrame(() => requestAnimationFrame(updateIndicator));

        document.querySelectorAll('.cs-toc__link').forEach(link => {
            new MutationObserver(updateIndicator)
                .observe(link, { attributes: true, attributeFilter: ['class'] });
        });

        window.addEventListener('resize', updateIndicator, { passive: true });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initScrollSpy();
        initTocSmooth();
        initTocIndicator();
        initCopyLink();
        initHeroTitle();
        initEntryReveal();
    });
})();

