import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDd3oec6E0YhxiBAf0KsDwsmjyVDTgqyBU",
    authDomain: "nextfire-da7f0.firebaseapp.com",
    projectId: "nextfire-da7f0",
    storageBucket: "nextfire-da7f0.appspot.com",
    messagingSenderId: "116902790118",
    appId: "1:116902790118:web:03f351cae1f9ca4ef7cc27",
    measurementId: "G-D3ZDWY3G8E"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
