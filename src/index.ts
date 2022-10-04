import { readSensor } from './hardware'
import setup from './setup'

setup()

setInterval(() => {
	readSensor()
		.then(({ temperature, humidity }) => {
			console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`)
		})
		.catch(err => console.error('Error', err))
}, 3000)
