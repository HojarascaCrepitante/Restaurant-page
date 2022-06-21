import './style.css';
import coffee from './coffee.jpg'
import cake from './coffee-and-somekindofcake.jpg'
import donut from './coffee-and-donut.jpg'
import tea_cookies from './tea-and-cookies.jpg'
import tea_cake from './tea-and-cake.jpg'
import tea_biscuits from './tea-and-biscuits.jpg'

function menu(){
    const container = document.createElement('div')
    container.setAttribute('id','menu-container')

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
    
    const dish_5 = document.createElement('div')
        dish_5.classList.add('dish')
        const dish_5_tea = new Image()
             dish_5_tea.src  = tea_cake
             dish_5.appendChild(dish_5_tea)
        const dish_5_description = document.createElement('p')
            dish_5_description.textContent = 'Tea + Cake, 60$';
            dish_5.appendChild(dish_5_description)
        
    const dish_6 = document.createElement('div')
        dish_6.classList.add('dish')
        const dish_6_tea = new Image()
             dish_6_tea.src  = tea_biscuits
             dish_6.appendChild(dish_6_tea)
        const dish_6_description = document.createElement('p')
            dish_6_description.textContent = 'Tea + Biscuits, 600$';
            dish_6.appendChild(dish_6_description)
    
    
    
    container.append(dish_1, dish_2, dish_3, dish_4, dish_5, dish_6)
    return container
}

export default menu