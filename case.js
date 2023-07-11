

function updateCaseNumber(isIncrase){
    const caseNumberField = document.getElementById('case-nmbr-feild');
    const caseNumberFieldStr = caseNumberField.value;
    const preCaseNumber = parseInt(caseNumberFieldStr);

    let  newCaseNumber ;

    if(isIncrase){
        newCaseNumber = preCaseNumber + 1;
    }
    else{
        newCaseNumber = preCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
    
}
function updateCasetotalPrice(newCaseNumber){
    
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('casePriceTottal');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-cse-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true);
   updateCasetotalPrice(newCaseNumber);
   calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    
    const newCaseNumber = updateCaseNumber(false);
    updateCasetotalPrice(newCaseNumber);
    calculateSubTotal();
})

