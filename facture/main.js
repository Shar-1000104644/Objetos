/*Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por la información de la propia empresa 
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente
 (similar a la de la empresa), una lista de elementos (cada uno de los cuales
  dispone de descripción, precio, cantidad) y otra información básica de la
   factura (importe total, tipo de iva, forma de pago).

Una vez definidas las propiedades del objeto, añadir un método que calcule 
el importe total de la factura y actualice el valor de la propiedad correspondiente.
 Por último, añadir otro método que muestre por pantalla el importe total de la factura.*/

function Empresa()
{
	this.nombre=;
	this.direccion =;
	this.telefono =;
	this.nif =;
}

function Cliente(_nombre,_direccion,_telefono,_dni)
{
	this.nombre=_nombre;
	this.direccion=_direccion;
	this.telefono=_telefono;
	this.dni=_dni;
}

function Producto(_precio,_cantidad,_descripcion)
{
	this.precio=_precio;
	this.cantidad=_cantidad;
	this.descripcion=_descripcion;
}

function Factura(_total,_igv,_importeTotal)
{
	this.total=_total;
	this.igv=_igv;
	this.importeTotal=_importeTotal
}

var nombreEmp=document.getElementById('nameEmp').value;
var direccionEmp=document.getElementById('addressEmp').value;
var telefonoEmp=document.getElementById('phoneEmp').value;
var nifEmp=document.getElementById('nifEmp').value;

var nombreCli=document.getElementById('nameCli').value;
var direccionCli=document.getElementById('addressCli').value;
var telefonoCli=document.getElementById('phoneCli').value;
var dniCli=document.getElementById('dniCli').value;




