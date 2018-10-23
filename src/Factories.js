const uuid4 = require('uuid/v4')


// Create Users
const createUser = ({name='', socketId=null} = {})=>({
  id:uuid4(),
  name,
  socketId
})


//create messages
const createMessage = ({message='', sender=''} = {})=>({
  id:uuid4(),
  time:getTime(new Date(Date.now())),
  message,
  sender
})

//create Chat
const createChat = ({messages = [], name = "Community", users = [], isCommunity = false} = {})=>(
	{
		id:uuid4(),
		name: isCommunity ? name : createChatNameFromUsers(users),
		messages,
		users,
		typingUsers:[],
		isCommunity
	}
)

const createChatNameFromUsers = (users, excludedUser = "") => {
	return users.filter(u => u !== excludedUser).join(' & ') || "Empty Chat"
}

//get time
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
  createMessage,
  createChat,
  createUser,
  createChatNameFromUsers
}
