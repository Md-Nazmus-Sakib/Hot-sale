
// common function 

const handlerButton = (idName) => {

    const cardAmount = document.getElementById(idName + '-amount').innerText;

    const cardAmountValue = parseFloat(cardAmount);

    const itemName = document.getElementById(idName + '-item-name').innerText;

    const itemSelect = document.getElementById('item-selected');
    const count = itemSelect.childElementCount;
    const createP = document.createElement('p');
    createP.innerText = `${count + 1}. ${itemName}  = ${cardAmountValue} tk`;
    itemSelect.appendChild(createP)
    if (cardAmountValue) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled');
    }

    const totalAmount = document.getElementById('total-amount');
    const totalAmountString = totalAmount.innerText;
    const totalAmountValue = parseFloat(totalAmountString);

    const newAmount = (totalAmountValue + cardAmountValue).toFixed(2);
    totalAmount.innerText = newAmount;

    if (cardAmountValue >= 200 || (totalAmountValue + cardAmountValue) >= 200) {
        const btnDiscount = document.getElementById('discount-btn');
        btnDiscount.removeAttribute('disabled');
    }

    const finalTotalAmount = document.getElementById('final-total-amount');

    finalTotalAmount.innerText = newAmount;

}



// discount button 
document.getElementById('discount-btn').addEventListener('click', function () {

    const couponInputField = document.getElementById('coupon-input-field').value;
    const totalAmount = document.getElementById('total-amount').innerText;
    const totalAmountValue = parseFloat(totalAmount);
    const discountAmount = document.getElementById('discount-amount');
    const finalTotalAmount = document.getElementById('final-total-amount');
    if (couponInputField === "SELL200") {
        const newDiscountAmount = ((totalAmountValue * 20) / 100).toFixed(2);
        discountAmount.innerText = newDiscountAmount;

        const finalTotalWithDiscount = (totalAmountValue - newDiscountAmount).toFixed(2);
        finalTotalAmount.innerText = finalTotalWithDiscount;

    }
    else {
        alert('Please Type Coupon Code To Input Field.')
    }
})

// purchase button

