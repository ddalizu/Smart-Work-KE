// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDiHAzpzY5dkPVUxhSPCKLOAQaqX46_s10",
    authDomain: "smart-work-a68ce.firebaseapp.com",
    projectId: "smart-work-a68ce",
    storageBucket: "smart-work-a68ce.firebasestorage.app",
    messagingSenderId: "533069138328",
    appId: "1:533069138328:web:e9d1c0d4957a08c5bb03ed",
    measurementId: "G-RD7MEFT8CK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
