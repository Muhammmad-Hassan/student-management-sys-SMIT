  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getFirestore} from 'firebase/firestore'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrwLS1gg8NOe96gucDRWwBbWaQjfplkiE",
    authDomain: "student-manage-sys.firebaseapp.com",
    projectId: "student-manage-sys",
    storageBucket: "student-manage-sys.appspot.com",
    messagingSenderId: "1070788652028",
    appId: "1:1070788652028:web:838c1ac892d4fe27c76079"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
  
  export {db}