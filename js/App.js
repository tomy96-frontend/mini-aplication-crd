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


document.getElementById("create-ice-cream").onsubmit = (e) => {
    e.preventDefault();
  let price = e.target.elements.price.value
  let name = e.target.elements.name.value
  let Stock = e.target.elements.Stock.checked
    
  state.iceCream.push({
      name:name,
      price: price,
      Stock: Stock
  })

  renderIceCream()
}


// document.getElementById('create-product').onsubmit = (e) => {

//     e.preventDefault();
//     let price = Number(e.target.elements.price.value);
//     let name = e.target.elements.name.value;
//     let isInStock = e.target.elements.isInStock.checked;
    
//     //state change
//     state.products.push({
//         id: uid(),
//         name: name,
//         price: price,
//         isInStock: isInStock
//     })
    
//     //render
//     renderProducts()
    
//     }