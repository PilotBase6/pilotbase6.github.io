export default function hamburgerMenu(panelBtn, panel, show, close, menuLink) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      document.querySelector(panel).classList.toggle("is-active");
      document.querySelector(panelBtn).classList.toggle("is-active");
      if (document.querySelector(show).classList.contains("visible")) {
        document.querySelector(show).classList.remove("visible");
        document.querySelector(show).classList.add("hidden");
        document.querySelector(close).classList.add("visible");
        document.querySelector(close).classList.remove("hidden");
      } else {
        document.querySelector(show).classList.add("visible");
        document.querySelector(show).classList.remove("hidden");
        document.querySelector(close).classList.remove("visible");
        document.querySelector(close).classList.add("hidden");
      }
    }
    if (e.target.matches(menuLink)) {
      document.querySelector(panel).classList.remove("is-active");
      document.querySelector(panelBtn).classList.remove("is-active");
      document.querySelector(show).classList.add("visible");
      document.querySelector(show).classList.remove("hidden");
      document.querySelector(close).classList.remove("visible");
      document.querySelector(close).classList.add("hidden");
    }
  });
}
