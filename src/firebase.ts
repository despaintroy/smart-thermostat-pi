import * as admin from 'firebase-admin'
import { CurrentTarget } from './models'

// Initialize Firebase
const serviceAccount = require('../key.json')
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

// Get a firestore reference to targetState collection
const db = admin.firestore()
const currentTarget = db.collection('targetState').doc('currentTarget')

// Watch for changes to targetState document
export const watchTargetState = (
	callback: (targetState: CurrentTarget) => void
) => {
	currentTarget.onSnapshot(doc => callback(doc.data() as CurrentTarget))
}
