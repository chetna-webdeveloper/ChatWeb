//NOW GIVING A NEW TRY 
import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from '../assets/sounds/Bell.mp3'

const useListenMessage = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages}= useConversation()
  

  useEffect(()=>{
//IT WAS WORKING 
   
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true
        const sound = new Audio(notificationSound)
        sound.play()
        setMessages([...messages,newMessage])
    })

    //  socket.on('recive-message',(data)=>{
    //   console.log(data);
    //  })

    return ()=> socket?.off("newMessage")
  },[socket,setMessages,messages])
}
export default useListenMessage;





// ------------------> <-----------------------//



/// OLD NOT WORKING CODE -- YESTERDAY ---
// import React, { useEffect } from 'react'
// // import { useSocketContext } from '../Context/SocketContext'
// import useConversation from '../zustand/useConversation'
// import notificationSound from '../assets/sounds/Bell.mp3'

// const useListenMessage = () => {
// //  const {socket} = useSocketContext()
//  const{messages,setMessages} = useConversation()

//  useEffect(()=>{
//   socket?.on("newMessage",(newMessage)=>{
//     newMessage.shouldShake = true
//     const sound = new Audio(notificationSound)
//     sound.play()
//     setMessages([...messages,newMessage])
//   })
//   return ()=>socket?.off("newMessage")
//  },[socket,setMessages,messages])
// }

// export default useListenMessage