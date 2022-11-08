let tentativa = 1
let pensamento = Math.round(Math.random()*10)

const botaoTentar = document.querySelector("form button")
const tentarDeNovo = document.querySelector(".acertou button") 
const acertou = document.querySelector(".acertou")
const adivinha = document.querySelector(".adivinha")
const telaVitoria = document.querySelector(".acertou h2")

botaoTentar.addEventListener("click", tentar)
tentarDeNovo.addEventListener("click", novamente)
document.addEventListener("keydown", function enter(e) {
    if(e.key == 'Enter' && adivinha.classList.contains(("hide")))
    novamente()
})



function tentar(event) {
    event.preventDefault()

    let palpite = document.querySelector("#palpite").value


    if(Number(palpite)== pensamento){
        
        let mensagem = `Parabéns! Você advinhou o número em ${tentativa} tentativa`
        
        trocaTela()
       
        telaVitoria.innerHTML= mensagem
        let plural = "s"
        if(palpite >= 2){
            telaVitoria.innerHTML= mensagem+plural
        }
        
    }
    palpite.value = ""
    tentativa++
}

function novamente(event){
    trocaTela()

    pensamento = Math.round(Math.random()*10)
    tentativa= 1
}

function trocaTela() {
    adivinha.classList.toggle("hide")
    acertou.classList.toggle("hide")
}