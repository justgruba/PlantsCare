import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDFzGLJwnk-jLAz0NNwoJ9Fuoq-IPbXDZE",
    authDomain: "plantscare-25018.firebaseapp.com",
    projectId: "plantscare-25018",
    storageBucket: "plantscare-25018.appspot.com",
    messagingSenderId: "560247387395",
    appId: "1:560247387395:web:e1144c653b466365276536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db}