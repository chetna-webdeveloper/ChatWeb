import React, { useEffect, useRef } from 'react'
import useGetMessage from '../../Hooks/useGetMessage'
import Message from './Message'
import MessageSkeleton from '../Skeletons/MessageSkeleton'
import useListenMessage from '../../Hooks/useListenMessage'
// import {useListenMessage} from '../../Hooks/useListenMessage'

const Messages = () => {
  const { loading, messages = [] } = useGetMessage();
  useListenMessage();
  const lastMessageRef = useRef();
  

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100);

    
  }, [messages])

  console.log("Messages : ", messages)
  const messageList = Array.isArray(messages) ? messages : (messages?.data ? [messages.data] : []);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messageList.length > 0 && messageList?.map((message) => (
        <div key={message._id} ref={lastMessageRef}><Message message={message} /></div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && (!messageList || messageList.length === 0) && (
        <p className='text-center text-white'> Send a message  to start the conversation</p>)}

    </div>
  )
}

export default Messages



// import React from 'react'
// import Message from './Message'

// function Messages() {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages

