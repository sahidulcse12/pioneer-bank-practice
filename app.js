// login handler

const loginButton = document.getElementById('login');
const loginArea = document.getElementById('login-area');
const transactionArea = document.getElementById('transaction-area');

loginButton.addEventListener('click', function () {
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
})


// balance and deposit handler

document.getElementById('addDeposit').addEventListener('click', function () {
    const inputValue = getInputNumber('depositAmount');
    if (inputValue > 0) {
        updateValue("currentDeposit", inputValue);
        updateValue("currentBalance", inputValue);

        document.getElementById('depositAmount').value = "";
    }
    else {
        alert('negative number is not valid');
        document.getElementById('depositAmount').value = "";
    }

})

// withdraw handler

document.getElementById('addWithdraw').addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    if(withdrawNumber > 0){
        updateValue("currentWithdraw", withdrawNumber);
        updateValue("currentBalance", -1 * withdrawNumber);

        document.getElementById('withdrawAmount').value = "";
    }
    else{
        alert('negative number is not valid');
        document.getElementById('withdrawAmount').value = "";
    }

})

function getInputNumber(id) {
    const getInput = document.getElementById(id).value;
    const amountNumber = parseFloat(getInput);
    return amountNumber;
}

function updateValue(id, values) {
    const previousDeposit = document.getElementById(id).innerText;
    const checkValue = parseFloat(values);
    //console.log(checkValue);
    const previousDepositNumber = parseFloat(previousDeposit);
    const totalAmount = previousDepositNumber + values;
    document.getElementById(id).innerText = totalAmount;

}