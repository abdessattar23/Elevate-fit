document.addEventListener("DOMContentLoaded", function () {
    getitems();
    document.getElementById("first-name").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[A-Za-z ]+$/.test(value)) {
            errorMessage.textContent = "First name should only contain letters and spaces";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("last-name").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[A-Za-z ]+$/.test(value)) {
            errorMessage.textContent = "Last name should only contain letters and spaces";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("company-name").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[A-Za-z0-9&.,\- ]*$/.test(value)) {
            errorMessage.textContent = "Company name can include letters, numbers, and special characters";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("street-address").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[A-Za-z0-9.,#\- ]+$/.test(value)) {
            errorMessage.textContent = "Street address can include letters, numbers, and special characters";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("city").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[A-Za-z ]+$/.test(value)) {
            errorMessage.textContent = "City name should only contain letters and spaces";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("postcode").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^\d{5}$/.test(value)) {
            errorMessage.textContent = "Postal code must be exactly 5 digits";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("phone").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^\d{10}$/.test(value)) {
            errorMessage.textContent = "Phone number must be exactly 10 digits";
        } else {
            errorMessage.textContent = "";
        }
    });

    document.getElementById("email").addEventListener("input", function () {
        const value = this.value;
        const errorMessage = this.nextElementSibling;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage.textContent = "Please enter a valid email address";
        } else {
            errorMessage.textContent = "";
        }
    });
});

document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
    window.location.href = './cart.html';
})
document.querySelector(".fa-money-bill").addEventListener("click", () => {
    window.location.href = './checkout.html';
})

function getitems() {
    var total = 0;
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    items.forEach(item => {
        const parent = document.querySelector(".items");
        const inner = `
            <p>${item[0]} x ${item[3]} <span>$${item[1] * item[3]}</span></p>
        `;
        parent.innerHTML += inner;
        total += item[1] * item[3];
    });
    
    document.querySelector(".tot").textContent = `$${total}`;
}