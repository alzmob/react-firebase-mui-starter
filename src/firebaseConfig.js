// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcyalVRt78oUUs9MzWJYAyq92SDylZ1EM",
  authDomain: "doc-fb737.firebaseapp.com",
  projectId: "doc-fb737",
  storageBucket: "doc-fb737.appspot.com",
  messagingSenderId: "370326852194",
  appId: "1:370326852194:web:86836eff6673487d02f73b",
  measurementId: "G-HYFEBEQ0VV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);