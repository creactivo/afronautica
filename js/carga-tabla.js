function llenarTabla() {
	document.querySelector('#tbCarrito tbody');
	tbody = '';

var afechaInicio = JASON.parse(localStorage.getItem('Fechaini_reserva'));
	afechaFinal =  JASON.parse(localStorage.getItem('Fechafinal_reserva'));
	ahorarioSalida = JASON.parse(localStorage.getItem('horarioSalida_reserva'));
	acantAdultos = JASON.parse(localStorage.getItem('adultos_reserva'));
	acantNiños = JASON.parse(localStorage.getItem('niños_reserva'));
	
	var nReserva = afechaInicio.length;
	for(var i = 0; i < nReserva; i++ ){
		var fila = document.createElement('tr');

		var celdafechaInicio = document.createElement('td'),
			celdafechaFinal = document.createElement('td'),
			celdahorarioSalida = document.createElement('td'),
			celdacantAdultos = document.createElement('td'),
			celdacantNiños = document.createElement('td');


		var nodefechaInicio=document.createTextNode(afechaInicio[i]),
			nodefechaFinal=document.createTextNode(afechaFinal[i]),
			nodehorarioSalida=document.createTextNode(ahorarioSalida[i]),
			nodecantAdultos=document.createTextNode(acantAdultos[i]),
			nodecantNiños=document.createTextNode(acantNiños[i]);

			celdafechaInicio.appendChild(nodefechaInicio),
			celdafechaFinal.appendChild(nodefechaFinal),
			celdahorarioSalida.appendChild(nodehorarioSalida),
			celdacantAdultos.appendChild(nodecantAdultos),
			celdacantNiños.appendChild(nodecantNiños);

			fila.appendChild(celdafechaInicio),
			fila.appendChild(celdafechaFinal),
			fila.appendChild(celdahorarioSalida),
			fila.appendChild(celdacantAdultos),
			fila.appendChild(celdacantNiños);

			tbody.appendChild(fila);

	}
}
