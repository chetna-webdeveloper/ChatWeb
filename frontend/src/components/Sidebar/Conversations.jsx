import React from 'react'
import useGetConversations from '../../Hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji'
import Conversation from './Conversation'


const Conversations =()=> {
  const {loading ,conversations }=useGetConversations()
  // console.log(conversations)
  // console.log(conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>

{Array.isArray(conversations) && conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    
    {/* {conversations.map((conversation,idx)=>(
      <Conversation
      key={conversation._id}
      conversation={conversation}
      emoji={getRandomEmoji()}
      lastIdx ={idx === conversations.length -1}
      />
    ))} */}
    {loading? <span className='loading loading-spinner text-white duration-2 mx-auto'></span> : null}
    </div>
  )
}

export default Conversations


// import React from 'react'
// import Conversation from './Conversation'
// function Conversations() {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations