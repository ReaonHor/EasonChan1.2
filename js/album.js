import { render } from "./render/render.js"
window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav")
  const tabs = nav.children
  const ti = document.querySelectorAll(".ti")
  // for (let i = 1; i <= tabs.length; i++) {
  //   tabs[i].addEventListener("click", () => {
  //     setTimeout(() => {
  //       ti[i].classList.remove("load")
  //     }, 50)
  //   })
  // }
  tabs[1].addEventListener("click", () => {
    setTimeout(() => {
      ti[0].classList.remove("load")
    }, 50)
  })
  tabs[2].addEventListener("click", () => {
    setTimeout(() => {
      ti[1].classList.remove("load")
    }, 50)
  })

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY
  })
  render()
})
