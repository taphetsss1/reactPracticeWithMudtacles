import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';

export default class ChatMe extends Component
{
  render()
  {
    return(
    <div>
       <div className="text-info" className="chat-box-right">
       <h6 className="user-left">    {this.props.message} </h6>
                        </div>
                        <div className="chat-box-name-right">
                        </div>
    </div>
  );
  }
}
