let precio, continuaCompra, total, mensaje;
const envio = 400;
let compras = [];

do {
  producto = prompt(
    'Buenos días! Qué desea comprar?\nMonstruo, Carpa o Marioneta'
  );
  switch (producto) {
    case 'Monstruo':
      cantidad = prompt('Ingrese cantidad');
      precio = 4000;
      compras.push({
        producto,
        precio: precio * cantidad + envio,
      });
      break;
    case 'Carpa':
      cantidad = prompt('Ingrese cantidad');
      precio = 8000;
      compras.push({
        producto,
        precio: precio * cantidad + envio,
      });
      break;
    case 'Marioneta':
      cantidad = prompt('Ingrese cantidad');
      precio = 2000;
      compras.push({
        producto,
        precio: precio * cantidad + envio,
      });
      break;
    default:
      alert('Este producto no existe');
  }

  continuaCompra = confirm('Desea comprar algo más?');
} while (continuaCompra);

compras.forEach((compra) => {
  mensaje += `Producto: ${compra.producto}, Precio: ${compra.precio} \n`;
});

alert(mensaje);
