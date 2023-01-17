import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyC61IVDPJ6uVCk3ut6fT3FEf4GSsigIk0g",
    authDomain: "e-library-67641.firebaseapp.com",
    projectId: "e-library-67641",
    storageBucket: "e-library-67641.appspot.com",
    messagingSenderId: "415044215799",
    appId: "1:415044215799:web:1aa199ad491ab53b9144f2"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();