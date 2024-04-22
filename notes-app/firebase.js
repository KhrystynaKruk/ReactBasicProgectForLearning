import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQBSzQSjFpvvXyaX-fpch4-CYkT70w6Lk",
  authDomain: "react-notes-7390e.firebaseapp.com",
  projectId: "react-notes-7390e",
  storageBucket: "react-notes-7390e.appspot.com",
  messagingSenderId: "660686921955",
  appId: "1:660686921955:web:19e1c8ff148c546aaba5d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const notesCollection = collection(db,"notes")