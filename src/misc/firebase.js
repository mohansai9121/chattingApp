import { initializeApp } from "firebase/app";
//import "firebase/database";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdjZxjUprbow1GYMd64UzXszRa3W1S44",
  authDomain: "chatting-app-b3b1e.firebaseapp.com",
  projectId: "chatting-app-b3b1e",
  storageBucket: "chatting-app-b3b1e.appspot.com",
  messagingSenderId: "300425960897",
  appId: "1:300425960897:web:c1f807005b9d0690ca2340",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(
  app,
  "https://chatting-app-b3b1e-default-rtdb.asia-southeast1.firebasedatabase.app/"
);
