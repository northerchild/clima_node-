const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
	direccion:{
		alias:'d',
		desc:'Dirección de la cuidad para obtener el clima',
		demand:true
	}
}).argv;

let getInfo = async (direccion)=>{
	try {
		let coors = await lugar.getLugarLatLng(direccion)
		let temp = await clima.getClima(coors.lat, coors.lng);
		return `El clima en ${coors.direccion} es de ${temp}`;	
	} catch(e) {
		return `No se pudo encontrar el clima, para la cuidad ${direccion}`;
	}
}

/*lugar.getLugarLatLng(argv.direccion)
	 .then(resp=>{
	 	console.log(resp);
	 })
	 .catch(e => console.log(e));

clima.getClima(40.43425, -3.70755)
	 .then(temp => console.log(temp))
	 .catch(e => console.log(e))*/
getInfo(argv.direccion)
	  .then(mensaje=> console.log(mensaje))
	  .catch(e=> console.log(e));