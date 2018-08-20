import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
export default class ClassName extends Component{
  render()
  {
    return(
    <div>
      <button type="button" className="btn btn-outline-secondary">{this.props.name}</button>
    </div>
  );
  }
}
