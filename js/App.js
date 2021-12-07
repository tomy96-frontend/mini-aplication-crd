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
        iceCreamItem += `<div>
        <p>${iceItem.name}</p>
        </div>`
    }
    document.getElementById('ice-cream-items').innerHTML = iceCreamItem;
}

window.onload = renderIceCream;
