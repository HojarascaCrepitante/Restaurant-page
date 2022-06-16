import {pageLoad, navBar} from './initialPage'

let content = document.getElementById('content')
content.appendChild(pageLoad())
content.appendChild(navBar())