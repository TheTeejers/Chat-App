import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT, VERIFY_USER } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
const socketURL ='/'
// const socketURL ='http://192.168.56.1:3231'

export default class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      socket: null,
      user: null
    }
  }

  componentWillMount(){
    this.initSocket()
  }

  //Connect to and initialize the socket
  initSocket = () => {
    const socket = io(socketURL)

    socket.on('connect', ()=>{
      if(this.state.user){
        this.reconnect(socket)
      }else{
        console.log('connected');
      }



    })
    this.setState({
      socket: socket
    })
  }

  reconnect = (socket) =>{
    socket.emit(VERIFY_USER, this.state.user.name, ({isUser, user})=>{
      if(isUser){
        this.setState({
          user:null
        })
      }else{
        this.setUser(user)
      }
    })
  }

  // Set User Property
  setUser = (user)=> {
    const {socket} = this.state
    // console.log(socket);
    socket.emit(USER_CONNECTED, user);
    this.setState({
      user
    })
    console.log(user);
  }


  logout = () => {
    const { socket } = this.state
    socket.emit(LOGOUT)
    this.setState({
      user: null
    })
  }


  render() {
    // setUser(user)
    const { socket, user } = this.state
    return (
      <div className='container'>
        {
          !user ?
        <LoginForm socket={ socket } setUser={this.setUser} />
        :
        <ChatContainer socket={socket} user={user}  logout={this.logout} />
        }
      </div>
    );
  }
}
