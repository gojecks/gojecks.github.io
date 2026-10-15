// jeli docs - tiny, dependency-free helper for the sidebar-nav pages
// (guide/api): mobile sidebar toggle + scroll-spy active-link highlight.
(function () {
    var toggle = document.querySelector('[data-menu-toggle]');
    var sidebar = document.querySelector('.docs-sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }

    var links = Array.prototype.slice.call(document.querySelectorAll('.docs-sidebar a[href^="#"]'));
    if (!links.length) return;

    var sections = links
        .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
        .filter(Boolean);

    function onScroll() {
        var pos = window.scrollY + 96;
        var current = sections[0];
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].offsetTop <= pos) current = sections[i];
        }
        links.forEach(function (a) {
            a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id);
        });
        if (sidebar) sidebar.classList.remove('open');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
