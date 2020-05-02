// tarea 2

function calcularAreaRectangulo(base, altura) {
	const areaRectangulo = base*altura
	return areaRectangulo
}

function calcularPrecioTotal(precioUnitario, cantidadDeUnidades, costoDeEnvio) {
	const PrecioTotal = precioUnitario*cantidadDeUnidades+costoDeEnvio
	return PrecioTotal
}

function dejarPasar(edad) {
	if (edad>=18) {
		return true
	} else {
		return false
	}
}