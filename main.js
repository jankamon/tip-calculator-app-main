const tipAmountValue = document.getElementById('tip-amount');
const total = document.getElementById('total');
const resetBtn = document.getElementById('reset');
const peopleInput = document.getElementById('number-of-people');
const errorText = document.getElementById('input-error');

let billValue = 0;
let tipValue = 0;
let numOfPeople = 0;
let tipAmount = 0;
let totalAmount = 0;

const reset = () => {
    document.getElementById('bill').value = '';
    document.getElementById('tip-percent').value = '';
    peopleInput.value = '';
    tipAmountValue.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    billValue, tipValue, numOfPeople, tipAmount, totalAmount = 0;
}

const unlockReset = () => {
    resetBtn.classList.add('active-reset');
}

const countTipAmount = () => {
    if(numOfPeople > 0) {
    errorText.classList.remove('show-error');
    //counts and sets tip amount
    tipAmount = billValue * (tipValue/100) / numOfPeople;
    tipAmountValue.innerHTML = '$' + tipAmount.toFixed(2);
    //counts and sets total
    totalAmount = billValue / numOfPeople + tipAmount;
    total.innerHTML = '$' + totalAmount.toFixed(2);

    unlockReset();
    } else if(numOfPeople < 0) {
        errorText.classList.add('show-error');
    }
}

const saveBill = (value) => {
    billValue = value;
    countTipAmount();
}

const saveTip = (value) => {
    tipValue = value;
    countTipAmount();
}

const saveNumOfPeople = (value) => {
    numOfPeople = value;
    countTipAmount();
}