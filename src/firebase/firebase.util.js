
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUztdaEWSS7v4yM4SUKDFGSV3uF45qGGU",
    authDomain: "helpinghands-5794f.firebaseapp.com",
    databaseURL: "https://helpinghands-5794f.firebaseio.com",
    projectId: "helpinghands-5794f",
    storageBucket: "helpinghands-5794f.appspot.com",
    messagingSenderId: "146248547154",
    appId: "1:146248547154:web:f6c63cb1fb469708ce988b",
    measurementId: "G-51YN95B6QV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;