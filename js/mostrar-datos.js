
document.querySelector('#btn-enviar').addEventListener('click',salvarCampo);


impTablaCampos()

function salvarCampo(){
	var sFechaini = document.querySelector('#textFechaini').value,
		sFechafinal = document.querySelector('#textFechafinal').value,
		sElemento = document.querySelector('#textElemento').value,
		sNombre = document.querySelector('#textNombre').value,
		sApellido = document.querySelector('#textApellido').value,
		sNacionalidad = document.querySelector('#textNacionalidad').value,
		sEmail = document.querySelector('#textEmail').value;



		addCamposSistem(sFechaini,sFechafinal,sElemento,sApellido,sNacionalidad,sEmail,);
impTablaCampos()
}


function impTablaCampos(){
	
		var list = JSON.parse(localStorage.getItem('newCamposset'));

		var tbody = document.querySelector('#tbCampos tbody');

	tbody.innerHTML='';

	for(var i=0; i<list.length; i++){
		var row = tbody.insertRow(i);
		var	ipCell = row.insertCell(0);
			ipCell.innerHTML = list[i].ip;

		tbody.appendChild(row);
	}


}

 function get_ip(obj){
            var obj_ip =  localStorage.setItem('textIp', JSON.stringify(obj.ip));          
        }



llenarTabla();


function llenarTabla() {
	var tbody = document.querySelector('#tblLibros tbody');
	tbody.innerHTML='';


	var aEmail = JSON.parse(localStorage.getItem('lemail')),
		aPassword = JSON.parse(localStorage.getItem('lpassword')),
		aAddress = JSON.parse(localStorage.getItem('laddress'));




		var nCanDatos = aEmail.length;

		for (var i = 0; i < nCanDatos; i++) {
			
			var fila = document.createElement('tr');


			var celdaemail = document.createElement('td'),
			 	celdapassword = document.createElement('td'),
			 	celdaaddress = document.createElement('td');

			 var nodetextemail=document.createTextNode(aEmail[i]);
			 	 nodetextpassword=document.createTextNode(aPassword[i]);
			 	 nodetextaddress=document.createTextNode(aAddress[i]);


			 	 celdaemail.appendChild(nodetextemail);
			 	 celdapassword.appendChild(nodetextpassword);
			 	 celdaaddress.appendChild(nodetextaddress);

			 	 fila.appendChild(celdaemail);
			 	 fila.appendChild(celdapassword);
			 	 fila.appendChild(celdaaddress);

			 	 tbody.appendChild(fila);


		}

};

