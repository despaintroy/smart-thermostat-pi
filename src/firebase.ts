import * as admin from 'firebase-admin'
import { CurrentTarget, IndoorMeasurement } from './models'

// Initialize Firebase
const serviceAccount = require('../key.json')
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

// Get a firestore reference to targetState collection
const db = admin.firestore()
const currentTarget = db.collection('targetState').doc('currentTarget')
const historyCollection = db.collection('history')

// Watch for changes to targetState document
export const watchTargetState = (
	callback: (targetState: CurrentTarget) => void
) => {
	currentTarget.onSnapshot(doc => callback(doc.data() as CurrentTarget))
}

// Add doc to the history collection
export const saveMeasurement = (measurement: IndoorMeasurement) => {
	historyCollection.add(measurement)
}
