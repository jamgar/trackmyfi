import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDhIgnq1KnnDyrQY3-H69OPyIxLLtUY3qE',
    authDomain: 'jeg-expensify.firebaseapp.com',
    databaseURL: 'https://jeg-expensify.firebaseio.com',
    projectId: 'jeg-expensify',
    storageBucket: 'jeg-expensify.appspot.com',
    messagingSenderId: '218734481166'
  }
  // const config = {
  //   apiKey: 'AIzaSyB3VzSfA1N3Nywj4Tmqt-OPW89xCEnzD2Y',
  //   authDomain: 'ytgallery-d8934.firebaseapp.com',
  //   databaseURL: 'https://ytgallery-d8934.firebaseio.com',
  //   projectId: 'ytgallery-d8934',
  //   storageBucket: 'ytgallery-d8934.appspot.com',
  //   messagingSenderId: '890683006966'
  // }

  firebase.initializeApp(config)
}

const database = firebase.database()
const auth = firebase.auth()

export { firebase, database, auth }
