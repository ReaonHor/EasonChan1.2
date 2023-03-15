window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav")
  const tabs = nav.children
  const ti = document.querySelectorAll(".ti")
  const content = document.querySelector(".content")
  const tabList = content.children
  const background = document.querySelector(".background")
  const auto = document.querySelector(".auto")
  const aside = document.querySelector(".asidenav")
  const asides = aside.children
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    if (scrollY !== 0) {
      background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
    } else {
      background.style.backgroundPosition = ""
    }
  })
  document.addEventListener("scroll", () => {
    for (let i = 0; i < asides.length; i++) {
      const scrollY = window.scrollY
      if (asides[i].dataset.post !== undefined) {
        let val = asides[i].dataset.post
        if (scrollY >= val && scrollY - val < 350) {
          asides[i].classList.add("on")
        } else {
          asides[i].classList.remove("on")
        }
      } else {
        if (scrollY > 2000) {
          asides[i].style.visibility = "visible"
        } else {
          asides[i].style.visibility = "hidden"
        }
      }
    }
  })

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
      for (let i = 0; i < tabList.length; i++) {
        tabs[i].classList.remove("active")
        tabList[i].classList.remove("activeblock")
        nav.parentNode.classList.add("bgtransparent")
      }
      tabList[i].classList.add("activeblock")
      tabs[i].classList.add("active")
      ti[0].classList.add("load")
      ti[1].classList.add("load")
    })
  }
  tabs[0].addEventListener("click", () => {
    nav.parentNode.classList.remove("bgtransparent")
  })
  function autoScroll() {
    let nowTop = 0
    let maxWidth = -(auto.offsetHeight - 100)
    const mytime = setInterval(() => {
      if (nowTop > maxWidth) {
        nowTop -= 23
        auto.style.top = nowTop + "px"
      } else {
        nowTop = 0
        auto.style.top = 0
      }
    }, 3000)
  }
  autoScroll()
  const slides = document.querySelector(".slides")
  const lbtn = document.querySelector(".lbtn")
  const rbtn = document.querySelector(".rbtn")
  var i = 0
  lbtn.addEventListener("click", () => {
    if (i === 0) {
      slides.style.transition = "none"
      i = 6
      slides.style.left = i * -276 + "px"
      setTimeout(() => {
        slides.style.transition = ".4s"
        i--
        slides.style.left = i * -276 + "px"
      }, 10)
    } else {
      i--
      slides.style.left = i * -276 + "px"
    }
  })
  rbtn.addEventListener("click", () => {
    i++
    if (i === 7) {
      slides.style.transition = "none"
      i = 0
      slides.style.left = 0
      setTimeout(() => {
        slides.style.transition = ".4s"
        i++
        slides.style.left = i * -276 + "px"
      }, 10)
    } else {
      slides.style.left = i * -276 + "px"
    }
  })
  const more = document.querySelector(".more")
  more.addEventListener("click", () => {
    window.scrollTo(0, 0)
    tabs[0].classList.remove("active")
    tabList[0].classList.remove("activeblock")
    nav.parentNode.classList.add("bgtransparent")
    tabList[1].classList.add("activeblock")
    tabs[1].classList.add("active")
    ti[0].classList.add("load")
  })
  asides[5].addEventListener("click", () => {
    window.scrollTo(0, 0)
  })
})
