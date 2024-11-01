const select = document.getElementById('category-select');
const products = document.querySelectorAll('.col-4');
const container = document.querySelector('.small.container .row');
const range = document.getElementById('price-range');
const price = document.getElementById('price-value');
const addbtn = document.querySelectorAll('#add-btn');
const title = document.querySelectorAll(".col-4 h4");
const old = JSON.parse(localStorage.getItem("cart")) || [];
var cart = old;
var dd = [1,2];
dd.fin
function filterProducts() {
    const selectedCategory = select.value;
    const maxPrice = parseInt(range.value, 10);
    const filteredProducts = [];

    products.forEach((product) => {
        const productPrice = parseInt(product.querySelector("#items-price").textContent.substring(1), 10);
        product.style.display = 'none';
        if ((selectedCategory === 'default' || product.id === selectedCategory) && productPrice <= maxPrice) {
            filteredProducts.push(product);
        }
    });

    container.innerHTML = '';

    filteredProducts.forEach((product) => {
        product.style.display = 'block';
        container.appendChild(product);
    });
}

function calculateprice() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item[1];
    });
    return totalPrice;
}

select.addEventListener('change', filterProducts);

range.addEventListener('input', () => {
    price.textContent = `$${range.value}`;
    filterProducts();
});

addbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const col4Parent = btn.parentElement.closest('.col-4');
        const price = parseInt(col4Parent.querySelector("#items-price").textContent.substring(1), 10)
        const title = col4Parent.querySelector("h4").textContent;
        const img = col4Parent.querySelector("img").src;
        const quantity = 1;
        const size = "Medium";
        const existingItem = cart.find(item => item[0] === title);
        if (existingItem) {
            existingItem[3] += 1;
        } else {
            cart.push([title, price, img, quantity, size]);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;
    });
});


document.querySelector(".menu-bar li").textContent = `$${calculateprice()}`;

title.forEach(t => {
    t.style.cursor = 'pointer';
    t.addEventListener('click', () => {
        const col4Parent = t.parentElement.closest('.col-4');
        const html = col4Parent.outerHTML;
        localStorage.setItem("product-to-show", html);
        window.location.href = "product-detail.html";
    });
});
document.querySelector(".menu-bar li i").addEventListener("click", () => {
    window.location.href = './cart.html';
})