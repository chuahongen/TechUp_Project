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

function loadTechCourse() {
    var list1 = document.getElementById("tech_Courses_Name_Registration");
    var list2 = document.getElementById("tech_Courses_Date_Registration");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    if (list1SelectedValue == "Incident_Response_and_Hacking_Tools") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("6 - 11 January 2025", "6_11 January 2025");
        list2.options[2] = new Option("3 - 8 February 2025", "3_8 February 2025");
    } else if (list1SelectedValue == "Cyber_Threat_Intelligence") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("13 - 18 January 2025", "13_18 January 2025");
        list2.options[2] = new Option("10 - 15 February 2025", "10_15 February 2025")
    }