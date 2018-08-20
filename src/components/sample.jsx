import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
export default class ClassName extends Component{
  render()
  {
    return(
    <div>
      <button onClick={() =>{store.dispatch(clickMe("Nikko"))}} >{this.props.buttonName}</button>
    </div>
  );
  }
}
