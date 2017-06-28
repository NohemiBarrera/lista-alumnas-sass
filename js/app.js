var cargarPagina = function(){
	cargarAlumnas();

};

var nuevaAlumna = "";
var $listaAsistencia = $("#lista-asistencia");
var plantilla = '<li>***nombre***<input type="checkbox"> </li>';

var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var cargarAlumnas = function(){
	$.getJSON(api.id, function(alumnas){
		alumnas.forEach(mostrarAlumnas);
	});
};

var mostrarAlumnas =  function(alumna){
	var nombre = alumna.name;
	var apellidoPaterno = alumna.pLastName;
	var apellidoMaterno = alumna.mLastName;
	nuevaAlumna = plantilla.replace("***nombre***", nombre + " " + apellidoPaterno + " " + apellidoMaterno + ".");
	$listaAsistencia.append(nuevaAlumna);
};

$(document).ready(cargarPagina);





