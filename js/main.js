'use strict';
console.log('hello main');



function getWhatsAppLink() {
    const phone = document.querySelector('.phone-input').value;
    const phoneNum = formatNumber(phone.trim());
    if (!validateNumber(phoneNum)) return alert('Invalid number!');

    const txt = document.querySelector('.text-input').value;
    const message = txt.replaceAll(/\n/g,'%0D%0A')
    console.log("getWhatsAppLink -> message", message)

    const linkTemplate = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${message}&source=&data=&app_absent=`;
    window.open(linkTemplate, '_blank');
    document.querySelector('.phone-input').value = '';
    // document.querySelector('.text-input').value = '';
}

function formatNumber(num) {
    var formattedNum = '';
    formattedNum = num.split('-').join('');
    if (formattedNum.charAt(0) === '0' && formattedNum.length === 10) {
        formattedNum = '972' + formattedNum.substr(1);
    }
    return formattedNum;
}

function validateNumber(num) {
    if (!num || num.length < 10) return;
    const validDigits = '0123456789+';
    return num.split('').every((digit) => {
        return validDigits.includes(digit);
    });
}

// function setTemplateTxt(temp){
//     console.log(temp);
//     document.querySelector('.text-input').value = temp
// }