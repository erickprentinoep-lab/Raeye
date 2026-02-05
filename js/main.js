document.addEventListener("DOMContentLoaded", function () {
    var t = document.querySelector(".nav-toggle"), n = document.querySelector(".menu");
    if (t && n) { t.addEventListener("click", function () { n.classList.toggle("open") }) }
    var e = document.querySelectorAll(".social-row a"), o = document.querySelectorAll(".social-col a");
    function r(a) { if (!window.config) return; var i = { ig: config.SOCIAL.instagram, tt: config.SOCIAL.tiktok, fb: config.SOCIAL.facebook, yt: config.SOCIAL.youtube }; a.forEach(function (c) { var s = c.id.replace("-f", ""), l = i[s]; if (l) { c.href = l } }) }
    r(e); r(o);
    var d = document.querySelectorAll(".section, .gallery-item, .media-card, .rating-card");
    var u = new IntersectionObserver(function (a) { a.forEach(function (i) { if (i.isIntersecting) { i.target.style.transition = "transform .6s ease, opacity .6s ease"; i.target.style.transform = "translateY(0)"; i.target.style.opacity = 1 } }) }, { threshold: .08 });
    d.forEach(function (a) { a.style.transform = "translateY(10px)"; a.style.opacity = .004; u.observe(a) });
});