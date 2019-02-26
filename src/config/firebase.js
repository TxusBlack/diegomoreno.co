import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDzqVKJPKz6HNBHzL7dR4_6gW-Q-RS_fJg",
  authDomain: "portafolio-react.firebaseapp.com",
  databaseURL: "https://portafolio-react.firebaseio.com",
  projectId: "portafolio-react",
  storageBucket: "portafolio-react.appspot.com",
  messagingSenderId: "105465710234"
};
firebase.initializeApp(config);

export default firebase;