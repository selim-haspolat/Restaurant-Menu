const buttonGroup = document.getElementById('button-group')
const food = document.querySelector('.food')


const menu = [
    {
        name: 'Steak',
        price: '5$',
        img: 'https://www.tarifinisevdim.com/uploads/recipe-photos/1920x1280/evde-lezzetli-biftek-pisirmenin-7-puf-noktasi-e69c6e.Jpeg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias',
        type: "Dinner"
    },
    {
        name: 'Serpme Kahvalti',
        price: '3$',
        img: 'https://i.pinimg.com/originals/7e/2c/32/7e2c3247152411ad7459fee0c0f2dc49.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias',
        type: "Breakfast"
    },
    {
        name: 'Spaghetti',
        price: '4$',
        img: 'https://i.lezzet.com.tr/images-xxlarge/domates-soslu-spagetti-6183f20b-f88d-4e19-99d5-f337c8cedb4e',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias',
        type: "Lunch"
    },
    {
        name: 'Chocolate Milkshake',
        price: '1$',
        img: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/08/cikolatali-milkshake-yemekcom.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias',
        type: "Shakes"
    }
]

window.addEventListener('load', (e) => {
    creatElements("All")
})

buttonGroup.addEventListener('click', (e) => {
    creatElements(e.target.innerText)
})

const creatElements = (typ) => {
    Array.from(food.children).forEach(x => {
        x.remove()
    })
    menu.forEach(x => {
        let { name , price , img , text , type} = x
        if(typ !== type && typ !== 'All'){
            return null
        }
        div = document.createElement('div')
        containerDiv = document.createElement('div')
        colDiv = document.createElement('div')
        colDiv.classList.add('col')
        cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        image = document.createElement('div')
        image.style.backgroundImage = `url(${img})`
        image.classList.add('card-img-top', 'img')
        image.alt = name
        bodyDiv = document.createElement('div')
        bodyDiv.classList.add('card-body')
        h5 = document.createElement('h5')
        h5.innerText = name
        h5.classList.add('card-title')
        p = document.createElement('p')
        p.innerText = text
        p.classList.add('card-text')

        div.appendChild(containerDiv)
        containerDiv.appendChild(colDiv)
        colDiv.appendChild(cardDiv)
        cardDiv.appendChild(image)
        cardDiv.appendChild(bodyDiv)
        bodyDiv.appendChild(h5)
        bodyDiv.appendChild(p)

        food.appendChild(div)
    })
}