import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { extractTime } from '../../utils/extractTime'
import useConversation from '../../zustand/useConversation'

const Message = ({message})=> {
  const {authUser} = useAuthContext()
   const {selectedConversation}=  useConversation()
   const fromMe = message.senderid === authUser.data.user._id
   const formattedTime  = extractTime(message.createdAt)
   console.log(message.senderid)
   console.log(authUser.data.user._id)
  //  console.log(authUser._id)

   console.log(fromMe)
   const chatClassName = fromMe ? "chat-end" :"chat-start"
   const profilePic = fromMe ? authUser.data.user.profilePic :selectedConversation?.profilePic;
   console.log(authUser.data.user.profilePic)
   console.log(selectedConversation?.profilePic)

   const bubbleBgColor = fromMe ? "bg-blue-500" : "" ;
  return (
    <div className={` chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img src={profilePic} alt="user avatar" /> 
                </div>
            </div>
            <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-1 text-gray-300 text-xs flex gap-1 items-center'> {formattedTime}</div>

    </div>
  )
}

export default Message




// import React from 'react'

// function Message() {
//   return (
//     <div className=' chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                 <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=" alt="user avatar" /> 
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-400`}>Hi what's up</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> 12:42</div>

//     </div>
//   )
// }

// export default Message