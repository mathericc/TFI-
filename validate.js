function validate(){
	var nome = document.getElementById('nome').value
	var email = document.getElementById('email').value
	var senha = document.getElementById('senha1').value
	var senha2 = document.getElementById('senha2').value

	if (nome == "" || nome.replace(" ","") == ""){
		alert('Preencha o campo nome!');
	}

	else if (email == "" || email.indexOf('@') === -1 ||  email.indexOf(".") === -1 || email.length < 5){
		alert("Preencha o campo do email corretamente!");
	}

	else if (senha != senha2 ) {
		alert("As senhas não coincidem!");

	}
	else if (senha == ""){
		alert("Preencha o campo da senha!");
	}
	else if (senha2 == ""){
		alert("Preencha o campo da confirmação de senha!");
	}
	else {
		console.log("aaaaaa");
		return true;
	}
}
