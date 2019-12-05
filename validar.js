
function validar(){
	var email = document.getElementById('email').value
	var senha = document.getElementById('senha1').value

	if (senha == ""){
		alert("Preencha o campo 'senha'!")
	}
	else if (email == "" || email.indexOf('@') === -1 ||  email.indexOf(".") === -1 || email.length < 5){
		alert("Preencha o campo com um email válido!");
	}else{
		return true;
	}
}
