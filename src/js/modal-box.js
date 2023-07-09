export default function info(btnBox) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnBox)) {
        document.querySelector(".modalbox_container").style.transform=""
      setTimeout(() => {
        document.querySelector(".modalbox").classList.remove("box");
        document.querySelector(".modalbox").classList.toggle("is-active");
        document
          .querySelector(".modalbox_container")
          .classList.remove("glass-effect");
        document
          .querySelector(".modalbox_container")
          .classList.toggle("is-active");
      }, "350");
    }
  });
}
// document.querySelectorAll("[data-box]").classList.remove(".modalbox_container");
// document.querySelectorAll("[data-box]").classList.remove(".modalbox");
