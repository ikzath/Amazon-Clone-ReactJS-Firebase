import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp
({
    apiKey: "AIzaSyA-Pbey8t97aF-6JC3EKeGxF16r5jWgXus",
    authDomain: "clone-c369a.firebaseapp.com",
    databaseURL: "https://clone-c369a.firebaseio.com",
    projectId: "clone-c369a",
    storageBucket: "clone-c369a.appspot.com",
    messagingSenderId: "675882484789",
    appId: "1:675882484789:web:6d1dcaa83f6cdc39891d7c",
    measurementId: "G-QMP3LL1PQF"
  });


  const db = firebaseConfig.firestore();
  const auth = firebase.auth();


  export { auth };