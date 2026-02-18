document.getElementById('login-btn').addEventListener('click', function(){
// 1- get the Mobile Number input
const numberInput = document.getElementById('input-number');
const contactNumber = numberInput.value;
console.log(contactNumber);

// 2- get the pin input 
const inputPin = document.getElementById('input-pin');
const pin = inputPin.value;
console.log(pin);
// 3- match pin & mobile number
if(contactNumber == '01234567890' && pin == '1234'){
    // 3-1 true ::: >> alert > Homepage
    alert('Login Success');
    window.location.assign("./home.html")
}
// 3-2 false ::: >> alert > rerutn 
else{
    alert("Login Faild");
    return;
}
});