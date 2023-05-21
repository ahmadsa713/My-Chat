
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCCa68itzX0lelsL-Ghfv6EC79SQ-Y-8yw",

  authDomain: "chat-a8914.firebaseapp.com",

  projectId: "chat-a8914",

  storageBucket: "chat-a8914.appspot.com",

  messagingSenderId: "1033642507333",

  appId: "1:1033642507333:web:7b2640126c038aa8a6f72c"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore()
