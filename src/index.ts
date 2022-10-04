import { measureTempHumid, setFurnace } from './hardware'
import { celsiusToFahrenheit } from './helpers'
import setup from './setup'

setup()

setInterval(() => {
	measureTempHumid()
		.then(({ temperature, humidity }) => {
			setFurnace(humidity > 50.0)
			console.log(
				`Temperature: ${Math.round(
					celsiusToFahrenheit(temperature)
				)}°F, Humidity: ${Math.round(humidity)}%`
			)
		})
		.catch(err => console.error('Error', err))
}, 3000)
