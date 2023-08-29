function obtenerEleccionSeguro() {
    var precioSeguro1 = 450;
    var precioSeguro2 = 600;
    var precioSeguro3 = 1000;

    var eleccion = parseInt(prompt("Elige un seguro de viaje:\n1. Seguro Básico ($" + precioSeguro1 + ")\n2. Seguro Estándar ($" + precioSeguro2 + ")\n3. Seguro Premium ($" + precioSeguro3 + ")"));

    if (eleccion === 1 || eleccion === 2 || eleccion === 3) {
        return eleccion;
    } else {
        console.log("Elección inválida.");
        return null;
    }
}

function obtenerMetodoPago() {
    var metodoPago = prompt("Elige un método de pago:\n1. Efectivo\n2. Crédito\n3. Débito");

    if (metodoPago === "1" || metodoPago === "2" || metodoPago === "3") {
        return metodoPago;
    } else {
        console.log("Método de pago inválido.");
        return null;
    }
}

function calcularDescuento(metodoPago, precioBase) {
    var descuento = 0;

    if (metodoPago === "1") {
        descuento = precioBase * 0.1;
    } else if (metodoPago === "2") {
        descuento = precioBase * 0.05;
    }

    return descuento;
}

function mostrarResumen(eleccion, precioBase, descuento, metodoPagoTexto, precioFinal) {
    console.log("Resumen de la compra:");
    console.log("Seguro elegido: " + eleccion);
    console.log("Precio base: $" + precioBase);
    
    if (descuento > 0) {
        console.log("Descuento: $" + descuento.toFixed(2) + " (" + metodoPagoTexto + ")");
    }
    
    console.log("Precio final: $" + precioFinal.toFixed(2));
}

function main() {
    var eleccion = obtenerEleccionSeguro();

    if (eleccion !== null) {
        var precioSeguro;
        
        if (eleccion === 1) {
            precioSeguro = 450;
        } else if (eleccion === 2) {
            precioSeguro = 600;
        } else if (eleccion === 3) {
            precioSeguro = 1000;
        }
        
        var metodoPago = obtenerMetodoPago();

        if (metodoPago !== null) {
            var descuento = calcularDescuento(metodoPago, precioSeguro);
            var metodoPagoTexto = metodoPago === "1" ? "Efectivo" : (metodoPago === "2" ? "Crédito" : "Débito");
            var precioFinal = precioSeguro - descuento;

            mostrarResumen(eleccion, precioSeguro, descuento, metodoPagoTexto, precioFinal);
        }
    }
}

