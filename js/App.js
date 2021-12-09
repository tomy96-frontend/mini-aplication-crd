let state = {
   iceCream: [

        {
            id: uid(),
            name: 'Chocolate Ice Cream',
            price: 30,
            Stock: true
        },
        {
            id: uid(),
            name: 'Vanilla Ice Cream',
            price: 25,
            Stock: false
        },
        {
            id: uid(),
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
        <button class="btn btn-danger delete-ice my-btnTwo  ${iceItem.Stock === false ? 'btn-dark' : ''}" data-iceid="${iceItem.id}"> Delete </button>
        </div>`
    }
    document.getElementById('ice-cream-items').innerHTML = iceCreamItem;

    for(let delBtn of document.querySelectorAll('.delete-ice')){
        
        delBtn.onclick = (e)=>{
            console.log(e.target.dataset);

        }
    }


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

function uid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}