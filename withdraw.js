document.getElementById('btn-withdraw').addEventListener('click', function(){
    //  console.log("clicked");

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldAmountString);
    
    if (isNaN(withdrawFieldAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawAmountString = withdrawElement.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(previousWithdrawAmount);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalString);

    withdrawField.value = '';

    if(withdrawFieldAmount > balanceTotalAmount){
        alert('Baap er bank e eto tk nai');
    return;
    }

    const currentWithdrawTotal = withdrawAmount + withdrawFieldAmount;
    withdrawElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = balanceTotalAmount - currentWithdrawTotal;

    balanceTotalElement.innerText = currentBalanceTotal;


    withdrawField.value = '';
})