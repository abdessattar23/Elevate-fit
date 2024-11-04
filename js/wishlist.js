const parent = document.querySelector('.bodyOfTable');
const newval = JSON.parse(localStorage.getItem("wishlist")) || [];

newval.forEach((item, i) => {
    parent.innerHTML += `
                <tr style="margin: 20px">
                    <td>
                        <div class="cart-info">
                            <img style="weight: 80px; height: 80px;" src="${item[1]}" alt="">
                            <div>
                                <p>${item[0]}</p>
                                <small>price: $<span class="itemprice">${item[2]}</span></small><br>

                            </div>
                        </div>
                    </td>
                </tr>
    `;
    // parent.appendChild(col4);
});