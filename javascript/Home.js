// Selecionar elementos
const videoContainers = document.querySelectorAll(".video-container");
const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const closeModal = document.getElementById("close-modal");

// Adicionar evento de clique para cada vídeo
videoContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const videoSrc = container.querySelector("object").getAttribute("data");
    modalVideo.setAttribute("data", videoSrc);
    modal.classList.remove("hidden");
  });
});

// Fechar o modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalVideo.setAttribute("data", ""); // Limpar o vídeo
});
