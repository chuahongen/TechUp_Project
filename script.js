/*function testPhoneNum() {
   var validPhoneNum = /^(6|8|9)\d{7}$/;
   var phoneNum = document.getElementById("yourPhoneNum").value;
   
   if(validPhoneNum.test(phoneNum)==false){
    alert("Please enter a valid Singapore phone number");
   }
}*/

function clearTextBox() {
    document.getElementById("yourMessage").value="";
    /*event.preventDefault();*/
}

/*function validateEmail() {
    var validEmailAdd = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailAdd = document.getElementById("yourEmailAdd").value;
    if(validEmailAdd.test(emailAdd)==false){
        alert("Please enter a valid email address");
    }
}*/

function validateEmail_PhoneNum() {
    var validEmailAdd = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailAdd = document.getElementById("yourEmailAdd").value;
    var validPhoneNum = /^(6|8|9)\d{7}$/;
    var phoneNum = document.getElementById("yourPhoneNum").value;
    if (validEmailAdd.test(emailAdd)==false && validPhoneNum.test(phoneNum)==false) {
        alert("Please enter a valid email address and Singapore phone number");
    }
    else if (validEmailAdd.test(emailAdd)==true && validPhoneNum.test(phoneNum)==false) {
        alert("Please enter a valid Singapore phone number");
    }
    else if (validEmailAdd.test(emailAdd)==false && validPhoneNum.test(phoneNum)==true) {
        alert("Please enter a valid email address");
    } 
    else {
        alert("Thank you for your interest. We will get back to you ASAP");
    }
}

function loadTechCourseDates() {
    var list1 = document.getElementById("tech_Courses_Name_Registration");
    var list2 = document.getElementById("tech_Courses_Date_Registration");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    if (list1SelectedValue == "Incident_Response_and_Hacking_Tools") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("6 - 11 January 2025", "6_11_January_2025");
        list2.options[2] = new Option("3 - 8 February 2025", "3_8_February_2025");
    }
    else if (list1SelectedValue == "Cyber_Threat_Intelligence") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("13 - 18 January 2025", "13_18_January_2025");
        list2.options[2] = new Option("10 - 15 February 2025", "10_15_February_2025");
    }
    else if (list1SelectedValue == "Enterprise_Penetration_Testing") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("20 - 25 January 2025", "20_25_January_2025");
        list2.options[2] = new Option("17 - 22 February 2025", "17_22_February_2025");
    }
    else if (list1SelectedValue == "Malware Analysis_Tools_and_Techniques") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("24 - 29 March 2025", "24_29_March_2025");
    }
}

function loadLdrShipCourseDates() {
    var list1 = document.getElementById("ldr_Ship_Courses_Name_Registration");
    var list2 = document.getElementById("ldr_Ship_Courses_Date_Registration");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    if (list1SelectedValue == "Foundations_in_Cybersecurity_Leadership") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("6 - 10 January 2025", "6_10_January_2025");
        list2.options[2] = new Option("3 - 7 February 2025", "3_7_February_2025");
    }
    else if (list1SelectedValue == "Intermediate_Cybersecurity_Management") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("13 - 17 January 2025", "13_17_January_2025");
        list2.options[2] = new Option("10 - 14 February 2025", "10_14_February_2025");
    }
    else if (list1SelectedValue == "Advanced_Cybersecurity_Strategy") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("20 - 24 January 2025", "20_24_January_2025");
        list2.options[2] = new Option("17 - 21 February 2025", "17_21_February_2025");
    }
    else if (list1SelectedValue == "Executive_Cybersecurity_Leadership") {
        list2.options.length = 0;
        list2.options[0] = new Option("--Select--", "Select");
        list2.options[1] = new Option("24 - 28 February", "24_28_February_2025");
    }
}