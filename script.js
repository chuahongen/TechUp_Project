function testPhoneNum() {
   var validPhoneNum = /^(6|8|9)\d{7}$/;
   var phoneNum = document.getElementById("yourPhoneNum").value;
   /*alert(validPhoneNum.test(phoneNum));*/
   if(validPhoneNum.test(phoneNum)==false){
    alert("Please enter a valid Singapore phone number");
   }
}

function clearTextBox() {
    document.getElementById("yourMessage").value="";
    /*event.preventDefault();*/
}

function validateEmail() {
    var validEmailAdd = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailAdd = document.getElementById("yourEmailAdd").value;
    if(validEmailAdd.test(emailAdd)==false){
        alert("Please enter a valid email address");
    }
}