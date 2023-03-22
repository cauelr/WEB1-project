
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
    sex = document.formUser.sex;
    if(!validation() && !validationSex()){
        var print = document.getElementById('text-container');
        print.innerHTML = "Preencha os campos corretamente";
}else{
        alert(toString());
    }
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

function validation(){
    nameBol = name.length > 2;
    lastNameBol = lastName.length > 2;
    emailBol = email.length >= 10;
    celBol = cel.length == 11;
    passwordBol = password.length >= 3;
    addressBol = address.length >= 7;
    numberBol = number.length > 0;
    zipCodeBol = zipCode.length == 8;

    if(nameBol && lastNameBol && emailBol && celBol && passwordBol && addressBol && numberBol && zipCodeBol){
        
        var print = document.getElementById('text-container');
        print.innerHTML = "Cadastrador com sucesso";
        console.log('caiu no sucess')
    }else{
        var print = document.getElementById('text-container');
        print.innerHTML = "Preencha os campos corretamente";
    }
    
}

function validationSex(){
    var sex = document.formUser.sex
    var print = document.getElementById('text-container');
    
    if(!sex[0].checked && !sex[1].checked && !sex[2].checked )
        print.innerHTML = "Erro, Selecione um sexo";
        else{
            return true;
        }
}