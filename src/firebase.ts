import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpacQPxHDNuCkaeILbnrna6sSe2j4mEog",
  authDomain: "todo-list-af97b.firebaseapp.com",
  projectId: "todo-list-af97b",
  storageBucket: "todo-list-af97b.appspot.com",
  messagingSenderId: "62613593835",
  appId: "1:62613593835:web:951864ec973513156868ae",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);