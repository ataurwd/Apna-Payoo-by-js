//for login area
const loginBtn = document.getElementById('submit-btn');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-code').value;
    const mainForm = document.getElementById('main-form');
    const phoneHome = document.getElementById('app-home')
    if(phoneNumber === '56' && pinNumber === '1234'){
        mainForm.style.display = 'none';
        phoneHome.style.display = 'block'
    }
    else{
        alert('login fail')
    }
})


//for app home page
// ---------------------------
//----------------------------
//manage add money and cash out form hide and show 
function showAndHide(btnId, showId, hideId, hideId2){
    document.getElementById(btnId).addEventListener('click', () => {
        const showForm = document.getElementById(showId)
        const hideForm = document.getElementById(hideId)
        document.getElementById(hideId2).style.display = 'none'
        showForm.style.display = 'block';
        hideForm.style.display = 'none';
    })
}
showAndHide('add-btn', 'add-money', 'cash-out', 'transction-section')
showAndHide('cash-btn', 'cash-out', 'add-money', 'transction-section')
showAndHide('Transction-btn','transction-section', 'cash-out', 'add-money')


//adjust cashout or add money 
//convert all input value string to number fucntion
const inputValueConvert = (id) => {
    const inputValue = document.getElementById(id).value;
    const converNumber = parseFloat(inputValue);
    return converNumber;
}




const addMoneyBtn = document.getElementById('add-moneyBtn');
addMoneyBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let accountNumber = document.getElementById('account-pin').value;
    let balance = parseFloat(document.getElementById('main-balance').innerText);  // Directly convert innerText
    let addAmmount = inputValueConvert('addMoney-input');

    if(accountNumber == '1234' && addAmmount >= 500){
        const newBallance = balance + addAmmount;
        document.getElementById('main-balance').innerText = newBallance;

        // transacton record
        const p = document.createElement('div')
        p.innerHTML = `
                    <div class="bg-sky-300 p-3 rounded-xl mt-3">
                    <h1 class="text-xl font-bold">Add Money: ${addAmmount}</h1>
                    <h1>New Balance: ${newBallance}</h1>
                  </div>
        `
        const transactonSection = document.getElementById('transction-record');
        transactonSection.appendChild(p)
    }
    else{
        alert('wrong input')
    }

    //empty the input field
    document.getElementById('addMoney-input').value = ''
    document.getElementById('account-pin').value = ''
})



// -----------------------------------------
// --------------------------------------------
// cash Out system

const cashOutBtn = document.getElementById('cashOut-Btn');
cashOutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // access all ids and convert them to numbers
    let accountBalance = document.getElementById('main-balance').innerText;
    let cashOutaccountNumber = document.getElementById('cashOut-input').value;
    let cashOutAmountInput = document.getElementById('cashOut-ammount').value;
    
    // convert input value string to number 
    let balance = parseFloat(accountBalance);
    let cashOutAmount = parseFloat(cashOutAmountInput);

    if (cashOutaccountNumber == '1234' && cashOutAmount >= 500) {
        const balanceAfterCashout = balance - cashOutAmount;
        document.getElementById('main-balance').innerText = balanceAfterCashout;

                // transacton record
                const p = document.createElement('div')
                p.innerHTML = `
                            <div class="bg-red-300 p-3 rounded-xl mt-3">
                            <h1 class="text-xl font-bold">Cash Out: ${cashOutAmount}</h1>
                            <h1>New Balance: ${balanceAfterCashout}</h1>
                          </div>
                `
                const transactonSection = document.getElementById('transction-record');
                transactonSection.appendChild(p)
    } else {
        alert('wrong input');
    }
    
    // empty the input fields for cash out
    document.getElementById('cashOut-ammount').value = ''
    document.getElementById('cashOut-input').value = ''


    console.log(balanceAfterCashout);
    
});






