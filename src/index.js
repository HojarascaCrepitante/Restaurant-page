import {pageLoad, navBar} from './initialPage'
import menu from './menu'
import contact from './contact'
import home from './home'

(function(){
let content = document.getElementById('content')
content.appendChild(pageLoad())
content.appendChild(navBar())
content.appendChild(home())
})()


const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', ()=>{
     if(document.getElementById('home-container'))
     document.getElementById('home-container').remove()
     
     if(document.getElementById('contact-container'))
        document.getElementById('contact-container').remove()
     
     if(!document.getElementById('menu-container')){   
        const mainContent = menu()
        content.appendChild(mainContent)
        }
    menuButton.classList.add('active')
        
        contactButton.classList.remove('active')
        
        homeButton.classList.remove('active')
        
    })

const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', ()=>{
        if(document.getElementById('home-container'))
        document.getElementById('home-container').remove()
     
        if(document.getElementById('menu-container'))
        document.getElementById('menu-container').remove()
     
        
        if(!document.getElementById('contact-container')){
        const mainContent = contact()
        content.appendChild(mainContent)
        }
        contactButton.classList.add('active')
            homeButton.classList.remove('active')
            menuButton.classList.remove('active')
    })

const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', ()=>{
        if(document.getElementById('menu-container'))
        document.getElementById('menu-container').remove()
     
        if(document.getElementById('contact-container'))
        document.getElementById('contact-container').remove()
     
        if(!document.getElementById('home-container')){
        const mainContent = home()
        content.appendChild(mainContent)
        }
        homeButton.classList.add('active')
            
           
       contactButton.classList.remove('active')
       menuButton.classList.remove('active')
    })