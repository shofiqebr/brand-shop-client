// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqHxthSvgS-zHn0Mvlm2tih_2Yy7pIaw",
  authDomain: "automotive-brand-shop-client.firebaseapp.com",
  projectId: "automotive-brand-shop-client",
  storageBucket: "automotive-brand-shop-client.appspot.com",
  messagingSenderId: "257539606778",
  appId: "1:257539606778:web:11a53b4180527c705ee143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);