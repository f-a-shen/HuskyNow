import { initializeApp } from "firebase/app"; // OK: single import of initializeApp
import { getDatabase, ref, push } from "firebase/database";

// IMPORTANT: Do NOT import initializeApp twice. The duplicate import below was causing:
// "Identifier 'initializeApp' has already been declared"
// ✅ Keep only ONE import at the top (the one above)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6CxUIDyHH_2Xvrf7QNsQiSwuliUYgUfY",
  authDomain: "huskynow-66714.firebaseapp.com",
  databaseURL: "https://huskynow-66714-default-rtdb.firebaseio.com/",
  projectId: "huskynow-66714",
  storageBucket: "huskynow-66714.firebasestorage.app",
  messagingSenderId: "468060880920",
  appId: "1:468060880920:web:e062a3655db36525d7c36d"
};

// Initialize Firebase (ONLY do this once in your entire app)
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push }; // Export helpers so other files DON'T re-initialize Firebase
