function Persona(_nombre, _apellido)
{
	this.nombre = _nombre;
	this.apellido = _apellido;
	this.email = '';
	this.peinado = '';
	this.saludar = function(){
		console.log('Hola, soy ' + this.nombre);
	};
}

var contenedor = document.getElementById('container');


var persona1 = new Persona("Daniela", "Alvarez");
persona1.email = "daniela@gmail.com";
persona1.peinado = "Desconocido";

var persona2 = new Persona("Sheyla", "Anicama");
persona2.email = "sheyla@gmail.com";
persona2.peinado = "Desconocido";

var persona3 = new Persona("Elizabeth", "Quispe");

persona3.saludar();
persona1.saludar();
persona2.saludar();

console.log(persona1);
console.log(persona2);

function crearInput(_value)
{
	if(!_value)
		_value = "Default";

	contenedor.innerHTML += '<input type="text" value="' + _value + '">';
}
