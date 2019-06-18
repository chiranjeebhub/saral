import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCwXJZyauYOfVydKI5_myjOo3X7i3-4zDk",
  authDomain: "saraldb.firebaseapp.com",
  databaseURL: "https://saraldb.firebaseio.com",
  projectId: "saraldb",
  storageBucket: "saraldb.appspot.com",
  messagingSenderId: "596931778587",
  appId: "1:596931778587:web:16726e040e6206be"
};
// Initialize Firebase

firebase.initializeApp(config);
export default firebase;

// import firebase from 'firebase';
// const config = {
//  apiKey: 'xxxxxx',
//  authDomain: 'xxxxxx.firebaseapp.com',
//  databaseURL: 'https://xxxxxx.firebaseio.com',
//  projectId: 'xxxxxx',
//  storageBucket: '',
//  messagingSenderId: 'xxxxxx',
// };
// firebase.initializeApp(config);
// export default firebase;
