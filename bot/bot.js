const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya F1KR7.BOT nama lu siapa?",
    `Hlo ${data?.nama}, dimana rumahnya?`,
    `Ohhh rumah lu di ${data?.usia}, umur lu brapa?`,
    `Oo umur lu ${data?.hobi}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, ya udah kalau gitu. udah ya bro`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("isi jawaban dlu ngentod")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Tengs bro ${usersData[0]} udah main ke F1KR7.BOT 😉, kali-kali kita main bareng ya!`
  jawaban.value = "Ok banhj"
}

function botEnd() {
  alert(
    `Hai ${usersData[0]} tengs ya udah berkunjung, anda akan diarahkan ke halaman utama.`
  )
  window.location.reload()
}