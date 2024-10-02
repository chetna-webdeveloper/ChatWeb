import React, { useState,useRef } from 'react'
import { BsSend, BsMic } from 'react-icons/bs'
import useSendMessage from '../../Hooks/useSendMessage'


const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()
    const [rows ,setRows]=useState(1)

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiSelect = (newEmoji) => {
        setMessage([...emoji,newEmoji]); // Append emoji to the message
        setShowEmojiPicker(false); // Close the emoji picker
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
        setRows(1)
        // console.log(message)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                // Allow new line
                setRows((prevRows) => (prevRows < 3 ? prevRows + 1 : prevRows)); // Max 3 rows
            } else {
                e.preventDefault(); // Prevent default Enter behavior
                handleSubmit(e); // Send message on Enter
            }
        }
    };


    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
          <div className='w-full relative'>
            <textarea
              type="text"
              className={`border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-300 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              placeholder='Send a message'
              value={message}
              onChange={(e) => !loading && setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={rows}
              style={{ resize: 'none', overflow: 'hidden' }}
            />
            
            <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-700' disabled={loading}>
              {loading ? <div className='loading loading-spinner'></div> : <BsSend className="text-2xl" />}
            </button>
          </div>
        </form>
      );
}

export default MessageInput




// import React from 'react'
// import {BsSend} from 'react-icons/bs'

// function MessageInput() {
//   return (
// <form className='px-4 my-3'>
//     <div className='w-full relative'>
//         <input type="text" 
//         className='border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-300 text-white'
//         placeholder='Send a message'
//         />
//         <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend/></button>
//     </div>
// </form>

//     )
// }

// export default MessageInput