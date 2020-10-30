import * as firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyAGay4HUfJ3cZ23Oy-q0UX_rk9rD8aw-i0",
    authDomain: "finddrinks-dc150.firebaseapp.com",
    databaseURL: "https://finddrinks-dc150.firebaseio.com",
    projectId: "finddrinks-dc150",
    storageBucket: "finddrinks-dc150.appspot.com",
    messagingSenderId: "977899685087",
    appId: "1:977899685087:web:e2b61195ebcdfd4cc4556a",
    measurementId: "G-8KV2P5GMRG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'balthzar'
  })