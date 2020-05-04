const cards = document.querySelectorAll('.card')

for (let card of cards) {
   card.addEventListener("click", () => {
      const pageId = card.getAttribute("id")
      window.location.href = `/courses/${pageId}`
   })
}



/* 
document.querySelector('.close-modal').addEventListener("click", () => {
   modalOverlay.classList.remove("active")
   modal.classList.remove("maximize")
})

document.querySelector('.maximize-modal').addEventListener("click", () => {
   if (modal.classList.contains("maximize")){
      modal.classList.remove("maximize")
   } else {
      modal.classList.add("maximize")
   }
}) */