// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration object (get this from your Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAV6pb_12zmYkjmStuQoaeVD83C9IduPBo",
    authDomain: "erflaundry.firebaseapp.com",
    databaseURL: "https://erflaundry-default-rtdb.firebaseio.com",
    projectId: "erflaundry",
    storageBucket: "erflaundry.appspot.com",
    messagingSenderId: "329372653354",
    appId: "1:329372653354:web:1c092f336cf9ac87df7053"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);