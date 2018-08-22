import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
export default class ChatMe extends Component
{
  render()
  {
    return(
    <div>
       <div className="chat-box-right">
                           {this.props.message}
                        </div>
                        <div className="chat-box-name-right">
                
                            -  {this.props.sender}
                        </div>
                        

    </div>
  );
  }
}
