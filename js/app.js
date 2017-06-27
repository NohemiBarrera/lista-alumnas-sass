var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $listaAsistencia = $("#lista-asistencia");

var cargarPagina = function(){
	cargarAlumnas();

};

var cargarAlumnas = function(){
	$.getJSON(api.id)
};


