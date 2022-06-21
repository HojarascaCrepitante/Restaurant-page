function homeElement(){
    const container = document.createElement('div')
        container.setAttribute('id', 'home-container')
    const header = document.createElement('h1')
        header.textContent = 'Who are we?'
    const description = document.createElement('p')
        description.textContent = 'We are a small business located in Minnesota, probably, it all started when i had a dream as a child, I wanted to open a coffee shop'
    const description2 = document.createElement('p')
        description2.textContent = 'This dream of mine is possible only because the grit and determination of the creator of this webpage, is all about GRIT haha'
    container.append(header,description,description2)
    return container
}

export default homeElement