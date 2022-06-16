import './style.css';

function menu(){
    const container = document.createElement('div')
    container.classList.add('menu-container')

    const message = document.createElement('h1')
    message.textContent ='hahahaah'
    container.appendChild(message)
    return container
}

export default menu