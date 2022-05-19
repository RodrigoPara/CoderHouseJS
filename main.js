let producto = prompt("Ingrese producto: ");
let cantidadProducto = prompt("Ingrese cantidad Producto - Minimo 3 : ");

while (producto != "" && cantidadProducto != "") {
    if (cantidadProducto > 3) {
        alert("Usted agrego acaba de agregar el producto : " +producto+ "\nCantidad: "+cantidadProducto);        
        break;
    }else{
        cantidadProducto = prompt("Vuelva a ingresar cantidad, minimo 3 : ");
    }
}
alert("No ingreso ningun producto ni cantidad");