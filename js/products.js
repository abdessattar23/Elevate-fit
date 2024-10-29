//Category Filtering
//
//
//
//
//Category Filtering
const select = document.getElementById('category-select');
const products = document.querySelectorAll('.col-4');
const container = document.querySelector('.small.container .row');

select.addEventListener('change', (e) => {
    const category = e.target.value;
    const filtered = [];

    products.forEach((product) => {
        product.style.display = 'none';
        if (category === 'default' || product.id === category) {
            filtered.push(product);
        }
    });

    container.innerHTML = '';

    filtered.forEach((product) => {
        product.style.display = 'block';
        container.appendChild(product);
    });
});

//Price Filtering
//
//
//
//
//Price Filtering

const range = document.getElementById('price-range');
const price = document.getElementById('price-value');
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

select.addEventListener('change', filterProducts);
range.addEventListener('input', () => {
    price.textContent = `$${range.value}`;
    filterProducts();
});