document.addEventListener("DOMContentLoaded", function () {

  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var phone = document.getElementById("f-phone").value.trim();
      var message = document.getElementById("f-message").value.trim();

      var subject = "Interes proyecto solar Prado de Somosaguas - " + name;
      var bodyLines = [
        "Nombre y local: " + name,
        "Email: " + email,
        "Telefono: " + (phone || "No indicado"),
        "",
        message
      ];
      var mailto = "mailto:info@smartfot.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
      status.textContent = "Abriendo tu cliente de correo para enviar la solicitud a info@smartfot.com...";
    });
  }

  var cookieBanner = document.getElementById("cookie-banner");
  var cookieAccept = document.getElementById("cookie-accept");
  var cookieReject = document.getElementById("cookie-reject");
  var COOKIE_KEY = "smartfot_cookie_choice";

  if (cookieBanner) {
    var stored = null;
    try { stored = localStorage.getItem(COOKIE_KEY); } catch (err) { stored = null; }
    if (!stored) {
      cookieBanner.hidden = false;
    }
    if (cookieAccept) {
      cookieAccept.addEventListener("click", function () {
        try { localStorage.setItem(COOKIE_KEY, "accepted"); } catch (err) {}
        cookieBanner.hidden = true;
      });
    }
    if (cookieReject) {
      cookieReject.addEventListener("click", function () {
        try { localStorage.setItem(COOKIE_KEY, "rejected"); } catch (err) {}
        cookieBanner.hidden = true;
      });
    }
  }

});
