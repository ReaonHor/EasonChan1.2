export function autoScroll(el) {
  let nowTop = 0
  let maxWidth = -(el.offsetHeight - 100)
  const mytime = setInterval(() => {
    if (nowTop > maxWidth) {
      nowTop -= 23
      el.style.top = nowTop + "px"
    } else {
      nowTop = 0
      el.style.top = 0
    }
  }, 3000)
}
