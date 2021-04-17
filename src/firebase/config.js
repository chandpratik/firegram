import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLHZoFW3u-A0t0m4cWjyI8i2GnRjr0Cj4",
    authDomain: "firegram-1002.firebaseapp.com",
    projectId: "firegram-1002",
    storageBucket: "firegram-1002.appspot.com",
    messagingSenderId: "505092115107",
    appId: "1:505092115107:web:48228b8231351cb03acd16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };