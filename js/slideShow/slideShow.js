export function slideShow(el, lbtn, rbtn) {
  var i = 0
  lbtn.addEventListener("click", () => {
    if (i === 0) {
      el.style.transition = "none"
      i = 6
      el.style.left = i * -276 + "px"
      setTimeout(() => {
        el.style.transition = ".4s"
        i--
        el.style.left = i * -276 + "px"
      }, 10)
    } else {
      i--
      el.style.left = i * -276 + "px"
    }
  })
  rbtn.addEventListener("click", () => {
    i++
    if (i === 7) {
      el.style.transition = "none"
      i = 0
      el.style.left = 0
      setTimeout(() => {
        el.style.transition = ".4s"
        i++
        el.style.left = i * -276 + "px"
      }, 10)
    } else {
      el.style.left = i * -276 + "px"
    }
  })
}
