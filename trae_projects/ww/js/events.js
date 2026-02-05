document.addEventListener("DOMContentLoaded", function () {
    var data = [
        { title: "Thursday Terrace", date: "2025-11-20", time: "21:00", tag: "Terrace", djs: "Resident DJ", desc: "Teras outdoor dengan ambience rooftop.", image: "https://images.unsplash.com/photo-1570701955355-6bd69493f0b2?q=80&w=800" },
        { title: "Neon Pulse", date: "2025-10-24", time: "22:00", tag: "Nightclub", djs: "DJ X-Ray", desc: "Malam penuh warna dengan visual neon futuristik.", image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800" },
        { title: "Chef's Table", date: "2025-11-22", time: "19:00", tag: "Restaurant", djs: "", desc: "Kreasi menu kontemporer dengan wine pairing.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800" },
        { title: "Weekend Vibes", date: "2025-10-25", time: "22:30", tag: "Nightclub", djs: "Guest Star", desc: "Malam minggu terbaik di Medan.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" },
        { title: "Deseo Latin", date: "2025-10-26", time: "20:00", tag: "Nightclub", djs: "Latin Beats", desc: "Dansa Latin sepanjang malam.", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800" }
    ];
    var grid = document.getElementById("eventsGrid");
    function render(list) {
        grid.innerHTML = ""; list.forEach(function (ev) {
            var card = document.createElement("div"); card.className = "event-card"; card.innerHTML =
                "<div style='height: 220px; background-image:url(\"" + ev.image + "\"); background-size:cover; margin-bottom:15px; border-radius:4px;'></div>" +
                "<div class=ec-meta>" + new Date(ev.date).toLocaleDateString("id-ID", { day: "2-digit", month: "short" }) + " • " + ev.time + " • " + ev.tag + "</div>" +
                "<div class=ec-title>" + ev.title + "</div>" +
                "<div class=ec-desc>" + ev.desc + "</div>" +
                "<div class=ec-djs>" + (ev.djs ? "Lineup: " + ev.djs : "") + "</div>" +
                "<div class=ec-actions><a href=reservation.html class='btn btn-outline' style='width:100%'>RSVP</a></div>";
            grid.appendChild(card)
        });
    }
    render(data);
    var tags = document.querySelectorAll(".tag");
    tags.forEach(function (t) { t.addEventListener("click", function () { var k = t.getAttribute("data-tag"); var q = document.getElementById("evSearch").value.trim().toLowerCase(); var list = data.filter(function (ev) { var ok = k === "all" || ev.tag === k; var s = (ev.title + " " + ev.desc + " " + ev.djs).toLowerCase().includes(q); return ok && s }); render(list) }) });
    var search = document.getElementById("evSearch");
    search.addEventListener("input", function () { var k = document.querySelector(".tag.active"); var tag = k ? k.getAttribute("data-tag") : "all"; var q = search.value.trim().toLowerCase(); var list = data.filter(function (ev) { var ok = tag === "all" || ev.tag === tag; var s = (ev.title + " " + ev.desc + " " + ev.djs).toLowerCase().includes(q); return ok && s }); render(list) });
    document.querySelector(".tag[data-tag='all']").classList.add("active");
    document.querySelectorAll(".tag").forEach(function (b) { b.addEventListener("click", function () { document.querySelectorAll(".tag").forEach(function (x) { x.classList.remove("active") }); b.classList.add("active") }) });
});