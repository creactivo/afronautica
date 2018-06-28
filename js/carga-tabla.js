var camposList = [];

function addCamposSistem(aFechaini,aFechafinal,aElemento,aNombre,aApellido,aNacionalidad,aEmail) {

	var newCampos = {
		fechaini: aFechaini,
		fechafinal: aFechafinal,
		nombre: aElemento,
		nombre: aNombre,
		apellido: aApellido,
		nacionalidad: aNacionalidad,
		email:aEmail
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

		aFechaini.push(bFechaini);
		aFechafinal.push(bFechafinal);
		aElemento.push(bElemento);
		aNombre.push(bNombre);
		aApellido.push(bApellido);
		aNacionalidad.push(bNacionalidad);
		aEmail.push(bEmail);


	localStorage.setItem('nFechaini', JSON.stringify(aFechaini));
	localStorage.setItem('nFechafinal', JSON.stringify(aFechafinal));
	localStorage.setItem('nElemento', JSON.stringify(aElemento));
	localStorage.setItem('nNombre', JSON.stringify(aNombre));
	localStorage.setItem('nApellido', JSON.stringify(aApellido));
	localStorage.setItem('nNacionalidad', JSON.stringify(aNacionalidad));
	localStorage.setItem('nEmail', JSON.stringify(aEmail));
};

