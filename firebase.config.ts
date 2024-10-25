import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmnFdqOI_Dji8Jxj0homrBIvHtAC09GV8",
  authDomain: "jacksontaylor-com.firebaseapp.com",
  projectId: "jacksontaylor-com",
  storageBucket: "jacksontaylor-com.appspot.com",
  messagingSenderId: "710737886764",
  appId: "1:710737886764:web:c4b2933310727d8e4c5b89",
  measurementId: "G-FP9LLLD7KG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);