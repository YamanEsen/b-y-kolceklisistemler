// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase , ref , remove, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0J4MLfAGDQpMmI910gAa6TSo5bUngrT4",
  authDomain: "sunummac.firebaseapp.com",
  databaseURL: "https://sunummac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sunummac",
  storageBucket: "sunummac.firebasestorage.app",
  messagingSenderId: "743995008992",
  appId: "1:743995008992:web:8fbd5666fbd76371f8ed85",
  measurementId: "G-Y6633FRM8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl){
    const db = getDatabase(app);
    const reference = ref (db, 'users/' + userId);

    set (reference, {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}


function DeleteData(userId, name, email, imageUrl){
    const db = getDatabase(app);
    remove(ref(db,'users/' + userId));

}


writeUserData("deneme", "yaman", "yamanesen10hotmail.com", "myimageurl");

//DeleteData("deneme", "yaman", "yamanesen10hotmail.com", "myimageurl");

