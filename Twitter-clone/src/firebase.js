    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAvtSJWBAb_5srcOezEqsyA8-Qj0Jrz19Q",
    authDomain: "twitter-clone-fc6ed.firebaseapp.com",
    projectId: "twitter-clone-fc6ed",
    storageBucket: "twitter-clone-fc6ed.appspot.com",
    messagingSenderId: "812192840267",
    appId: "1:812192840267:web:4a7d52e390443fab316bce",
    measurementId: "G-D49HNP5EVC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

export default db;