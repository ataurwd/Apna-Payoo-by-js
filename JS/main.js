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
const cashOutBtn = document.getElementById('cashOut-Btn');

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