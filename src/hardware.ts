import { promises } from 'node-dht-sensor'
import { MOCK_ENVIRONMENT, SENSOR_PIN, SENSOR_TYPE } from './environment'
import { Gpio } from 'onoff'
import { MockGpio } from './mockGpio'

const furnace = MOCK_ENVIRONMENT ? new MockGpio(4, 'out') : new Gpio(4, 'out')

export const measureTempHumid = () => promises.read(SENSOR_TYPE, SENSOR_PIN)

export const setFurnace = (state: boolean) => {
	furnace.writeSync(state ? Gpio.HIGH : Gpio.LOW)
}

export const getFurnace = () => {
	furnace.readSync() === Gpio.HIGH
}
