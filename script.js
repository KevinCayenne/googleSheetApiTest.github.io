
// Switch the Register and Login
var TurnToLogin = () => {
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('login-btn').style.transform = "translateX(0px) translateY(0px)";
    document.getElementById('signup-btn').style.transform = "translateX(0px) translateY(10px)";
    document.getElementById('signup-btn').style.backgroundColor = "grey";
    document.getElementById('login-btn').style.backgroundColor = "#97d64f";      
}

var TurnToRegister = () => {
    document.getElementById('register').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('signup-btn').style.transform = "translateX(0px) translateY(0px)";
    document.getElementById('login-btn').style.transform = "translateX(0px) translateY(10px)";
    document.getElementById('login-btn').style.backgroundColor = "grey";
    document.getElementById('signup-btn').style.backgroundColor = "#97d64f";  
}
    
// check if 

$(document).ready(function () {
   $("#txtConfirmPassword").keyup(checkPasswordMatch);
});

function checkPasswordMatch() {
    var password = $("#pwd").val();
    var confirmPassword = $("#txtConfirmPassword").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("<i class='material-icons' style='font-size:15px' >do_not_disturb_on</i> Passwords do not match!").css('color', 'red');
    else
        $("#divCheckPasswordMatch").html("<p style ='color: green'><i class='material-icons' style='font-size:20px;color:green'>done_all</i> Passwords matching!</p>"); 
}

function SendData(){
  var d = new Date();
  $.get("https://script.google.com/macros/s/AKfycbw_Dyluqgim0E5m7SAaCBpU3bUEms6ZiluuaCpURNCuNX2V581j/exec", {
                          "Time": d,
                          "ID": document.getElementById("ID").value,
                          "Password": document.getElementById("pwd").value,
                          "Name": document.getElementById("Name").value,  
                          "Phone": document.getElementById("PhoneNum").value,
                          "Gmail": document.getElementById("email").value,
                          "Year": d.getFullYear(),
                          "Month": d.getMonth() + 1,
                          "Date": d.getDate()
                      },
                      function (data) {
                          document.write("<div>"+data+"</div>");
                          document.write("<input type ='submit' value='回至登入頁面' onClick='window.location.href=window.location.href;'>");
                          document.write("<style>table {font-family: arial, sans-serif;border-collapse: collapse; width: 100%;}td, th {border: 1px solid #dddddd; text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;} input[type=submit] {position: relative; left: 40%; width: 20%; background-color: #4CAF50;  color: white;  padding: 14px 20px; border: none;  border-radius: 4px;  cursor: pointer;  font-size: 20px;} input[type=submit]:hover {background-color: #97d64f;}</style>");
                      });
}

function submit_form(){
  
  event.preventDefault();

  var ID = document.getElementById("ID").value;
  var Password = document.getElementById("pwd").value;
  var Name = document.getElementById("Name").value;
  var Phone = document.getElementById("PhoneNum").value;
  var Gmail = document.getElementById("email").value;
  var passw = document.getElementById('pwd').value;
  var passw2 = document.getElementById('txtConfirmPassword').value;
  var letter = /[a-z]/;
  var upper = /[A-Z]/;
  var number = /[0-9]/;
  
  if( ID == "" || Name == "" || Phone == "" || Gmail == ""){
     return false;
  }

  if(passw.length < 6 || passw != passw2 || !letter.test(passw) || !number.test(passw) || !upper.test(passw)) {
        if(passw.length<6){
        alert("請確認密碼是否有包含六個以上的字元")
        return false;
        }
        if(passw != passw2){
        alert("請確認密碼是否相符")
        return false;
        }
        if(!letter.test(passw)){
        alert("請確認密碼是否包含一個小寫字母");
        return false;
        }
        if(!upper.test(passw)) {
        alert("請確認密碼是否包含一個大寫字母");
        return false;
        }
        if(!number.test(passw)){
        alert("請確認密碼是否至少包含一個數字")
        return false;     
        }
  }
  
 SendData();
}

function Login_submit(){
  $.get("https://script.google.com/macros/s/AKfycbwcvLHvUG31NrsN4d6c6VYQgtEjn-6lzuzDbK0ZQ2NrUW5mBxY/exec", {
                          "ID": document.getElementById("IDInput").value,
                          "Password": document.getElementById("pwdin").value,
                      },
                      function (data) {
                          document.write("<div>"+data+"</div>");
                          document.write("<input type ='submit' value='回至登入頁面' onClick='window.location.href=window.location.href;'>");                          
                          document.write("<style>body, html{ margin: 0; padding: 0; position: relative;} input[type=submit] {text-align: center; position: relative; width: 20%; background-color: #4CAF50;  color: white;  padding: 14px 20px;  left: 40%;  border: none;  border-radius: 4px;  cursor: pointer;  font-size: 20px;}input[type=submit]:hover {background-color: #97d64f;}</style>");
                      });
  $.get("https://script.google.com/macros/s/AKfycbwcvLHvUG31NrsN4d6c6VYQgtEjn-6lzuzDbK0ZQ2NrUW5mBxY/exec", {
                          "ID": document.getElementById("IDInput").value,
                          "Password": document.getElementById("pwdin").value,
                      },
                      function (data) {
                          document.write("<div>"+data+"</div>");
                          document.write("<input type ='submit' value='回至登入頁面' onClick='window.location.href=window.location.href;'>");                          
                          document.write("<style>body, html{ margin: 0; padding: 0; position: relative;} input[type=submit] {text-align: center; position: relative; width: 20%; background-color: #4CAF50;  color: white;  padding: 14px 20px;  left: 40%;  border: none;  border-radius: 4px;  cursor: pointer;  font-size: 20px;}input[type=submit]:hover {background-color: #97d64f;}</style>");
                      });
}


