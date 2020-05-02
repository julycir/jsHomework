// tarea 1

let miComidaPreferida = {
	nombre: 'milanesas',
	cantidadDeVecesQueComi: 1000,
	cantidadDeVecesQueCocinaron: 500, 
	ingredientes: ['pan rallado', 'huevo', 'carne', 'ajo', 'perejil', 'sal'],
}

if (miComidaPreferida.ingredientes.length >5) {
	miComidaPreferida.llevaMasDeCincoIngredientes = 'true' 
}

miComidaPreferida.cantidadDeVecesMeCocine = 50

console.log(miComidaPreferida)

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
