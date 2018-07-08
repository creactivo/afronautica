document.querySelector('#btn-enviar').addEventListener('click', guardarReserva);
imprimirReserva();

function guardarReserva() {
	var sfechaInicio = document.querySelector('#textFechainicio').value,
		sfechaFinal = document.querySelector('#textFechaFinal').value,
		shorarioSalida = document.querySelector('#horarioSalida').value,
		scantAdultos = document.querySelector('#cantAdultos').value,
		scantNinos = document.querySelector('#cantNinos').value;

	agregarReservaSistema(sfechaInicio,sfechaFinal,shorarioSalida,scantAdultos,scantNinos);
		
		imprimirReserva();
}
function imprimirReserva(){
	var listReservass = obtenerReserva(),
	tbody = document.querySelector('#tbCarrito tbody');

	tbody.innerHTML = '';

	for(var i = 0; i < listReservass.length; i++){
		var row = tbody.insertRow(i),
			fechainicioCell = row.insertCell(0);
			fechafinalCell = row.insertCell(1);
			horasalidaCell = row.insertCell(2);
			cantidadadultosCell = row.insertCell(3);
			cantidadninosCell = row.insertCell(4);
			eliminarCell = row.insertCell(5);



			fechainicioCell.innerHTML = listReservass[i].fechainicio;
			fechafinalCell.innerHTML = listReservass[i].fechafinal;
			horasalidaCell.innerHTML = listReservass[i].horasalida;
			cantidadadultosCell.innerHTML = listReservass[i].cantidadadultos;
			cantidadninosCell.innerHTML = listReservass[i].cantidadninos;
			eliminarCell.innerHTML = listReservass[i].eliminar;


		var inputEliminar = document.createElement('button');
		inputEliminar.type = 'button';
		inputEliminar.id = 'btnEliminarTabla';
		inputEliminar.name = 'Eliminar';
		inputEliminar.value = listReservass[i].Previous;

		eliminarCell.appendChild(inputEliminar);
function btnEliminarLinia(){
	btnEliminarTabla.delate(nuevaReserva);
}


		tbody.appendChild(row);
	}

}
