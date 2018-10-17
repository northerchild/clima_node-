const axios = require('axios');

const getLugarLatLng = async(direccion)=>{
	let encodedUrl = encodeURI(direccion);
	let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`)

	if (respuesta.data.status === 'ZERO_RESULTS') {
		throw new Eroor (`No hay resultados para la cuidad ${direccion}`);
	}

			let location = respuesta.data.results[0];
			let coors = location.geometry.location;
			//console.log(`Dirección: ${location.formatted_address}`);
			//console.log(`Latitud: ${location.geometry.location.lat}`);
			//console.log(`Longitud: ${location.geometry.location.lng}`);
			//console.log(JSON.stringify(respuesta.data, undefined, 2));

	return{
		direccion: location.formatted_address,
		lat: coors.lat,
		lng: coors.lng
	}
}

module.exports = {
	getLugarLatLng
}