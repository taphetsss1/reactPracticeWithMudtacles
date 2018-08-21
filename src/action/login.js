import {ref,auth,provider} from './facebookLogIn';
import store from '../store/store';
import {addToken,onSuccess,checkStatus} from './action';
import axios from 'axios';
export function login  () 
 {
  //auth().onAuthStateChanged(user =>
  
 
      console.log("Fresh Login");
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
export function logout()
{
  auth().signOut()
  .then(()=>
{
  store.dispatch(onSuccess(""));
})
}
export function CheckLogin()
{
  auth().onAuthStateChanged(user => {
    if(user)
    {
      store.dispatch(onSuccess(user.displayName));
      store.dispatch(checkStatus(true));
    
    }else{
      
      store.dispatch(checkStatus(false));
    }
  });
}
