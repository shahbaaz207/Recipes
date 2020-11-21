import  * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCkXiDaGunu1aiYs2OOOAXSjxGnG2BfWlY",
    authDomain: "recipes-f03af.firebaseapp.com",
    databaseURL: "https://recipes-f03af.firebaseio.com",
    projectId: "recipes-f03af",
    storageBucket: "recipes-f03af.appspot.com",
    messagingSenderId: "731029979480",
    appId: "1:731029979480:web:d6b5e59264ec49fc82a52d"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
 const auth=firebase.auth()
 const storage=firebase.storage()
  export  {auth,storage,db}