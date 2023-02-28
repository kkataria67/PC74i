import firebase from "firebase";
require("@firebase/firestore");



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVn_3LaiwsSklEcCQSckpRtfH4IX_xb1E",
  authDomain: "cycling-app-32706.firebaseapp.com",
  projectId: "cycling-app-32706",
  storageBucket: "cycling-app-32706.appspot.com",
  messagingSenderId: "2019948084",
  appId: "1:2019948084:web:835f2db50467fda8b03c61"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
