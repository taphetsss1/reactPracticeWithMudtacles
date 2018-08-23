import {ref,auth,provider} from './facebookLogIn';
import store from '../store/store';
import {addToken,onSuccess,checkStatus,addMessage} from './action';
import axios from 'axios';
export function login  () 
 {
  //auth().onAuthStateChanged(user =>
      console.log("Fresh Login");
        auth().signInWithPopup(provider)
        .then(({ user }) => 
        {
         
        //const x = (lakadmatatag) + normalin + normalin;
        store.dispatch(onSuccess(user));
        //axios.post("https://chatwithseniorhigh-9438c.firebaseio.com/.json",{user : user.displayName, email : user.email, id : user.uid})
        //.then(res =>
        //{
         // console.log(res);
        //})
        //.catch(error => {
         // console.log(error);
         // })
        //})
        //.catch(error =>
        //{
          //console.log(error);
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
      console.log(user);
      store.dispatch(onSuccess(user));
      store.dispatch(checkStatus(true));
    }else{  
      store.dispatch(checkStatus(false));
    }
  });
}

export function aM(u)
{
  store.dispatch(addMessage(u));
}
export function loadMessage()
{
  axios.get("https://chatwithseniorhigh-9438c.firebaseio.com/Message.json")
  .then(res =>{store.dispatch(addMessage(res.data))});
    
}

ref.on("value",()=> axios.get("https://chatwithseniorhigh-9438c.firebaseio.com/Message.json")
.then(res =>{
  store.dispatch(addMessage(res.data))
})
);

