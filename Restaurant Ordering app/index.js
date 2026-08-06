const orderList = document.getElementById("order-list");
const totalPrice = document.getElementById("total-price");
const order = document.getElementById("order-section");
const data = [
    {
        id: 1,
        name: "Pizza",
        price: 14,
        quantity:0
    },
    {
        id: 2,
        name: "Beer",
        price: 12,
        quantity:0
    }
];


(document.querySelectorAll(".add-btn").forEach(function(button){
    button.addEventListener("click",function(e){
        selectedOrder(e.currentTarget.dataset.itemId)
    })
}))



function selectedOrder(id){
    const selectedData = data.find((item)  => item.id === parseInt(id))
    if(!selectedData){
        return
    }
    // Here we Detect the user click count
    selectedData.quantity++
    render()
}

function render(){
    order.style.display = "block";
    let html = ""
    let total = 0
    data.forEach(function(item){
        if(item.quantity == 0){
            return
        }
        const itemTotal = item.price * item.quantity
        total += itemTotal

        html += `
            <article class="order-item">
                <div class="order-info">
                    <h3>${item.name} × ${item.quantity}</h3>
                    <button
                        type="button"
                        class="remove-btn"
                        data-item-id="${item.id}"
                    >
                        Remove
                    </button>
                </div>
                <p>$${itemTotal}</p>
            </article>
        `;
          })
        orderList.innerHTML = html;
        totalPrice.textContent = `$${total}`;
}
orderList.addEventListener("click",function(event){
    const removeButton = event.target.closest(".remove-btn");
    if (!removeButton) {
        return;
    }
    const itemId = Number(removeButton.dataset.itemId);
     const selectedData = data.find(function (item) {
        return item.id === itemId;
    });

     if (!selectedData) {
        return;
    }

   selectedData.quantity--;
   if(selectedData.quantity < 0){
    return
   }

    render();

})


document.querySelector(".complete-order-btn").addEventListener("click",function(e){

    document.querySelector(".card-details").style.display = "flex"
})