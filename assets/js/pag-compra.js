function trocarImagem() {
  // Obtém a imagem principal
  const imgPrincipal = document.querySelector(".img");

  // Obtém todas as imagens das thumbnails
  const imgsThumbnails = document.querySelectorAll(".img-thumb");

  // Itera sobre todas as imagens das thumbnails
  for (const imagem of imgsThumbnails) {
    // Adiciona um evento de clique a cada imagem
    imagem.addEventListener("click", () => {
      // Altera a imagem principal para a imagem clicada
      imgPrincipal.src = imagem.src;

      // Armazena a imagem anterior
      const imgAnterior = imgPrincipal.src;

      // Adiciona um evento de desligamento a cada imagem
      imagem.addEventListener("mouseout", () => {
        // Restaura a imagem anterior
        imgPrincipal.src = imgAnterior;
      });
    });
  }
}
