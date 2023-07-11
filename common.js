// for subTottal
function getTextElementValueById(elementId){
    const phoneTotalelement = document.getElementById(elementId)
    const phoneTotalelementstr = phoneTotalelement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalelementstr);
    return currentPhoneTotal;
}
function setTextElementById (elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal =getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('casePriceTottal');

    const currentSubtotal = currentCaseTotal + currentPhoneTotal;
    // for sub-total
    setTextElementById('sub-total',currentSubtotal);
    // calculate-tax
    const taxAmountstr = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount =parseFloat(taxAmountstr)
    setTextElementById('tax-amount',taxAmount);

    // final Total
    const finalTotal = taxAmount + currentSubtotal;
    setTextElementById('final-total',finalTotal)
}