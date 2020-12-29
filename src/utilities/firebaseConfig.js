import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBk_VPyvCKOUAqb74sN2tTHUNiqgHqZpRY",
  authDomain: "movie-managment.firebaseapp.com",
  databaseURL: "https://movie-managment-default-rtdb.firebaseio.com",
  projectId: "movie-managment",
  storageBucket: "movie-managment.appspot.com",
  messagingSenderId: "87635700382",
}

const fire = firebase.initializeApp(config);
export default fire;