import { promises } from 'node-dht-sensor'
import { SENSOR_PIN, SENSOR_TYPE } from './environment'

export const readSensor = () => promises.read(SENSOR_TYPE, SENSOR_PIN)
