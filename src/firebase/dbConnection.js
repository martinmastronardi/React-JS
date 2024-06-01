// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFMP6OXSdyAnddxKe3ThmwBFRrLfRqDJM",
  authDomain: "yumbrelstore.firebaseapp.com",
  projectId: "yumbrelstore",
  storageBucket: "yumbrelstore.appspot.com",
  messagingSenderId: "517167052969",
  appId: "1:517167052969:web:d6fc7821148589a529d1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
