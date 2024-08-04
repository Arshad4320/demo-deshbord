// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAT64FUl-7igPtvBeFqbF7gns-_JogkU54",
  authDomain: "fir-deashboard.firebaseapp.com",
  projectId: "fir-deashboard",
  storageBucket: "fir-deashboard.appspot.com",
  messagingSenderId: "879736036195",
  appId: "1:879736036195:web:1561248e8db9f9c9235156",
  measurementId: "G-WX7DNPYLZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
