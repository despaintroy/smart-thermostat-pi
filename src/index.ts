import { promises, SensorType } from 'node-dht-sensor'
import * as dotenv from 'dotenv'
dotenv.config()

const { read, initialize, setMaxRetries } = promises

const SENSOR_TYPE = Number(process.env.SENSOR_TYPE) as SensorType
const SENSOR_PIN = Number(process.env.MOCK_ENVIRONMENT)
const MOCK_ENVIRONMENT = process.env.MOCK_ENVIRONMENT?.toLowerCase() === 'true'

if (SENSOR_TYPE !== 11 && SENSOR_TYPE !== 22) {
	throw new Error(
		'SENSOR_TYPE must be 11 or 22. See https://www.npmjs.com/package/node-dht-sensor'
	)
}

if (isNaN(SENSOR_PIN)) {
	throw new Error('SENSOR_PIN must be a number')
}

setMaxRetries(10)
// initialize(SENSOR_TYPE, SENSOR_PIN)

initialize({
	test: {
		fake: {
			temperature: 21,
			humidity: 60,
		},
	},
})

read(SENSOR_TYPE, SENSOR_PIN)
	.then(({ temperature, humidity }) => {
		console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`)
	})
	.catch(err => console.error('Error', err))
