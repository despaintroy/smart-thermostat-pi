import { promises } from 'node-dht-sensor'
import { MOCK_ENVIRONMENT, SENSOR_PIN, SENSOR_TYPE } from './environment'

const { initialize, setMaxRetries } = promises

export default function () {
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
}
