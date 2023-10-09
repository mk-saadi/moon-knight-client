import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr8inOPD9v4Ws9SyVopyp27lEv2YK_oK4",
    authDomain: "cosmos-jewelry.firebaseapp.com",
    projectId: "cosmos-jewelry",
    storageBucket: "cosmos-jewelry.appspot.com",
    messagingSenderId: "130722893530",
    appId: "1:130722893530:web:b1e421b8e0d7ba28d81fe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

*/
