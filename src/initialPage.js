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
    text.textContent = 'Epic restaurant'
    element.appendChild(text)
    return element
}

function navBar(){
    const navBarDiv = document.createElement('div')
        navBarDiv.classList.add('navBarDiv')
    const navBar = document.createElement('nav')
        const home = document.createElement('button')
            home.textContent = 'Home'
        const menu = document.createElement('button')
            menu.textContent = 'Menu'
        const contact = document.createElement('button')
            contact.textContent = 'Contact'
    navBar.append(home,menu,contact)
    navBarDiv.appendChild(navBar)
    return navBarDiv
}
export  {pageLoad,navBar}