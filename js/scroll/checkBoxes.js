export function checkBoxes() {
  const imgs = document.querySelectorAll(".alph")
  const triggerBottom = (window.innerHeight / 5) * 4.5
  imgs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    // console.log(boxTop)
    if (boxTop < triggerBottom) {
      box.parentNode.classList.add("imgcome")
    } else {
      box.parentNode.classList.remove("imgcome")
    }
  })
}
