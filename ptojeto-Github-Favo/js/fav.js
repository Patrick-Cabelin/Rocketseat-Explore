import {GithubUser} from './githubUser.js'

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.loadUser()
        
        
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
    }

    async add(username){
        try{
        const userExists = this.users.find(entry => entry.login ===username)

        if(userExists){
            throw new Error('Usuário já cadastrado')
            return
        }

        const user= await GithubUser.search(username)
       
        
        if(user.login === undefined){
            throw new Error('Usuario Invalido!!')
        }

        this.users= [user,...this.users]
        this.update()
        this.save()

        }catch(error){
            alert(error.message)
        }
    }

    loadUser(){
        this.users= JSON.parse(localStorage.getItem('@github-favorites:')) || [] 
    }

    delete(users){
       const filteredUser= this.users.filter(infoUser => infoUser.login !== users.login)
        
       this.users = filteredUser
       this.update()
       this.save()
    }
    
}


export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('tbody')
        this.onAdd()
        this.update()
    }

    onAdd(){
        const searchButton = document.querySelector('.search button')
        
        searchButton.onclick=()=>{
            const { value }= document.querySelector('#git-search')
    
            this.add(value)
        }

    }

    update(){
        this.removeAllTr()
        
        this.users.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt =`imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user a').target = `_blank`
            
            
            row.querySelector('td button.remove').onclick= () => {
                const confirmRemove = confirm("Quer deletar mesmo?")
                if(confirmRemove){
                    this.delete(user)
                }
            }
            this.tbody.append(row)
        })
    }
     
    createRow(){
        const tr = document.createElement('tr')

        const infoTd = 
        `
            <td class="user">
                <img src="https://github.com/patrick-cabelin.png" alt="">
                <a href="https://gituhub.com/patrick-cabelin">
                    <p>Patrick Alexsander</p>
                    <span>Patrick Cabelin</span>
                </a>
            </td>
            <td class="repositories">10</td>
            <td class="followers">0</td>
            
            <td>
                <button class="remove">&times;</button>
            </td>
         `
        tr.innerHTML = infoTd

        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        });
    }
}
