// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkngcnsOwumokCM2oWYXwHmPDIo2DcohA",
    authDomain: "todo-list-c89e9.firebaseapp.com",
    projectId: "todo-list-c89e9",
    storageBucket: "todo-list-c89e9.appspot.com",
    messagingSenderId: "711545595346",
    appId: "1:711545595346:web:be264a60b3b2acd12f540b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;