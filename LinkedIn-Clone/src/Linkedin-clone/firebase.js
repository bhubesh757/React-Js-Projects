// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA7LlnZU88G7Q5EZfS1-A4ZMSL-O60eaFY",
    authDomain: "linkedin-project-6ac5d.firebaseapp.com",
    projectId: "linkedin-project-6ac5d",
    storageBucket: "linkedin-project-6ac5d.appspot.com",
    messagingSenderId: "873195156160",
    appId: "1:873195156160:web:e980f73e400fcdd3657325",
    measurementId: "G-5Q212HGSMN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const login = firebase.login()
  
  export {db , auth };

  export default firebase
