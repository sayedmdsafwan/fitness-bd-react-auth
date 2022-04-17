// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtUJFSi2aj9uM0invYkwif_IYaruT_ah8",
    authDomain: "fitness-bd-fa5ce.firebaseapp.com",
    projectId: "fitness-bd-fa5ce",
    storageBucket: "fitness-bd-fa5ce.appspot.com",
    messagingSenderId: "139452180253",
    appId: "1:139452180253:web:f2a718cb9111a714c323f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
