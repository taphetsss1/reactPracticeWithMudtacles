import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from './button';
import { login,logout,CheckLogin } from '../action/login';
class Home extends Component {

  componentDidMount(){
    CheckLogin();
    console.log(this.status);
  }
  loginUser()
  {
    login();
  }
  logout(){
    logout();
  }
  render() {
    return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <p>{this.props.userdata !== null? "Welcome" + this.props.userdata : "" }</p>
  <Button name="log-out" login={this.logout.bind(this)}/>
</nav>
  <div className="bg"> 
      { (this.props.status) ?  "" : <Button name="Log-in" login={this.loginUser.bind(this)}/> }
      <Button name="Search me a senior high"/>
      <Button name="Search me a College"/>
    </div>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state.success);
    return {
       userdata : state.success,
       errorData : state.error,
       message : state.message,
       token : state.token,
       status : state.status
    };
  };
  export default connect(mapStateToProps,null) (Home);