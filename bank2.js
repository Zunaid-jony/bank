// handle deposit button event.
document.getElementById('deposit-button').addEventListener('click', function( ){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmoutText = depositInput.value;
    const depositAmoutt = parseFloat(depositAmoutText);
    //console.log(depositAmout); 




    const depositTotal = document.getElementById('deposit-total');

    const previousDepoitText = depositTotal.innerText;
    const previousDepoitA = parseFloat(previousDepoitText)
    const newDipositTotal = previousDepoitA + depositAmoutt ;

    depositTotal.innerText = newDipositTotal;



    // update balance 
    const balanceTotall = document.getElementById('balance-total');
    const balanceTotallText = balanceTotall.innerText;
    const previousBalanceTotal = parseFloat(balanceTotallText);

    const newDipositTotal2 = previousBalanceTotal + depositAmoutt ;

    balanceTotall.innerText = newDipositTotal2;


    depositInput.value = '';

})