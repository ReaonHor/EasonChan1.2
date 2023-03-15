window.addEventListener("DOMContentLoaded", () => {
  const mytext = document.querySelector(".text")
  const abcontent = document.querySelector(".abcontent")
  let text =
    "感谢你的浏览，这是一个由纯三件套完成的静态主题网页，灵感来源于一个国外网站，以EASON为主题，仅由黑白及SVG动态线条构成。目前完成进度只有60%，如果你是陈奕迅歌迷就会发现其实还有很多张专辑没添加进数据，live部分也还没着手，最近很忙，但后面肯定会补上。\n--1.1--更新进度：代码模块化，对专辑部分懒加载操作"

  function write() {
    let a = abcontent.getBoundingClientRect().top
    if (a != 0 && a < 350) {
      let idx = 1
      const mytime = setInterval(() => {
        mytext.innerHTML = text.slice(0, idx)
        idx++
      }, 100)
      if (idx > text.length) {
        clearInterval(mytime)
      }
      removeEventListener("scroll", write)
    }
  }
  window.addEventListener("scroll", write)
})
