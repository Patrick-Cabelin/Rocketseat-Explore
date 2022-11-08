/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

  Se foi em 1 tentativa (singular) 
  Se foi em mais tentativas a mensagem fica no pural
  */

  let palpite = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))

  let tentativa = 1
  let pensamento = Math.round(Math.random()*10)

  while (pensamento != palpite) {
   palpite = prompt("Erro, tente novamente:")

    tentativa++
  }

  let plural = "s"
  let mensagem = `Parabéns! Você advinhou o número em ${tentativa} tentativa`

  if(palpite >= 2){
    alert(mensagem+plural)
  }
  