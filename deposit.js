// step 1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if (isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    // step 3

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    depositTotalElement.innerText = newDepositAmount;

    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositAmount
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalance = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalance;


    // last step - clear deposit field

    depositField.value = '';
})