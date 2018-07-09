import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBpzro5qDxrsIWau_xAU9jBc7ahlSEI0Yk",
    authDomain: "chatarang-eb08e.firebaseapp.com",
    databaseURL: "https://chatarang-eb08e.firebaseio.com",
    projectId: "chatarang-eb08e",
    storageBucket: "",
    messagingSenderId: "318940744806"
}



const app = firebase.initializeApp(config)
const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base