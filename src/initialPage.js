import myLogo from './restaurant-header.jpg';
import './style.css';

function pageLoad(){
    const element = document.createElement('div')
    element.classList.add('top')

    const logo = new Image()
    logo.src = myLogo
    logo.classList.add('logo')
    element.appendChild(logo)

    const text = document.createElement('h1')
    text.textContent = 'Epic Coffee'
    element.appendChild(text)
    return element
}

function navBar(){
    const navBarDiv = document.createElement('div')
        navBarDiv.classList.add('navBarDiv')
    const navBar = document.createElement('nav')
        const homeButton = document.createElement('button')
        homeButton.textContent = 'Home'
        const menuButton = document.createElement('button')
        menuButton.textContent = 'Menu'
        menuButton.setAttribute('id','menu-button')
        const contactButton = document.createElement('button')
        contactButton.textContent = 'Contact'
    navBar.append(homeButton,menuButton,contactButton)
    navBarDiv.appendChild(navBar)
    return navBarDiv
}


export  {pageLoad,navBar}
