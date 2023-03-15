import { bg } from "./scroll/bg.js"
import { asideNav } from "./scroll/asideNav.js"
import { autoScroll } from "./autoscroll/autoScroll.js"
import { slideShow } from "./slideShow/slideShow.js"
import { tabChange } from "./tabChange/tabChange.js"
import { load } from "./load/load.js"
import { checkBoxes } from "./scroll/checkBoxes.js"
import { viewCome } from "./scroll/viewCome.js"

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
  const viewn = document.querySelectorAll(".viewn")
  const viewins = document.querySelectorAll(".viewins")

  document.addEventListener("scroll", () => {
    let scrollY = window.scrollY
    //背景视差
    bg(scrollY, background)
    //asides
    asideNav(scrollY, asides)
    //专辑转动
    checkBoxes()
    viewCome(scrollY, viewn, viewins)
  })

  //点击更换tab事件(可以用事件委托)
  nav.addEventListener("click", (e) => {
    tabChange(e, tabList, tabs, ti)
  })
  // for (let i = 0; i < tabs.length; i++) {
  //   tabs[i].addEventListener("click", tabChange(tabList, tabs, nav, ti, i))
  // }
  // tabs[0].addEventListener("click", () => {
  //   nav.parentNode.classList.remove("bgtransparent")
  // })

  //自动滚动
  autoScroll(auto)

  //轮播图
  const slides = document.querySelector(".slides")
  const lbtn = document.querySelector(".lbtn")
  const rbtn = document.querySelector(".rbtn")
  slideShow(slides, lbtn, rbtn)

  //轮播图结束

  //侧边导航
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
  //load动画
})
