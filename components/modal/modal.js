const modalDiv = document.querySelector("#modal-popup");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalOpenBtn = document.querySelector("#modal-open-btn");

modalCloseBtn.addEventListener("click", () => {
  modalDiv.classList.remove("visible");
});

modalOpenBtn.addEventListener("click", () => {
  modalDiv.classList.add("visible");
});