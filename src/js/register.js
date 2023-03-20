var name;
var lastName;
var email;
var cel;
var password;
var sex;

var address;
var zipCode;
var number;
var complement;

function register(){
    name = document.getElementById('name').value;
    lastName = document.getElementById('last-name').value;
    email = document.getElementById('email').value;
    cel = document.getElementById('cel').value;
    password = document.getElementById('password').value;

    address = document.getElementById('address').value;
    number = document.getElementById('number').value;
    zipCode = document.getElementById('zip-code').value;
    complement = document.getElementById('complement').value;

    alert(toString());
}

function toString(){
    return "Nome: " + name + " " + lastName +
    "\nE-mail: " + email +
    "\nTelefone: " + cel +
    "\n\nEndereço: " + address +
    "\nNúmero: " + number +
    "\nCEP: " + zipCode +
    "\nComplemento: " + complement;
}