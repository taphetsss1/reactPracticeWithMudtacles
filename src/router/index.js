import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import Chatbox from '../components/chatbox'
export default () =>
(
<BrowserRouter>
  <Switch>
  <Route path="/" exact render ={ () => <Home/>}/>
  <Route path="/Chat" exact render ={ () => <Chatbox/>}/>

  </Switch>
</BrowserRouter>
);
