const donationBtn = document.getElementById('donation-button');
const historyBtn = document.getElementById('history-button');

donationBtn.addEventListener('click', function () {
    showTabs('cards');
    // document.getElementById('cards').removeAttribute('class', 'hidden');    
    donationBtn.style.color = 'white';
    donationBtn.style.backgroundColor = 'green';
    historyBtn.style.color = 'black';
    historyBtn.style.backgroundColor = 'white'


})

historyBtn.addEventListener('click', function () {
    showTabs('history-sec');
    // document.getElementById('history-sec').removeAttribute('class', 'hidden');
    historyBtn.style.color = 'white';
    historyBtn.style.backgroundColor = 'green';
    donationBtn.style.color = 'black';
    donationBtn.style.backgroundColor = 'white';

})

document.getElementById('add-donation-n')
    .addEventListener('click', function () {
        const addFunds = addDonationfund('givenAmount');
        if (addFunds > 0) {

            const addingFunds = document.getElementById('adding-funds').innerText;
            const convertFundAmount = parseFloat(addingFunds);
            const add = addFunds + convertFundAmount;

            const deductFunds = document.getElementById('deduct-funds').innerText;
            const convertFundsatTop = parseFloat(deductFunds);
            const deduct = convertFundsatTop - addFunds;


            document.getElementById('deduct-funds').innerText = deduct;
            document.getElementById('adding-funds').innerText = add;

            document.getElementById('givenAmount').value = '';

            const p = document.createElement('p');            
            const now = new Date();
            
            p.innerText = `
            Donated ${addFunds} BDT for Flood at Noakhali.
            
            At ${now}
            `
            document.getElementById('transactionHistory').appendChild(p);

        }
        else {
            alert('Please input a valid Amount');
        }

    })

document.getElementById('add-donation-f')
    .addEventListener('click', function () {
        const addFunds = addDonationfund('givenAmount-2');
        if (addFunds > 0) {

            const addingFunds = document.getElementById('feni-adding-fund').innerText;
            const convertFundAmount = parseFloat(addingFunds);
            const add = addFunds + convertFundAmount;

            const deductFunds = document.getElementById('deduct-funds').innerText;
            const convertFundsatTop = parseFloat(deductFunds);
            const deduct = convertFundsatTop - addFunds;


            document.getElementById('deduct-funds').innerText = deduct;
            document.getElementById('feni-adding-fund').innerText = add;

            document.getElementById('givenAmount-2').value = '';

            const p = document.createElement('p');
            const now = new Date();
            p.innerText = `
            Donated ${addFunds} BDT for Flood at Feni.
            
            ${now} 
            `
            document.getElementById('transactionHistory').appendChild(p);


        }
        else {
            alert('Please input a valid Amount');
        }

    })

document.getElementById('add-donation-q')
    .addEventListener('click', function () {
        const addFunds = addDonationfund('givenAmount-3');
        if (addFunds > 0) {

            const addingFunds = document.getElementById('quata-adding-funds').innerText;
            const convertFundAmount = parseFloat(addingFunds);
            const add = addFunds + convertFundAmount;

            const deductFunds = document.getElementById('deduct-funds').innerText;
            const convertFundsatTop = parseFloat(deductFunds);
            const deduct = convertFundsatTop - addFunds;


            document.getElementById('deduct-funds').innerText = deduct;
            document.getElementById('quata-adding-funds').innerText = add;

            document.getElementById('givenAmount-3').value = '';

            const p = document.createElement('p');
            const now = new Date();
            p.innerText = `
            Donated ${addFunds} BDT for Quota Movement.
            
            ${now} 
            `
            document.getElementById('transactionHistory').appendChild(p);


        }
        else {
            alert('Please input a valid Amount');
        }

    })