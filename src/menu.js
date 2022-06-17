import './style.css';
import coffee from './coffee.jpg'
import cake from './coffee-and-somekindofcake.jpg'

function menu(){
    const container = document.createElement('div')
    container.classList.add('menu-container')

    const header = document.createElement('h2')
        header.textContent = 'Our menu:'
        container.appendChild(header)
    
    const dish_1 = document.createElement('div')
    dish_1.classList.add('dish')
        const dish_coffee = new Image()
            dish_coffee.src = coffee
            dish_1.appendChild(dish_coffee)
        const dish_1_description = document.createElement('p')
            dish_1_description.textContent = 'Coffee + Croissant, 50$';
            dish_1.appendChild(dish_1_description)
        
    const dish_2 = document.createElement('div')
    dish_2.classList.add('dish')
        const dish_coffee_andSomething = new Image()
            dish_coffee_andSomething.src = cake
            dish_2.appendChild(dish_coffee_andSomething)
        const dish_2_description = document.createElement('p')
            dish_2_description.textContent = 'Coffee + Some kind of cake, 200$';
            dish_2.appendChild(dish_2_description)

    
    
    

    
    
    
    
    container.append(dish_1, dish_2)
    return container
}

export default menu