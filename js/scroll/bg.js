export function bg(scrollY, el) {
  if (scrollY !== 0) {
    el.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% - ${scrollY}px)`
    // el.style.transform = `translateX(${scrollY}px)`
  } else {
    el.style.backgroundPosition = ""
  }
}
