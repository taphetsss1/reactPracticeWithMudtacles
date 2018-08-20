import axios from 'axios';
import store from '../store/store';
import {onBefore,onSuccess,onError,clickMe} from './action';
export async function getUser(token)
{
  store.dispatch(onBefore());
  store.dispatch(clickMe("HELLO"));
  
  axios.get('https://graph.facebook.com/me?fields=id,name,friends&access_token='+token)
  .then( (response) => {
  store.dispatch(onSuccess(response.data));

    })
  .catch( (error) => {
  store.dispatch(onError(error));}
 );
}
