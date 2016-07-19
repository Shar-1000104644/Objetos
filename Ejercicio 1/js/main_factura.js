function Cliente(_rs, _ruc, _direccion)
{
	this.razonSocial = _rs;
	this.ruc = _ruc;
	this.direccion = _direccion;
}

function Producto(_desc, _cantidad, _pu)
{
	this.descripcion = _desc;
	this.cantidad = _cantidad;
	this.precioUnitario = _pu;
	this.calcularTotal = function(){
		var total = this.cantidad * this.precioUnitario;
		return total;
	}
}

function Factura()
{
	this.cliente = null;
	this.productos = [];
	this.precioTotal = 0;
	this.igv = 0;
	this.fecha = null;

	this.actualizarMontos = function()
	{
		this.precioTotal = 0;

		for (var i = 0; i < this.productos.length; i++) {
			this.precioTotal += this.productos[i].calcularTotal();
		}

		this.igv = this.precioTotal * 0.18;
	};
}

//---------- Conexión con interface
var factura1 = new Factura();

console.log(factura1);

function registrarCliente()
{
	var rs = document.getElementById("razon").value;
	var ruc = document.getElementById("ruc").value;
	var direccion = document.getElementById("direccion").value;

	factura1.cliente = new Cliente(rs, ruc, direccion);
	var paso1 = document.getElementById('paso1');
	var paso2 = document.getElementById('paso2');

	// paso1.className += " ocultar";
	paso1.classList.add("ocultar");
	paso2.classList.remove("ocultar");

	console.log(factura1);
}

function agregarProducto()
{
	var producto = document.getElementById("producto").value;
	var cantidad = document.getElementById("cantidad").value;
	var precio = document.getElementById("precio").value;

	var productoN = new Producto(producto, cantidad, precio);

	factura1.productos.push(productoN);
	console.log(factura1);
	updateProductList();
	factura1.actualizarMontos();
}

function updateProductList()
{
	var list = document.getElementById("product-list");

	list.innerHTML = "";

	for (var i = 0; i < factura1.productos.length; i++) {
		list.innerHTML += '<li class="list-group-item"><span class="badge">' + factura1.productos[i].cantidad + ' Und.</span>' + factura1.productos[i].descripcion + ' - S/ ' + factura1.productos[i].precioUnitario + '</li>';
		// list.innerHTML += '<li>' + factura1.productos[i].descripcion + '</li>';
	}
}

function updateFactura()
{
	var c_rs = document.getElementById("client_rs");
	var c_d = document.getElementById("client_address");
	var c_r = document.getElementById("client_ruc");
	var table_products = document.getElementById("table-products");
	var f_t = document.getElementById("factura_total");
	var f_igv = document.getElementById("factura_igv");
	var f_pt = document.getElementById("factura_precio_total");

	var paso2 = document.getElementById('paso2');
	var paso3 = document.getElementById('paso3');

	paso2.classList.add("ocultar");
	paso3.classList.remove("ocultar");

	c_rs.innerHTML = factura1.cliente.razonSocial;
	c_d.innerHTML = factura1.cliente.direccion;
	c_r.innerHTML = factura1.cliente.ruc;
	table_products.innerHTML = '';
	for (var i = 0; i < factura1.productos.length; i++) {
		var c1 = '<td>' + factura1.productos[i].cantidad + '</td>';
		var c2 = '<td>' + factura1.productos[i].descripcion + '</td>';
		var c3 = '<td>' + factura1.productos[i].precioUnitario + '</td>';
		var c4 = '<td>' + factura1.productos[i].calcularTotal() + '</td>';

		table_products.innerHTML += '<tr>' + c1 + c2 + c3 + c4 + '</tr>';
	}

	f_t.innerHTML = factura1.precioTotal;
	f_igv.innerHTML = factura1.igv.toFixed(2);
	f_pt.innerHTML = factura1.precioTotal + factura1.igv;
}
