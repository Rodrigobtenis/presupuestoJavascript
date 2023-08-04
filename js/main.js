
function jugarPresupuesto() {
    alert("Carga de Presupuestos");
    const presupuesto = {
      productos: [],
      agregarProducto: function() {
        const nombre = prompt("Ingrese el nombre del producto:");
        if (!nombre) {
          alert("Por favor ingrese un nombre valido.");
          return;
        }
  
        const precio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
          alert("Por favor ingrese un precio valido.");
          return;
        }
  
        const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        if (isNaN(cantidad) || cantidad <= 0) {
          alert("Por favor ingrese una cantidad valida.");
          return;
        }
  
        const producto = {
          nombre,
          precio,
          cantidad,
        };
  
        this.productos.push(producto);
        alert("Tu producto se agrego correctamente!");
      },
      mostrarPresupuesto: function() {
        if (this.productos.length === 0) {
          alert("No se agregaron productos aun, agregue algun producto para mostrar el presupuesto");
          return;
        }
  
        let totalPresupuesto = 0;
        let detallePresupuesto = "Presupuesto:\n";
  
        this.productos.forEach((producto) => {
          const totalProducto = producto.precio * producto.cantidad;
          totalPresupuesto += totalProducto;
          detallePresupuesto += `${producto.cantidad} x ${producto.nombre} - $${producto.precio} c/u - Total: $${totalProducto}\n`;
        });
  
        detallePresupuesto += `Total del Presupuesto: $${totalPresupuesto.toFixed(2)}`;
        alert(detallePresupuesto);
      },
    };
  
    while (true) {
      const opcion = prompt(
        "Seleccione una opcion:\n1. Agregar Producto\n2. Mostrar Presupuesto\n3. Salir"
      );
  
      switch (opcion) {
        case "1":
          presupuesto.agregarProducto();
          break;
        case "2":
          presupuesto.mostrarPresupuesto();
          break;
        case "3":
          alert("Muchas gracias, vuelva pronto!");
          return;
        default:
          alert("Opcion invalida. Seleccione una opción valida.");
          break;
      }
    }
  }

  jugarPresupuesto();
  