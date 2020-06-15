var fecha = new Date();
var dia = fecha.getDate();
var dia_semana = fecha.getDay();
var mes =fecha.getMonth();
var anio = fecha.getFullYear();

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "extra",]
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nobiembre", "Diciembre"]


console.log(dias[dia_semana-1]);
console.log(meses[mes]);

document.write('<h1>'+dias[dia_semana-1]+' '+dia+' de '+meses[mes]+' del '+anio+'</h1>')


/* 
document.write('<h1>' +fecha.getDate()+'-'+
fecha.getUTCMonth()+'-'+fecha.getFullYear()+'</h1>');
**/
