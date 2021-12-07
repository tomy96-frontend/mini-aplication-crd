let state = {
   iceCream: [

        {
            name: 'Chocolate Ice Cream',
            price: 30,
            Stock: true
        },
        {
            name: 'Vanilla Ice Cream',
            price: 25,
            Stock: false
        },
        {
            name: 'Strawberry Ice Cream',
            price: 60,
            Stock: true
        },

    ]
}

function renderIceCream(){
    let iceCreamItem = "";

    for(let iceItem of state.iceCream){
        iceCreamItem += `<div class='card m-2 p-2  ${iceItem.Stock === false ? 'bg-danger bs' : 'bg-light my-shadow' } '>
        <p>${iceItem.name}</p>
        <p>${iceItem.price}$</p>
        </div>`
    }
    document.getElementById('ice-cream-items').innerHTML = iceCreamItem;
}

window.onload = renderIceCream;
