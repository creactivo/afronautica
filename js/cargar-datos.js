var afechaInicio = [],
	afechaFinal = [],
	ahorarioSalida = [],
	acantAdultos = [],
	acantNiños = [];



var elementoBotonRegistrar = document.querySelector('#btn-enviar');

elementoBotonRegistrar.addEventListener('click', registroFecha);




function registroFecha(){
	var nfechaInicio = document.querySelector('#textFechainicio').value,
		nfechaFinal = document.querySelector('#textFechaFinal').value,
		shorarioSalida = document.querySelector('#horarioSalida').value,
		ncantAdultos = document.querySelector('#cantAdultos').value,
		ncantNiños = document.querySelector('#cantNiños').value;

		afechaInicio.push(nfechaInicio);
		afechaFinal.push(nfechaFinal);
		ahorarioSalida.push(shorarioSalida);
		acantAdultos.push(ncantAdultos);
		acantNiños.push(ncantNiños);

		/*localStorage.setItem('Datosde_reserva', JSON.stringify(datosDeReservas));*/

		localStorage.setItem('Fechaini_reserva', JSON.stringify(afechaInicio));
		localStorage.setItem('Fechafinal_reserva', JSON.stringify(afechaFinal));
		localStorage.setItem('horarioSalida_reserva', JSON.stringify(ahorarioSalida));
		localStorage.setItem('adultos_reserva', JSON.stringify(acantAdultos));
		localStorage.setItem('niños_reserva', JSON.stringify(acantNiños));
		

};
