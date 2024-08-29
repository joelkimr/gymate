import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGv5plB1X8K_L5kx1XE3k8I9tYgaQ6ajg",
  authDomain: "gymate-acb69.firebaseapp.com",
  projectId: "gymate-acb69",
  storageBucket: "gymate-acb69.appspot.com",
  messagingSenderId: "666414827345",
  appId: "1:666414827345:web:8edf308ef32f971095b570",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
