const donationBtn = document.getElementById('donation-button');
const historyBtn = document.getElementById('history-button');

donationBtn.addEventListener('click', function () {
    document.getElementById('history-sec').setAttribute('class', 'hidden');
    document.getElementById('cards').setAttribute('class', 'hidden');
    donationBtn.style.color = 'white';
    donationBtn.style.backgroundColor = 'green';
    historyBtn.style.color = 'black';
    historyBtn.style.backgroundColor = 'white'


})

historyBtn.addEventListener('click', function () {
    document.getElementById('cards').setAttribute('class', 'hidden');
    historyBtn.style.color = 'white';
    historyBtn.style.backgroundColor = 'green';
    donationBtn.style.color = 'black';
    donationBtn.style.backgroundColor = 'white';

})

document.getElementById('add-donation-n')
    .addEventListener('click', function () {
        const addFunds = addDonationfund('givenAmount');        
        const addingFunds = document.getElementById('adding-funds').innerText;        
        const convertFundAmount = parseFloat(addingFunds); 
        const add = addFunds + convertFundAmount;
        document.getElementById('adding-funds').innerText = add;

        const deductFunds = document.getElementById('deduct-funds').innerText;
        const convertFundsatTop = parseFloat(deductFunds);
        console.log(convertFundsatTop);
        
        const deduct = convertFundsatTop - convertFundAmount;

        
        document.getElementById('deduct-funds').innerText = deduct;

    })