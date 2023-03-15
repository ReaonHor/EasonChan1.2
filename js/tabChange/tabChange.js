export function tabChange(e, tabList, tabs, ti) {
  let index = e.target.id - 0
  for (let i = 0; i < tabList.length; i++) {
    tabs[i].classList.remove("active")
    tabList[i].classList.remove("activeblock")
    e.target.parentNode.parentNode.classList.add("bgtransparent")
  }
  if (index == 0) {
    e.target.parentNode.parentNode.classList.remove("bgtransparent")
  }
  tabList[index].classList.add("activeblock")
  tabs[index].classList.add("active")
  ti[0].classList.add("load")
  ti[1].classList.add("load")
}
