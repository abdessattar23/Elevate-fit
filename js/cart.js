const old = JSON.parse(localStorage.getItem("cart")) || [];
var cart = old;
function calculateprice() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item[1] * item[3];
    });
    return totalPrice;
}

document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
document.querySelector(".menu-bar li i").addEventListener("click", () => {
    window.location.href = './cart.html';
})

document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
document.querySelector(".menu-bar li i").addEventListener("click", () => {
    window.location.href = './cart.html';
})
old.forEach(item => {
    var product = document.createElement('tr');
    product.innerHTML = `
                    <td>
                        <div class="cart-info">
                            <img src="${item[2]}" alt="">
                            <div>
                                <p>${item[0]}</p>
                                <small>price: $<span class="itemprice">${item[1]}</span></small><br>
                                <a onclick="remove(this)">Remove</a>

                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="${item[3]}" min="1" class="item-quantity"></td>
                    <td class="sum">$</td>
                `;
    product.querySelector(".sum").textContent = item[1]*(product.querySelector("input").value);
    document.querySelector(".bodyOfTable").appendChild(product);
});
document.querySelector(".Totale").textContent = calculateprice();
document.querySelector(".Tva").textContent = calculateprice();
document.querySelector(".totaleWithTva").textContent = calculateprice();

const quantityinp = document.querySelectorAll(".item-quantity");

quantityinp.forEach(input => {
    input.addEventListener("input", () => {
        const newval = JSON.parse(localStorage.getItem("cart")) || [];
        newval.forEach((item, i) => {
            if(item[0] == input.parentElement.parentElement.querySelector("td").querySelector("p").textContent){
                newval[i][3] = input.value;
                localStorage.setItem("cart", JSON.stringify(newval));
            }
        });
        //input.parentNode.parentNode.querySelector(".itemprice").textContent = input.value;
        
        console.log("total is " + (input.parentNode.parentNode.querySelector(".itemprice").textContent) * parseInt(input.value, 10))
        input.parentNode.parentNode.querySelector(".sum").textContent = (input.parentNode.parentNode.querySelector(".itemprice").textContent) * parseInt(input.value, 10);
        console.log("total is " + calculateprice() * parseInt(input.value, 10))
        document.querySelector(".Totale").textContent = calculateprice();
        document.querySelector(".Tva").textContent = calculateprice();
        document.querySelector(".totaleWithTva").textContent = calculateprice();
    });
});
var em;
function remove(element){
    const newval = JSON.parse(localStorage.getItem("cart")) || [];
    newval.forEach((item, i) => {
        if(item[0] == element.parentElement.querySelector("p").textContent){
            newval.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(newval));
        }
    });
    element.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.parentElement.parentElement)
    document.querySelector(".Totale").textContent = calculateprice();
    document.querySelector(".Tva").textContent = calculateprice();
    document.querySelector(".totaleWithTva").textContent = calculateprice();
}