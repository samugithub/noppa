function Noppa() {
    var SatunnaisLuku = Math.floor(Math.random() * 6) + 1

    var KuvaLahde = "./images/" + SatunnaisLuku + ".png"

    var NoppaKuva = document.querySelector("#dice img")

    NoppaKuva.src = KuvaLahde
}