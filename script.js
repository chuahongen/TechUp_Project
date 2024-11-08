function clearTextBox() {
    document.getElementById("yourMessage").value="";
    event.preventDefault();
}

function testPhoneNum() {
   var validPhoneNum = /^\(6|8|9)\d{7}$/;
   var phoneNum = document.getElementById("yourPhoneNum").value;
   if (validPhoneNum.test(phoneNum)=false) {
    window.alert("Please enter a valid Singapore phone number");
   }
    /* var trueNum = "+6592397028";
    var falsNum = "+6692397028";
    console.log(validPhoneNum.test(trueNum));
    console.log(trueNum);*/
}
