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


# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import db

# cred = credentials.Certificate({
# 	"type": "service_account",
# 	"apiKey": "AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014",
# 	"private_key": "AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014",
# 	"authDomain": "smart-thermostat-92710.firebaseapp.com",
# 	"projectId": "smart-thermostat-92710",
# 	"storageBucket": "smart-thermostat-92710.appspot.com",
# 	"messagingSenderId": "31001839536",
# 	"appId": "31001839536:web:a4c255c21db37087f37875",
# 	"client_email": "despaintroy@gmail.com",
# 	"token_uri": ""
# })

# firebase_admin.initialize_app(cred, {
#     'databaseURL': 'https://smart-thermostat-92710.firebaseio.com/'
# })

# from firebase import firebase
# firebase = firebase.FirebaseApplication('https://smart-thermostat-92710.firebaseio.com/', None)
# result = firebase.get('/setState', None)
# print(result)
