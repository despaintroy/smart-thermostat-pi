import adafruit_dht
import board
from time import sleep, time
import RPi.GPIO as GPIO

FURNACE_PIN_NUMBER = 21
SENSOR_PIN = board.D4

# Setup relay for controlling furnace
GPIO.setmode(GPIO.BCM)  # GPIO Numbers instead of board numbers
GPIO.setup(FURNACE_PIN_NUMBER, GPIO.OUT)  # GPIO Assign mode

# Setup temp/humidity sensor
dht22 = adafruit_dht.DHT22(SENSOR_PIN, False)


def set_furnace(value):
    GPIO.output(FURNACE_PIN_NUMBER, GPIO.HIGH if value else GPIO.LOW)


while True:
    try:
        temperature = dht22.temperature
        humidity = dht22.humidity

        set_furnace(humidity > 50.0)

        print('Temp={0:0.1f}ºC  Humidity={1:0.1f}%'.format(
            temperature, humidity))

    except RuntimeError as error:
        print(error.args[0])
        sleep(2.0)
        continue

    except Exception as error:
        dht22.exit()
        raise error

    sleep(3)

