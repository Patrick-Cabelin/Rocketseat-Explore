/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let menu
let lista= []

while(menu != 3) {
  menu =Number(prompt(`  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))


  switch (menu) {
    case 1:
      let item = prompt("Cadastre um item")
      lista.push(item)
      break;
    case 2: 
      if(lista.length == 0){
        alert("Sem item cadastrados, por favor Cadastre na opção 1")
      }
        alert(lista)
      break
    case 3: 
      alert("SEE YOU LATER")
      break

    default:
      alert("INVALIDO!! TENTE NOVAMENTE")
      break;
  }
}