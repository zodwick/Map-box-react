import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


function Startfirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyDbH4zPgKLoq5sXbZWvWze9H9beGS8iiks",
    authDomain: "hello-c0d11.firebaseapp.com",
    projectId: "hello-c0d11",
    storageBucket: "hello-c0d11.appspot.com",
    messagingSenderId: "775896242458",
    appId: "1:775896242458:web:ad1bde096597872de4f4a3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}


export default Startfirebase;