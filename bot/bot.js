const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya F1KR7.BOT siapa nama kamu?",
    `Halo ${data?.nama}, rumah lu dimana?`,
    `Ohhh loe tinggal di ${data?.rumah}, btw lu cowo/cewe?`,
    `Oh kamu ${data?.kelamin}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, Umur lu berapa coy?`,
    `Ohhh umur lu ${data?.umur}, Tengs ya udah mau gunain FikriBOT`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("ISI JAWABAN DULU NGENTOD")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ rumah: jawaban.value })
  } else if (init === 3) {
    botDelay({ kelamin: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    
        botDelay({ umur: jawaban.value })
      } else if (init === 6) {
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
  pertanyaan.innerHTML = `Tengs ${usersData[0]} udah main ke FikriBOT 😉, jan lupa ${usersData[2]} diser ya anj!`
  jawaban.value = "Ok Banhj"
}

function botEnd() {
  alert(
    `Tengs ya bro ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
  )
  window.location.reload()
}
