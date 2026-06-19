import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkpo9Vh2SxqqEhz8WLvP31dc73ECBCwc8",
  authDomain: "yago-alves---projeto-de-bloco.firebaseapp.com",
  projectId: "yago-alves---projeto-de-bloco",
  storageBucket: "yago-alves---projeto-de-bloco.firebasestorage.app",
  messagingSenderId: "751807128928",
  appId: "1:751807128928:web:9c47cabd4af582cf95aa05",
  measurementId: "G-TYTYRK2N5H",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
