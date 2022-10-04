import {
	High,
	Low,
	Direction,
	Edge,
	Options,
	ValueCallback,
	BinaryValue,
	Gpio,
} from 'onoff'

export class MockGpio {
	mockValue: BinaryValue
	pin: number

	constructor(
		gpio: number,
		direction: Direction,
		edge?: Edge,
		options?: Options
	) {
		this.mockValue = Gpio.LOW
		this.pin = gpio
	}

	// read(callback: ValueCallback): void
	// read(): Promise<BinaryValue>

	readSync(): BinaryValue {
		return this.mockValue
	}

	// write(
	// 	value: BinaryValue,
	// 	callback: (err: Error | null | undefined) => void
	// ): void
	// write(value: BinaryValue): Promise<void>

	writeSync(value: BinaryValue): void {
		this.mockValue = value
		console.log('MockGpio.writeSync', `pin: ${this.pin}`, `value: ${value}`)
	}

	// watch(callback: ValueCallback): void
	// unwatch(callback?: ValueCallback): void
	// unwatchAll(): void

	// direction(): Direction
	// setDirection(direction: Direction): void

	// edge(): Edge
	// setEdge(edge: Edge): void

	// activeLow(): boolean
	// setActiveLow(invert: boolean): void

	// unexport(): void
}
