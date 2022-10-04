import { SensorType } from 'node-dht-sensor'
import * as dotenv from 'dotenv'

dotenv.config()

export const SENSOR_TYPE = Number(process.env.SENSOR_TYPE) as SensorType
export const SENSOR_PIN = Number(process.env.SENSOR_PIN)
export const MOCK_ENVIRONMENT =
	process.env.MOCK_ENVIRONMENT?.toLowerCase() === 'true'

if (SENSOR_TYPE !== 11 && SENSOR_TYPE !== 22) {
	throw new Error(
		'SENSOR_TYPE must be 11 or 22. See https://www.npmjs.com/package/node-dht-sensor'
	)
}

if (isNaN(SENSOR_PIN)) {
	throw new Error('SENSOR_PIN must be a number')
}
