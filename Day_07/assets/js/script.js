

//Product handler iphone11
function handleProductChange(Product, isIncrease) {
    const ProductInput = document.getElementById(Product + "_count");
    const ProductCount = parseInt(ProductInput.value);
    let ProductNewCount = ProductCount;
    if (isIncrease == true) {
        ProductNewCount = ProductCount + 1;
    }
    if (isIncrease == false && ProductCount > 1) {
        ProductNewCount = ProductCount - 1;
    }
    ProductInput.value = ProductNewCount;
    let ProductTotal = 0;
    if (Product == 'phone') {
        ProductTotal = ProductNewCount * 1219;
    }
    if (Product == 'case') {
        ProductTotal = ProductNewCount * 59;
    }
    document.getElementById(Product + "_total").innerText = "$" + ProductTotal;

    calculateTotal()
}


function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");

    const totalPrice = phoneCount * 1219 + caseCount * 59;

    document.getElementById("total_price").innerText = '$' + totalPrice;
}

function getInputValue(Product) {
    const ProductInput = document.getElementById(Product + "_count");
    const ProductCount = parseInt(ProductInput.value);
    return ProductCount;
}




