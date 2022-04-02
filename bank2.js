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

    //const newDipositTotal2 = previousBalanceTotal + previousDepoitA ;

    balanceTotall.innerText = previousBalanceTotal + previousDepoitA;


    depositInput.value = '';

})
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountTex = withdrawInput.value;
    const windowAmount1 = parseFloat( withdrawAmountTex);
    //console.log(withdrawAmountTex);


// update withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + windowAmount1 ;

    // update balance withdraw 
    const balanceTotall = document.getElementById('balance-total');
    const balanceTotallText = balanceTotall.innerText;
    const previousBalanceTotal = parseFloat(balanceTotallText);

    //const newDipositTotal2 = previousBalanceTotal + previousDepoitA ;

    balanceTotall.innerText = previousBalanceTotal - windowAmount1;
    withdrawInput.value = '';


    depositInput.value = '';





    withdrawInput.value = '';
    //console.log('abar pais re')
    //const withdrawInput = document.getElementById('withdraw-input');






    //const totalwithdrwTex = withdrawInput.value;


    //console.log(totalwithdrwTex);
    // const previousWithdroTotal = parseFloat(totalwithdrwTex);
    // withdrawInput.innerText = previousWithdroTotal - previousBalanceTotal ;

   
})