import React, { Component } from 'react';
import store from '../store/store';
import {clickMe} from '../action/action';
import ChatMe from './ChatMe';
import ChatOthers from './ChatOthers';
import {connect} from 'react-redux';
import {ref} from '../action/facebookLogIn'
import {loadMessage} from '../action/login'
import axios from 'axios';
import Home from './home';
 class Chatbox extends Component{
   constructor(props)
   {
     super(props);
     this.send.bind(this);
     this.state = {
      
      refreshMessage : false
     };
     this.messageValue = ""
   }
   componentDidMount()
   {
    loadMessage();
   }
   send(e)
   {
     e.preventDefault();
      axios.post("https://chatwithseniorhigh-9438c.firebaseio.com/Message.json",{id:this.props.id,user:this.props.user,message: this.messageValue})
      .then(()=>{
        document.getElementById("LakadMatatag").value = "";
      })
      .catch(err =>{
        console.log(err);
      })  
   }
   setMessage(e)
   {
     this.messageValue = e.target.value;
   }
  render()
  {
    const { chats } = this.props;
    return(
    <div>
      <Home/>
       <div className="container">
        <div className="row pad-top pad-bottom">
            <div className=" col-lg-6 col-md-6 col-sm-6">
                <div classNameName="chat-box-div">
                    <div className="chat-box-head">
                        GROUP CHAT HISTORY
                    </div>
                    <div className="panel-body chat-box-main">
                    {
                      Object.keys(chats).map(key => {
                        let e = chats[key];
                        
                     let x = (e.id === this.props.id) ? <ChatMe message={e.message} sender={e.sender}/>
                       : <ChatOthers message={e.message} sender={e.sender}/> 
                       return x
                      })
                      }
      
              
                    </div>
                    <div className="chat-box-footer">
                      <form onSubmit={this.send.bind(this)}>
                        <div className="input-group">
                            <input   id="LakadMatatag"onChange={this.setMessage.bind(this)} className="form-control" placeholder="Enter Text Here..."id="C"></input>
                            <span className="input-group-btn">
                                <button  className="btn btn-info" onClick={this.send.bind(this)} type="button">SEND</button>
                            </span>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
                </div>
            </div>
  );
  }
}
const mapStateToProps = (state) => {
  
  console.log("map",state.chats);
  return {
   chats : state.chats,
   user : state.success,
   id : state.id
  };
};

export default connect(mapStateToProps,null) (Chatbox);