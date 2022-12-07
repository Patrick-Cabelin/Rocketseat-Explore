export class Router {

    add(routeName/*Nome da rota exemplo /about */, page/*page eo link da rota 
    exemplo /pages/home.html */){
        this.route[routeName]= page
        /*this.route eo obj que já estava lá no index ou seja é o obj que continha as rotas 
        a propriedade, route éo obj [routeName] éa propriedade e tem o valor que é o page
        */
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
        console.log(event)
        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname }  = window.location
        const route = this.route[pathname] || this.route[404]
        /*fetch assicrono éo {Vai pagar para mim oque esta no parametro} normalmente usado pra pegar coisa no back ou banco ou no framework */
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML= html
            /*then (então) irei executar uma função.
            data.text() <= essa parte transformas os dados(data) em texto e retorna no proximo then
            esse ultimo then está pegando o retorno do ultimo then (linha 25) joga na tela esses dados
            */
    })}


}