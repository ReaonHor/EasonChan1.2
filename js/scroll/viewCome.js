export function viewCome(scrollY, viewn, viewins) {
  if (scrollY > 120) {
    viewn[0].classList.add("come")
    viewn[1].classList.add("come")
  } else {
    viewn[0].classList.remove("come")
    viewn[1].classList.remove("come")
  }
  if (scrollY > 800) {
    viewins[0].classList.add("comes")
    viewins[1].classList.add("comes")
  } else {
    viewins[0].classList.remove("comes")
    viewins[1].classList.remove("comes")
  }
}
