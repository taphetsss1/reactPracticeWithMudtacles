import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getUser} from './action/Api';
import Button from './components/button';
import {login,logout} from './action/login';
import FacebookProvider, { Share ,CustomChat } from 'react-facebook';
import Routes from './router';
class App extends Component {
  async componentDidMount ()
  {
    //logout();
   // login();
   // getUser(this.props.token);
  }
  render() {
    return (
     <Routes/>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.success);
  return {
     userdata : state.success,
     errorData : state.error,
     message : state.message,
     token : state.token
  };
};
export default connect(mapStateToProps,null) (App);
