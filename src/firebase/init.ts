import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    // generated firebase configurations
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
