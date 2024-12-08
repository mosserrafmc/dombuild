
function addDonationfund(id) {
    const donated = document.getElementById(id).value;
    const donatedAmount = parseFloat(donated);    
    return donatedAmount;

} 

function showTabs (id){
    document.getElementById('history-sec').classList.add('hidden');
    document.getElementById('cards').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}