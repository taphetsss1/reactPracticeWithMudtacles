import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
export default () =>
(
<BrowserRouter>
  <Switch>
  <Route path="/" exact render ={ () => <Home/>}/>

  </Switch>
</BrowserRouter>
);
