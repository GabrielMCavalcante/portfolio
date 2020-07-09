import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGAE1WQYGWxg_ozzK0hfYNrsDH35TrXXo",
    authDomain: "gabrielcavalcante-portfolio.firebaseapp.com",
    databaseURL: "https://gabrielcavalcante-portfolio.firebaseio.com",
    projectId: "gabrielcavalcante-portfolio",
    storageBucket: "gabrielcavalcante-portfolio.appspot.com",
    messagingSenderId: "392227781922",
    appId: "1:392227781922:web:c185728e6af21d959f397b"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()