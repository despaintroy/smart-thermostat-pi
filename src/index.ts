import { measureTempHumid, setFurnace } from './hardware'
import setup from './setup'

setup()

setInterval(() => {
	measureTempHumid()
		.then(({ temperature, humidity }) => {
			setFurnace(humidity > 50.0)
			console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`)
		})
		.catch(err => console.error('Error', err))
}, 3000)
