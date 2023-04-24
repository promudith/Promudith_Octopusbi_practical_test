import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyC0zhiLyXjJvO9q62dBHLNHq0oDfxUD4e8",
  authDomain: "crudoperaction.firebaseapp.com",
  projectId: "crudoperaction",
  storageBucket: "crudoperaction.appspot.com",
  messagingSenderId: "802739828760",
  appId: "1:802739828760:web:8197dc1047031229f56b6d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database(); 
export const firestore = firebase.firestore(); 