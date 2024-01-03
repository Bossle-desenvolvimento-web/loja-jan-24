// Correção para selecionar a classe correta
const thumbnails = document.querySelector(".thumbnails");
const mainImage = document.querySelector("img");

thumbnails.addEventListener("click", (event) => {
  // Certifique-se de selecionar a tag correta com a classe "img-thumb"
  if (event.target.classList.contains("img-thumb")) {
    const selectedImage = event.target;
    mainImage.src = selectedImage.src;
  }
});
