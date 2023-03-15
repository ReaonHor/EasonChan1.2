export async function render() {
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
}
