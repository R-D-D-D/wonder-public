// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD52DQVODBsLn9rLqpkJKU5BjM7wR3LkSU',
  authDomain: 'wonder-a5e27.firebaseapp.com',
  projectId: 'wonder-a5e27',
  storageBucket: 'wonder-a5e27.appspot.com',
  messagingSenderId: '176565631668',
  appId: '1:176565631668:web:7bb8089c53412e4cad75e1',
  measurementId: 'G-D8B597P911',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099')
connectFirestoreEmulator(db, 'localhost', 8080)

export { db, auth }
