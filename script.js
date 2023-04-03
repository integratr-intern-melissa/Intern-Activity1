function validationForm() {
var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var username = document.getElementById('username').value;
var password = document.getElementById('password').value
var confirmpassword = document.getElementById('confirmpassword').value;

// to alert the user when the input field is empty//
if (firstname == "")
{   alert("Please input your Firstname");
}else if(lastname == "")
{   alert("Please input your Lastname");
}else if(username == "")
{   alert("Please input your Username");
}else if(password == "")
{    alert("Please input your Password");
}else if(confirmpassword == ""){
    alert("Please input your Confirm Password");
}
}





