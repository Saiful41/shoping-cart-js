function updatePhoneNumber(isIncrase){
    const phoneNumberField = document.getElementById('phone-field');
    const phoneNumberStr = phoneNumberField.value;
    const prephoneNumber = parseInt(phoneNumberStr);

    let newPhonenumber;
    if(isIncrase){
        newPhonenumber = prephoneNumber + 1;
    }
    else{
        newPhonenumber = prephoneNumber - 1;
    }
    phoneNumberField.value = newPhonenumber;
    return newPhonenumber;
}
function updatePhoneTotalPrice(newPhonenumber){
    const phoneTotalprice = newPhonenumber * 1219;
    const phoneTotalelement = document.getElementById('phone-total');
    phoneTotalelement.innerText =phoneTotalprice;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhonenumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhonenumber);
    // calculate subtotal
   calculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhonenumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhonenumber)
    calculateSubTotal();
})
