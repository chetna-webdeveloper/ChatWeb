  import React from 'react'
import { useSocketContext } from '../../Context/SocketContext';
import useConversation from '../../zustand/useConversation';

  const Conversation=({conversation,lastIdx,emoji}) =>{
    const {selectedConversation,setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
      <>
      <div className={` flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500":""}`} 
     onClick={()=>setSelectedConversation(conversation)} >
          <div className={`avatar ${ isOnline ? "online":""}`}>
              <div className='w-12 rounded-full'>
                  <img src={conversation.profilePic} alt="user avatar" />
              </div>
          </div>

          <div className=' flex flex-col flex-1'>
              <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-300'>{conversation.fullname}</p>
              <span className='text-xl'>{emoji}</span>
              </div>
          </div>
      </div>
    {!lastIdx &&  <div className='divider my-0 py-0 h-1'/>}
      </>
    )
  }

  export default Conversation;



  // import React from 'react'

  // function Conversation() {
  //   return (
  //     <>
  //     <div className=' flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
  //          <div className='avatar online'>
  //             <div className='w-12 rounded-full'>
  //                 <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=" alt="user avatar" />
  //             </div>
  //          </div>

  //          <div className=' flex flex-col flex-1'>
  //             <div className='flex gap-3 justify-between'>
  //             <p className='font-bold text-gray-300'>Jhon Doe</p>
  //             <span className='text-xl'>🎃</span>
  //             </div>
  //          </div>
  //     </div>
  //     <div className='divider my-0 py-0 h-1'/>
  //     </>
  //   )
  // }

  // export default Conversation;