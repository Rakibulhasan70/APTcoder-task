// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9Oxlmj4kOq7CcS40EMMpgdKaL7gMAj84",
    authDomain: "aptcoder-task-93f7b.firebaseapp.com",
    projectId: "aptcoder-task-93f7b",
    storageBucket: "aptcoder-task-93f7b.appspot.com",
    messagingSenderId: "292867362598",
    appId: "1:292867362598:web:3b58b115e49e2653d07be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth