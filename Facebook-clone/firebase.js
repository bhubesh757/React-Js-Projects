// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBttCR36-CiAlR5habQGEZ2HD1wm1xJY5Q",
    authDomain: "facebook-878ed.firebaseapp.com",
    projectId: "facebook-878ed",
    storageBucket: "facebook-878ed.appspot.com",
    messagingSenderId: "162788120934",
    appId: "1:162788120934:web:675947da80992205ec10a7",
    measurementId: "G-HFTJHTT8MP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider }

export default db;