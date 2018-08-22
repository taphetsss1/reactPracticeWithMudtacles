import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
export default class Button extends Component
{
  render()
  {
    return(
    <div>
      <button onClick={this.props.login} type="button" className="btn btn-outline-secondary">{this.props.name}</button>
    </div>
  );
  }
}
