// LA MAR — Pesca del Puerto | demo interactions (sin dependencias)
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileNav();
    initCatalogFilter();
    initContactForm();
    initFooterYear();
  });

  function initHeaderScroll() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav-main]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.innerHTML = isOpen
        ? '<svg class="icon"><use href="assets/img/icons.svg#icon-close"></use></svg>'
        : '<svg class="icon"><use href="assets/img/icons.svg#icon-menu"></use></svg>';
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<svg class="icon"><use href="assets/img/icons.svg#icon-menu"></use></svg>';
      });
    });
  }

  function initCatalogFilter() {
    var buttons = document.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll("[data-category]");
    if (!buttons.length || !items.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");

        items.forEach(function (item) {
          var match = filter === "todos" || item.getAttribute("data-category") === filter;
          item.style.display = match ? "" : "none";
        });
      });
    });
  }

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var success = document.querySelector("[data-form-success]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.reset();
      if (success) {
        success.classList.add("show");
        success.setAttribute("tabindex", "-1");
        success.focus({ preventScroll: false });
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  function initFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }
})();
