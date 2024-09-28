import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import useConversation from '../zustand/useConversation'

const useGetMessage = () => {
 const [ loading ,setLoading]= useState(false)
 const {selectedConversation, messages,setMessages} = useConversation()

 useEffect(()=>{
    const getMessage = async()=>{
        setLoading(true)
       try {
           const res  = await fetch(`/api/v1/messages/${selectedConversation._id}`)
           const data = await res.json()
        //    console.log("Fetched data : ",data)
           if(data.error){
               throw new Error(data.error)
           }
           setMessages(data.data || [])
        //    console.log(data.data)
       } catch (error) {
           toast.error(error.message)
       }finally{
           setLoading(false)
       }
    }
 if(selectedConversation?._id){
    getMessage()}else{
        toast.error("NO CONVERSATION SELECTED")
    }
  return ()=>{
    setLoading(false)
  }
 },[selectedConversation?._id])

 return {loading,messages}
}

export default useGetMessage