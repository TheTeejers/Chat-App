import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'

import Layouts from './Layouts';
import '../index.css'
// import { subscribeToTimer, getStock } from './api';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      nickname:'',
      error:''
    }
    // this.handleSubmit=this.handleSubmit.bind(this);
}
  setUser = ({user, isUser})=>{
    // console.log(user, isUser);
    if(isUser){
      this.setError('User name Taken')
    } else {
      this.setError('')
      this.props.setUser(user)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { socket } = this.props
    const { nickname } = this.state
    socket.emit(VERIFY_USER, nickname, this.setUser)
    // console.log(socket);
  }


  handleChange = (e) => {
    this.setState({
      nickname:e.target.value
    })
  }


  setError = (error) => {
    this.setState({
      error
    })
  }


  render() {
    const{ nickname, error } = this.state

    return (

        <div className='login'>
          <form onSubmit={this.handleSubmit} className='login-form' >
            <label htmlFor='nickname'>
              <h2>Got a Nickname?</h2>
            </label>
            <input
              ref={(input) =>{this.textInput = input}}
              type='text'
              id='nickname'
              value={nickname}
              onChange={this.handleChange}
              placeholder='My Username'
            />
            <div className='error'>{error ? error:null}</div>;
          </form>
        </div>

    );
  }
}
