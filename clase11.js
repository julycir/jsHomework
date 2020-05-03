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

// tarea 4 IF

function resultadoDeExamen(notaDeExamen) {
	if (notaDeExamen<4) {
		return 'aplazado'
	} else if (notaDeExamen>=4 && notaDeExamen<=6) {
		return 'aRecuperar'
	} else if (notaDeExamen>6 && notaDeExamen<10) {
		return 'aprobado'
	} else (notaDeExamen=10) 
		return 'sobresaliente'	
}

const persona1 = {
	madre1: 'madre',
	padre1: 'padre',
}
const persona2 = {
	madre2: 'madre',
	padre2: 'padre',
}

function sonHermanos(persona1, persona2) {
	if (persona1.madre1 && persona1.padre1 === persona2.madre2 && persona2.padre2) {
		return true
	}
}

function contarEspacios(texto) {
	return texto.search((' '))
}

contarEspacios('Hola mi amor, quiero saber si llegaste.')
