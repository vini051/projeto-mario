const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const botaoFecharTrailer = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkVideo = video.src

function abrirTrailer(){
    modal.classList.toggle("aberto")
    video.setAttribute("src", linkVideo)
}

function fecharTrailer(){
    modal.classList.toggle("aberto")
    video.setAttribute("src", "")
}

botaoTrailer.addEventListener("click", () => {
    abrirTrailer()
})

botaoFecharTrailer.addEventListener("click", () => {
    fecharTrailer()
})














