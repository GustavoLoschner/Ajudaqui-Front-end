//MÓDULOS

function showPassword(event){
    if (document.getElementById('password').type === "password") {
        var icon = document.getElementById('passIcon');
        icon.textContent = "visibility_off";
        document.getElementById('password').type = "text";
      } else {
        document.getElementById('passIcon').textContent = "visibility";
        document.getElementById('password').type = "password";
      }
}

function verifyForm(event) {
    event.preventDefault();
    var form = document.getElementById('form');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var cep = document.getElementById('cep').value;
    var num = document.getElementById('numero').value;
    var tel = document.getElementById('telefone').value;
    var cel = document.getElementById('celular').value;
    if (name === "" || email === "" || pass === "" || cep === "" || num === "" || (tel === "" && cel === "")) {
        verifyFields();
    } else {
        authenticateFields();
    }
}

function verifyFields(){
    var fields = document.querySelectorAll('input');
    var warnings = document.querySelectorAll('.warning');
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            warnings[i].style.visibility="visible";
            fields[i].style.borderColor="red";
        }
        else{
            warnings[i].style.visibility="hidden";
            fields[i].style.borderColor="";
        }
    }
    setTimeout(verifyFields, 1000);
}

function authenticateFields(){
    if (isValidEmail(email)===true){
        fields[1].style.borderColor="yellow";    
    }
    //email
    //cep
    //tel
    //cel
}