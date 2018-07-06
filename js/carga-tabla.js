
document.querySelector('#btn-enviar').addEventListener('click', guardarReserva);
imprimirReserva()

function guardarReserva() {
	var sfechaInicio = document.querySelector('#textFechainicio').value,
		sfechaFinal = document.querySelector('#textFechaFinal').value,
		shorarioSalida = document.querySelector('#horarioSalida').value,
		scantAdultos = document.querySelector('#cantAdultos').value,
		scantNiños = document.querySelector('#cantNiños').value;

	agregarReservaSistema(sfechaInicio,sfechaFinal,shorarioSalida,scantAdultos,scantNiños);
		imprimirReserva()
}
function imprimirReserva(){
	var listReserva = obtenerReserva(),
	    tbody = document.querySelector('#tbCarrito tbody');

	tbody.innerHTML = '';

	for(var i = 0; i < listReserva.length; i++){
		var row = tbody.insertRow(i),
			fechainicioCell = row.insertCell(0);
			fechafinalCell = row.insertCell(1);
			horasalidaCell = row.insertCell(2);
			cantidadadultosCell = row.insertCell(3);
			cantidadniñosCell = row.insertCell(4);
			eliminarCell = row.insertCell(5);



		fechainicioCell.innerHTML = listReserva[i].fechainicio;
		fechafinalCell.innerHTML = listReserva[i].fechafinal;
		horasalidaCell.innerHTML = listReserva[i].horasalida;
		cantidadadultosCell.innerHTML = listReserva[i].cantidadadultos;
		cantidadniñosCell.innerHTML = listReserva[i].cantidadniños;
		eliminarCell.innerHTML = listReserva[i].eliminar;


		var inputEliminar = document.createElement('input');
		inputEliminar.type = 'radio';
		inputEliminar.value = listReserva[i].fechainicio;
		eliminarCell.appendChild(inputEliminar);



		tbody.appendChild(row);
	}

}


