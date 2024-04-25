import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBM_rdAvkvbn96EWXSSNyfVn74gJZcnXhg",
  authDomain: "instagram-clone-90c42.firebaseapp.com",
  projectId: "instagram-clone-90c42",
  storageBucket: "instagram-clone-90c42.appspot.com",
  messagingSenderId: "973584733143",
  appId: "1:973584733143:web:b957bcbdd91329407eb192"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();