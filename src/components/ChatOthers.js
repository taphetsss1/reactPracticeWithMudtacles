import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
export default class ChatOther extends Component
{
  render()
  {
    return(
    <div>
       <div className="chat-box-left">
                           {this.props.message} 
                        </div>
                        <div className="chat-box-name-left">
                           
                        </div>
                       
    </div>
  );
  }
}
