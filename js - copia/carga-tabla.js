var camposList = [];

function addCamposSistem(aFechaini,aFechafinal,aElemento,aNombre,aApellido,aNacionalidad,aEmail) {

	var newCampos = {
		nombre: anombre,
		email:aemail
	};

camposList.push(newCampos);

localStorage.setItem("newCamposset", JSON.stringify(newCampos));


}

var aFechaini =[],
	aFechafinal =[],
	aElemento =[],
	aNombre =[],
	aApellido =[],
	aNacionalidad =[],
	aEmail =[];



	if(localStorage.getItem('nNombre')!= null){
		aFechaini = JSON.parse(localStorage.getItem('nFechaini'));
		aFechafinal = JSON.parse(localStorage.getItem('nFechafinal'));
		aElemento = JSON.parse(localStorage.getItem('nElemento'));
		aNombre = JSON.parse(localStorage.getItem('nNombre'));
		aApellido = JSON.parse(localStorage.getItem('nApellido'));
		aNacionalidad = JSON.parse(localStorage.getItem('nNacionalidad'));
		aEmail = JSON.parse(localStorage.getItem('nEmail'));
	}


var elementoBotonRegistrar = document.querySelector('#btn-enviar');

	elementoBotonRegistrar.addEventListener('click', registrarLibro);


function registrarLibro() {
	var bFechaini = document.querySelector('#inputFechaini').value,
		bFechafinal document.querySelector('#inputFechafinal').value,
		bElemento document.querySelector('#inputElemento').value,
		bNombre document.querySelector('#inputNombre').value,
		bApellido document.querySelector('#inputApellido').value,
		bNacionalidad document.querySelector('#inputNacionalidad').value,
		bEmail document.querySelector('#inputEmail').value;

		aFechaini.push(bEmail);
		aFechafinal.push(bEmail);
		aElemento.push(bEmail);
		aNombre.push(bEmail);
		aApellido.push(bEmail);
		aNacionalidad.push(bEmail);
		aEmail.push(bEmail);


	localStorage.setItem('lemail', JSON.stringify(aFechaini));
	localStorage.setItem('lpassword', JSON.stringify(aFechafinal));
	localStorage.setItem('laddress', JSON.stringify(aElemento));
	localStorage.setItem('laddress', JSON.stringify(aNombre));
	localStorage.setItem('laddress', JSON.stringify(aApellido));
	localStorage.setItem('laddress', JSON.stringify(aNacionalidad));
	localStorage.setItem('laddress', JSON.stringify(aEmail));
};

