import adafruit_dht
from board import D4
from time import sleep, time

dht_device = adafruit_dht.DHT22(D4)

while True:
    try:
        temperature = dht_device.temperature
        humidity = dht_device.humidity

        print('Temp={0:0.1f}ºC  Humidity={1:0.1f}%'.format(
            temperature, humidity))

    except RuntimeError as error:
        print(error.args[0])
        sleep(2.0)
        continue

    except Exception as error:
        dht_device.exit()
        raise error

    sleep(5)


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
