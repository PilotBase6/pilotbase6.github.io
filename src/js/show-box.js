

export default function showBox(info,text){
    document.querySelector(".modalbox").classList.toggle("box");
    document.querySelector(".modalbox").classList.remove("is-active");
    document.querySelector(".modalbox_container").classList.toggle("glass-effect");
    document.querySelector(".modalbox_container").classList.remove("is-active");
    document.querySelector(info).innerHTML= text;



}