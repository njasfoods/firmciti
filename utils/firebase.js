import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDtQ0RQlWoFL9lYP5XL8qceveNSCwLF5wU",
  authDomain: "trexiti.firebaseapp.com",
  projectId: "trexiti",
  storageBucket: "trexiti.appspot.com",
  messagingSenderId: "252450793502",
  appId: "1:252450793502:web:205f5d880232d83fd0e60f",
  measurementId: "G-5ZNRK07KDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);