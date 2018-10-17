const axios = require('axios');
const getClima = async(lat,lng)=>{
	let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metrics&appid=f8be7f84847b1ef7e3d4bb19b95b14ae`);
	return respuesta.data.main.temp;
}

module.exports = {
	getClima
}