import { saveMeasurement, watchTargetState } from './firebase'
import { measureTempHumid, setFurnace } from './hardware'
import { celsiusToFahrenheit } from './helpers'

let targetTemp: number | null = null

watchTargetState(targetState => {
	console.log('Target state changed', targetState.targetTemp)
	targetTemp = targetState.targetTemp
})

async function getAndSaveMeasurement() {
	try {
		const { temperature, humidity } = await measureTempHumid()
		const fahrenheit = celsiusToFahrenheit(temperature)
		saveMeasurement({
			temperature: fahrenheit,
			humidity,
			timeStamp: Date.now(),
		})
	} catch (_error) {
		console.error('Error measuring temperature')
	}
}

async function verifyTemp() {
	try {
		const { temperature, humidity } = await measureTempHumid()
		const fahrenheit = celsiusToFahrenheit(temperature)

		console.log({ targetTemp, currentTemp: fahrenheit })

		if (targetTemp) {
			setFurnace(fahrenheit < targetTemp)
		}
	} catch (_error) {
		console.error('Error measuring temperature')
	}
}

setInterval(verifyTemp, 5_000)

setInterval(getAndSaveMeasurement, 5 * 60 * 1000)
