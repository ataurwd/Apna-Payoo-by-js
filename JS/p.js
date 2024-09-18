function accountBalanceUpdate(balance, pin, ammount){
    const balance = document.getElementById(balance).innerText;
    const accountPin = document.getElementById(pin).value;
    const ammount = document.getElementById(ammount).value;

    //string to number

    const balanceNumber = parseFloat(balance);
    const ammountNumber = parseFloat(ammount);

    if(accountPin === '1234' && ammount >= 500){
        
    }
}