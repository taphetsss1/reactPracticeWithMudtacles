import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDlhEW2lqfN0LrLgH7meYCbYJqb7-eeOl8",
    authDomain: "chatwithseniorhigh-9438c.firebaseapp.com",
    databaseURL: "https://chatwithseniorhigh-9438c.firebaseio.com",
    projectId: "chatwithseniorhigh-9438c",
    storageBucket: "chatwithseniorhigh-9438c.appspot.com",
    messagingSenderId: "43523669685"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
