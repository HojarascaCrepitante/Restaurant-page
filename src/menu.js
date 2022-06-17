import './style.css';
import coffee from './coffee.jpg'
import cake from './coffee-and-somekindofcake.jpg'
import donut from './coffee-and-donut.jpg'
import tea_cookies from './tea-and-cookies.jpg'

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

    const dish_3 = document.createElement('div')
    dish_3.classList.add('dish')
        const dish_coffe_donut = new Image()
            dish_coffe_donut.src = donut
            dish_3.appendChild(dish_coffe_donut)
        const dish_3_description = document.createElement('p')
            dish_3_description.textContent = 'Coffee + Donut, $300';
            dish_3.appendChild(dish_3_description)

    const dish_4 = document.createElement('div')
        dish_4.classList.add('dish')
        const dish_4_tea = new Image()
            dish_4_tea.src  = tea_cookies
            dish_4.appendChild(dish_4_tea)
        const dish_4_description = document.createElement('p')
            dish_4_description.textContent = 'Tea + Cookies, 40$';
            dish_4.appendChild(dish_4_description)
    

    
    
    
    
    container.append(dish_1, dish_2, dish_3, dish_4)
    return container
}

export default menu