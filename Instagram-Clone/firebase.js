// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBF7hyPFly_68MRXq_OPAHo9pMjIRB9fkI",
  authDomain: "instagram-49ca8.firebaseapp.com",
  projectId: "instagram-49ca8",
  storageBucket: "instagram-49ca8.appspot.com",
  messagingSenderId: "730741715402",
  appId: "1:730741715402:web:82fa18a8cb3a16f4ebdf33",
  measurementId: "G-39WN70X41X"
};

// export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =  firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth , storage}

export default firebase
