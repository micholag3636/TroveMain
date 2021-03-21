import firebase, {initializeApp} from "firebase"
import "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBK0ctD_WD8RTWGpekH3guO_Ejfptwdtpo",
    authDomain: "trove-p.firebaseapp.com",
    databaseURL: "https://trove-p-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trove-p",
    storageBucket: "trove-p.appspot.com",
    messagingSenderId: "1079766514419",
    appId: "1:1079766514419:web:558530a54897df4ddbd586"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire