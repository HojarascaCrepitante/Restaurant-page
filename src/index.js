import {pageLoad, navBar} from './initialPage'
import menu from './menu'

(function(){
let content = document.getElementById('content')
content.appendChild(pageLoad())
content.appendChild(navBar())
})()


const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', ()=>{
        const mainContent = menu()
        content.appendChild(mainContent)
        return mainContent
    })