
//Login Button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
})

//Deposit Button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
})

// Withdraw Button handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';
})

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}