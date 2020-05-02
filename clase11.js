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