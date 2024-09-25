import React from 'react'

function Message() {
  return (
    <div className=' chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=" alt="user avatar" /> 
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-400`}>Hi what's up</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> 12:42</div>

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