const loginBtn = document.getElementById('submit-btn');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-code').value;
    const mainForm = document.getElementById('main-form');
    const phoneWallet = document.getElementById('phone-wallet')
    if(phoneNumber === '56' && pinNumber === '1234'){
        mainForm.style.display = 'none';
        phoneWallet.style.display = 'block'
    }
    else{
        alert('login fail')
    }
})