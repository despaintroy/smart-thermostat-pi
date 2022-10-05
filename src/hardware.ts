import { promises } from 'node-dht-sensor'
import {
	FURNACE_PIN,
	MOCK_ENVIRONMENT,
	SENSOR_PIN,
	SENSOR_TYPE,
} from './environment'
import { Gpio } from 'onoff'
import { MockGpio } from './mockGpio'

const { initialize, setMaxRetries, read } = promises

// Setup the DHT sensor
setMaxRetries(10)
if (MOCK_ENVIRONMENT) {
	initialize({
		test: {
			fake: {
				temperature: 21,
				humidity: 60,
			},
		},
	})
} else {
	initialize(SENSOR_TYPE, SENSOR_PIN)
}

const furnace = MOCK_ENVIRONMENT
	? new MockGpio(FURNACE_PIN, 'out')
	: new Gpio(FURNACE_PIN, 'out')

export const measureTempHumid = () => read(SENSOR_TYPE, SENSOR_PIN)

export const setFurnace = (state: boolean) => {
	furnace.writeSync(state ? Gpio.HIGH : Gpio.LOW)
}

export const getFurnace = () => {
	furnace.readSync() === Gpio.HIGH
}
