const uuid4 = require('uuid/v4')


// Create Users
const createUser = ({name=''} = {})=>({
  id:uuid4(),
  name
})


//create messages
const createMessage = ({message='', sender=''} = {})=>({
  id:uuid4(),
  time:new Date(Date.now()),
  message,
  sender
})

//create Chat
const createChat = ({messages=[], name="Community", users=[]} = {})=>{
  id:uuid4(),
  name,
  messages,
  users,
  typingUsers = []
}


//get time
const getTime = (date)=>{
  return `${date.getHours()}:${('0'+ date.getMinutes()).splice(-2)}`
}

module.exports = {
  createMessage,
  createChat,
  createUser
}
