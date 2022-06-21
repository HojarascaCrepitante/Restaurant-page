import buildingImage from './building.jpg'
import telephoneImg from './telephone.jpg'
import './style.css'

function contactInfo(){
    const container = document.createElement('div')
        container.setAttribute('id','contact-container')
    
    const adress = document.createElement('h2')
        adress.textContent = 'Located at:';
        const adressDiv = document.createElement('div')
        const building = new Image()
            building.src = buildingImage
        const adressInfo = document.createElement('p')
            adressInfo.textContent = 'Real street 1234'
        adressDiv.append(building,adressInfo)

    const telephoneNumber = document.createElement('h2')
        telephoneNumber.textContent = 'Telephone :'
        const telephoneDiv = document.createElement('div')
        const telephone = new Image()
            telephone.src = telephoneImg
        const telephoneInfo = document.createElement('p')
            telephoneInfo.textContent = '123456789'
            telephoneDiv.append(telephone,telephoneInfo)
            
    container.append(adress,adressDiv, telephoneNumber, telephoneDiv)
    return container
}
export default contactInfo