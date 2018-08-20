import {ref,auth,provider} from './facebookLogIn';
import store from '../store/store';
import {addToken,onSuccess} from './action';
import axios from 'axios';
export function login  () 
 {
  auth().onAuthStateChanged(user =>
  {
    if(user)
    {
        console.log("Already Login");
        store.dispatch(onSuccess(user.displayName));
        console.log(user);
    }
    else
    {
        auth().signInWithPopup(provider)
        .then(({ user }) => {
        store.dispatch(onSuccess(user.displayName));
        axios.post("https://chatwithseniorhigh-9438c.firebaseio.com/.json",{user : user.displayName, email : user.email, id : user.uid})
        .then(res =>
        {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          })
        })
        .catch(error =>
        {
          console.log(error);
        })
    }
  }) 
}
export function logout()
{
  auth().signOut();
}
