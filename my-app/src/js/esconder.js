
const contenido2 = document.getElementById("links")
const checkbox2 = document.getElementById("navbar");

checkbox2.addEventListener("change", (evento) => {
  if (evento.target.checked) {
    contenido2.classList.add("links");
  }else {
    contenido2.classList.remove("links");
  }
  
});