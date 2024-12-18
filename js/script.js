// JS for Single product detail


var ProductImg = document.getElementById("product-img");//larger image
var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

SmallImg[0].onclick = function ()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
{
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}


const selectedItem = localStorage.getItem("product-to-show");
if(selectedItem){
    const parser = new DOMParser();
    const doc = parser.parseFromString(selectedItem, 'text/html');
    const title = doc.querySelector('h4').textContent;
    const price = doc.querySelector("#items-price").textContent;
    const img = doc.querySelector("#pr-img").src;
    const id = doc.body.querySelector("div").id;
    document.querySelector("#product p").textContent = "Home/ "+id;
    document.querySelector("#product h1").textContent = title;
    document.querySelector("#product h4").textContent = price;
    document.querySelector("#product-img").src = img;
    const imgs = document.querySelectorAll(".small-img")
    imgs.forEach(e => {
        e.src = img;
    });
    const newval = JSON.parse(localStorage.getItem("cart")) || [];
    newval.forEach((item, i) => {
        if(item[0] == title){
            document.querySelector("#quantity").value = item[3];
            document.querySelector("#size").value = item[4];
        }
    });
}
const old = JSON.parse(localStorage.getItem("cart")) || [];
var cart = old;
function calculateprice() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item[1];
    });
    return totalPrice;
}
document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
    window.location.href = './cart.html';
})
document.querySelector(".fa-money-bill").addEventListener("click", () => {
    window.location.href = './checkout.html';
})
const quantity = document.querySelector("#quantity");
const size = document.querySelector("#size");
var title = document.querySelector("#product h1").textContent;
quantity.addEventListener("change", () => {
    const newval = JSON.parse(localStorage.getItem("cart")) || [];
    newval.forEach((item, i) => {
        if(item[0] == title){
            newval[i][3] = quantity.value;
            localStorage.setItem("cart", JSON.stringify(newval));
        }
    });
    document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
});
size.addEventListener("change", () => {
    const newval = JSON.parse(localStorage.getItem("cart")) || [];
    newval.forEach((item, i) => {
        if(item[0] == title){
            newval[i][4] = size.value;
            localStorage.setItem("cart", JSON.stringify(newval));
        }
    });
    document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
});

document.querySelector(".btn").addEventListener('click', (e) => {
    e.preventDefault();
    const newval = JSON.parse(localStorage.getItem("cart")) || [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(selectedItem, 'text/html');
    const title = doc.querySelector('h4').textContent;
    const price = parseInt(doc.querySelector("#items-price").textContent.substring(1), 10);
    const img = doc.querySelector("#pr-img").src;
    const size2 = size.value;
    const quantity2 = quantity.value;
    newval.forEach((item, i) => {
        if(item[0] == title){
            newval[i][4] = size2;
            newval[i][3] = quantity2;
            localStorage.setItem("cart", JSON.stringify(newval));
        }else{
            newval.push([title, price, img, quantity2, size2]);
            localStorage.setItem("cart", JSON.stringify(newval));
        }
    });

});
document.querySelector(".fa-bars").addEventListener("click", () => {
    const overmenu = document.querySelector(".overmenu");
    overmenu.classList.toggle("shown");
});