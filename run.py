#Libraries
import Adafruit_DHT as dht
from time import sleep
#Set DATA pin
DHT = 4
while True:
    #Read Temp and Hum from DHT22
    h,t = dht.read_retry(dht.DHT22, DHT)
    #Print Temperature and Humidity on Shell window
    print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(t,h))
    sleep(5) #Wait 5 seconds and read again


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