
var allTareas=[];

function agregarTareas(){

var newTarea = document.getElementById('newTarea').value;
	allTareas.push(newTarea);
	newTarea.innerHTML='';
	escribirTareas();
}

function escribirTareas(){

	var listTareas=document.getElementById('listaTareas');

	listTareas.innerHTML='';

	for(var i=0; i<allTareas.length; i++){
		listTareas.innerHTML+= '<li class="list-group-item"><label><input type="checkbox">' + allTareas[i] + '</input></label><button id="'+ i +'" class="pull-right" onclick="borrarTareas()"><i class="fa fa-trash"></i></button></li>';
	}
}

function borrarTareas(){

	var pos= document.getElementById();
 	allTareas.splice(pos,1);
	escribirTareas();
}
