var listaReserva = [];

// aidServicio-------------------va aca en el agregarReserva
function agregarReservaSistema(afechaInicio,afechaFinal,ahorarioSalida,acantAdultos,acantNinos){
	var nuevaReserva = {
		fechainicio : afechaInicio,
		fechafinal : afechaFinal,
		horasalida : ahorarioSalida,
		cantidadadultos : acantAdultos,
		cantidadninos : acantNinos
		// id:aidServicio,
	};

	listaReserva.push(nuevaReserva);
	localStorageReserva(listaReserva);
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
function localStorageReserva(lafroReserva){
	localStorage.setItem('localReserva', JSON.stringify(lafroReserva));
}