import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk3sl52eEwCas9O4W8Xvuf8Hmi2OTezvk",
  authDomain: "cataleg-vinyls-vue.firebaseapp.com",
  projectId: "cataleg-vinyls-vue",
  storageBucket: "cataleg-vinyls-vue.firebasestorage.app",
  messagingSenderId: "937344620965",
  appId: "1:937344620965:web:34671ba9584cdffc6df04c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);