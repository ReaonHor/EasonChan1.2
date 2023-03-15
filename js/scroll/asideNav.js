export function asideNav(scrollY, el) {
  for (let i = 0; i < el.length; i++) {
    if (el[i].dataset.post !== undefined) {
      let val = el[i].dataset.post
      if (scrollY >= val && scrollY - val < 350) {
        el[i].classList.add("on")
      } else {
        el[i].classList.remove("on")
      }
    } else {
      if (scrollY > 2000) {
        el[i].style.visibility = "visible"
      } else {
        el[i].style.visibility = "hidden"
      }
    }
  }
}
