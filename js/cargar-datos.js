var listaReserva = [];

// aidServicio-------------------va aca en el agregarReserva
function agregarReservaSistema(afechaInicio,afechaFinal,ahorarioSalida,acantAdultos,acantNiños){
	var nuevaReserva = {
		fechainicio:afechaInicio,
		fechafinal:afechaFinal,
		horasalida:ahorarioSalida,
		cantidadadultos:acantAdultos,
		cantidadniños:acantNiños
		// id:aidServicio,
	};
	listaReserva.push(nuevaReserva);
	localStorageReserva(nuevaReserva);
}

function obtenerReserva(){
	var storageReserva = localStorage.getItem('localReserva');
	if(storageReserva == null){
		listaReserva = [];
	}else{
		listaReserva = JSON.parse(storageReserva);
	}
	return listaReserva;
}
function localStorageReserva(lreserva){
	localStorage.setItem('localReserva', JSON.stringify(lreserva));
}