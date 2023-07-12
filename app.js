import hamburgerMenu from "./src/js/menu.js";
import cards from "./src/js/projects.js";
import { sendEmail } from "./src/js/send-msj.js";
import info from "./src/js/modal-box.js"
import showBox from "./src/js/show-box.js";
// import FormValidation from "./js/form-validation.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".show-icon",".close-icon", ".menu a");
  info(".modalbox_btn");
  // console.log(cards(cardsInfo));
  
  const $fetch = "./db.json";
  fetch($fetch)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((son) => {
      return cards(son);
    })
    .catch((err) => {
      console.log(err);
    });
});

const sendMessage = document.querySelector(".contactme_submit"),
  inputForm = document.querySelector(".contactme_form");

sendMessage.addEventListener("click", (e) => {
  const camposRequeridos = inputForm.querySelectorAll("[required]"),
    email = inputForm.email.value;

  let formularioValido = true;

  for (const campo of camposRequeridos) {
    if (!campo.value) {
      formularioValido = false;
      break;
    }

  }

  // Enviar el formulario si es válido
  if (formularioValido ) {
    e.preventDefault();
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
      sendEmail();
     } else {

      showBox(".modalbox_info","Por favor, ingresar un formato de email valido.");

      // document.querySelector(".modalbox").classList.toggle("box");
      // document.querySelector(".modalbox").classList.remove("is-active");
      // document.querySelector(".modalbox_container").classList.toggle("glass-effect")
      // document.querySelector(".modalbox_container").classList.remove("is-active");
     }
  }else {
    showBox(".modalbox_info","Por favor, ingresar los campos requeridos.");
  }
});
