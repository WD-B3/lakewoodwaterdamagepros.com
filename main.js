(function () {
  var t = document.querySelector(".nav-toggle");
  var m = document.getElementById("mainmenu");
  if (t && m) {
    t.addEventListener("click", function () {
      var open = m.classList.toggle("open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && m.classList.contains("open")) {
        m.classList.remove("open");
        t.setAttribute("aria-expanded", "false");
        t.focus();
      }
    });
  }
})();
