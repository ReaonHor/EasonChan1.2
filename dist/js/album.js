window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav")
  const tabs = nav.children
  const ti = document.querySelectorAll(".ti")
  tabs[1].addEventListener("click", () => {
    setTimeout(() => {
      ti[0].classList.remove("load")
    }, 0)
  })
  tabs[2].addEventListener("click", () => {
    setTimeout(() => {
      ti[1].classList.remove("load")
    }, 0)
  })
  const viewn = document.querySelectorAll(".viewn")
  const viewins = document.querySelectorAll(".viewins")
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY
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
  })
  async function render() {
    let albums = []
    let songs = []
    let list = []
    const alitem = document.querySelector(".alitem")
    await fetch("./album.json")
      .then((res) => res.json())
      .then((res) => {
        albums = res
      })
    list = albums.map((item) => item.songs)
    songs = list.map((item) => {
      return item
        .map(
          (item) =>
            `
        <li>${item}</li>
        `
        )
        .join("")
    })
    alitem.innerHTML = albums
      .map(
        (item, index) =>
          `
        <li class="item">
                  <div class="alimg">
                    <img
                      src="${item.src}"
                      class="alph"
                    />
                  </div>
                  <div class="detail">
                    <h1>${item.title}</h1>
                    <h5>专辑名：${item.title}</h5>
                    <h5>发布时间：${item.time}</h5>
                    <ol>
                      ${songs[index]}
                    </ol>
                    <p>
                      ${item.inf}
                    </p>
                  </div>
                </li>
        `
      )
      .join("")
    const imgs = document.querySelectorAll(".alph")
    window.addEventListener("scroll", checkBoxes)
    checkBoxes()
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4.5
      imgs.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        // console.log(boxTop)
        if (boxTop < triggerBottom) {
          box.parentNode.classList.add("imgcome")
        } else {
          box.parentNode.classList.remove("imgcome")
        }
      })
    }
  }
  render()
})
