import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("./key.json")

app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://smart-thermostat-92710.firebaseio.com/'
})

client = firestore.client(app)

collection = client.collection('top')

for item in collection.get():
    print(item.to_dict())
