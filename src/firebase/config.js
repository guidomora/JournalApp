// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaFlC5yti-9sYLKFZX5VuvZKak6ifAjko",
  authDomain: "journalapp-9e579.firebaseapp.com",
  projectId: "journalapp-9e579",
  storageBucket: "journalapp-9e579.appspot.com",
  messagingSenderId: "492904105462",
  appId: "1:492904105462:web:e35aec443665af2d48b3d7",
  measurementId: "G-T0J9EFX70X",
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig)

// importamos getAuth y dentro le metemos FirebaseApp
export const FirebaseAuth = getAuth( FirebaseApp );

// importamos getFirestore y dentro le metemos FirebaseApp
export const FirebaseDB   = getFirestore( FirebaseApp );