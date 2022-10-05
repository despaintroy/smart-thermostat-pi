import { watchTargetState } from './firebase'
import { measureTempHumid, setFurnace } from './hardware'
import { celsiusToFahrenheit } from './helpers'

let targetTemp: number | null = null

watchTargetState(targetState => {
	console.log('Target state changed', targetState.targetTemp)
	targetTemp = targetState.targetTemp
})

async function verifyTemp() {
	try {
		const { temperature, humidity } = await measureTempHumid()
		const fahrenheit = celsiusToFahrenheit(temperature)

		console.log({ targetTemp, fahrenheit })

		if (targetTemp) {
			setFurnace(fahrenheit < targetTemp)
		}
	} catch (_error) {
		console.error('Error measuring temperature')
	}
}

setInterval(verifyTemp, 3000)
