inputIdName.value = " enter youre name";
inputIdPassword.value = "enter youre password"

function pay() {
    //  payId.innerHTML = "The payment was received"
    checkPay()
}

function checkPay() {
    if (idSumPay.value < 100) {
        alert('The payment was received')

    }
}
