import firebase from "firebase/app";
import "firebase/storage";

/*export const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};*/

const firebaseConfig = {
    apiKey: "AIzaSyDiw6wtsSY_683N5eVHaueXnOkHShEjkOw",
    authDomain: "e-commerce-ad5aa.firebaseapp.com",
    projectId: "e-commerce-ad5aa",
    storageBucket: "e-commerce-ad5aa.appspot.com",
    messagingSenderId: "41087516143",
    appId: "1:41087516143:web:40dc776b4c3a72ab9d4a1a",
    measurementId: "G-S36E1QK1L8"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, export it for use
export const storage = firebase.storage();

export default firebase;
