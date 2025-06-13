// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrXzguLrhN-6fMmM3VYBybpHiHlkZmtcU",
  authDomain: "prepwise-ca4d1.firebaseapp.com",
  projectId: "prepwise-ca4d1",
  storageBucket: "prepwise-ca4d1.firebasestorage.app",
  messagingSenderId: "1069367412265",
  appId: "1:1069367412265:web:069ef0612b65948ac9fe38",
  measurementId: "G-2DLSXMHLB1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);