document.addEventListener("DOMContentLoaded", function () {
    var items = window.galleryData || [];
    var grid = document.getElementById("galGrid");
    function render(list) { grid.innerHTML = ""; list.forEach(function (it) { var a = document.createElement("a"); a.className = "gallery-item"; a.style.backgroundImage = "url('" + it.src + "')"; a.href = "#"; a.dataset.cap = it.cap; a.dataset.src = it.src; grid.appendChild(a) }) }
    render(items);
    document.querySelectorAll(".tag").forEach(function (b) { b.addEventListener("click", function () { document.querySelectorAll(".tag").forEach(function (x) { x.classList.remove("active") }); b.classList.add("active"); var k = b.getAttribute("data-k"); var list = k === "all" ? items : items.filter(function (i) { return i.k === k }); render(list) }) });
    var lb = document.getElementById("lightbox"), img = document.getElementById("lbImg"), cap = document.getElementById("lbCap"), close = document.getElementById("lbClose"), insta = document.getElementById("lbInsta");
    grid.addEventListener("click", function (e) { var el = e.target.closest(".gallery-item"); if (!el) return; e.preventDefault(); img.src = el.dataset.src; cap.textContent = el.dataset.cap; lb.classList.add("open"); insta.href = (window.config ? config.SOCIAL.instagram : "#") });
    close.addEventListener("click", function () { lb.classList.remove("open") });
});