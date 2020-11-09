import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCqJVQV82_zMsGvAQfrHUQfFbQcUxTI1vQ",
    authDomain: "todo-app-23f1b.firebaseapp.com",
    databaseURL: "https://todo-app-23f1b.firebaseio.com",
    projectId: "todo-app-23f1b",
    storageBucket: "todo-app-23f1b.appspot.com",
    messagingSenderId: "594493637856",
    appId: "1:594493637856:web:a4252bb595fb69e688fc85",
    measurementId: "G-F59FS7X1ZL"
});
const db=firebaseApp.firestore();

export default db;