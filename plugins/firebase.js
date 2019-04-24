import firebase from 'firebase/app'
import 'firebase/database'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyB3VzSfA1N3Nywj4Tmqt-OPW89xCEnzD2Y',
    authDomain: 'ytgallery-d8934.firebaseapp.com',
    databaseURL: 'https://ytgallery-d8934.firebaseio.com',
    projectId: 'ytgallery-d8934',
    storageBucket: 'ytgallery-d8934.appspot.com',
    messagingSenderId: '890683006966'
  }

  firebase.initializeApp(config)
}

const database = firebase.database()

export { firebase, database }
