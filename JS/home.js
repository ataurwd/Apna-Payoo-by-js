//manage add money and cash out form 
function showAndHide(btnId, showId, hideId){
    document.getElementById(btnId).addEventListener('click', () => {
        const showForm = document.getElementById(showId)
        const hideForm = document.getElementById(hideId)
        showForm.style.display = 'block';
        hideForm.style.display = 'none';
    })
}
showAndHide('add-btn', 'add-money', 'cash-out')
showAndHide('cash-btn', 'cash-out', 'add-money')


//adjust cashout or add money 

const addMoneyBtn = document.getElementById('add-moneyBtn');
//add money function
addMoneyBtn.addEventListener('click', (e) => {
    e.preventDefault()
    //access all id and conver it number
    let accountBalance = document.getElementById('main-balance').innerText;
    let accountNumber = document.getElementById('account-pin').value;
    let addMoneyInput = document.getElementById('addMoney-input').value;
    
    //convert input value string to number 
    let balance = parseFloat(accountBalance)
    let addAmmount = parseFloat(addMoneyInput)

    if(accountNumber == '1234' && addMoneyInput >= 500){
        const newBallance = balance + addAmmount;
        document.getElementById('main-balance').innerText = newBallance;
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
    //access all id and conver it number
    let accountBalance = document.getElementById('main-balance').innerText;
    let accountNumber = document.getElementById('cashOut-input').value;
    let addMoneyInput = document.getElementById('cashOut-ammount').value;
    
    //convert input value string to number 
    let balance = parseFloat(accountBalance)
    let addAmmount = parseFloat(addMoneyInput)

    if(accountNumber == '1234' && addAmmount >= 500){
        const newBallance = balance - addAmmount;
        document.getElementById('main-balance').innerText = newBallance;
    }
    else{
        alert('wrong input')
    }
    //empty the input field
    document.getElementById('addMoney-input').value = ''
    document.getElementById('account-pin').value = ''
})