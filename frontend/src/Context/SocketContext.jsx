import { createContext,useContext,useEffect, useState } from "react";
import io from 'socket.io-client'
import { useAuthContext } from "./AuthContext";

 const SocketContext = createContext()

 const useSocketContext = ()=>{
  return useContext(SocketContext)
 }

 const SocketContextProvider = ({children})=>{
  const [socket, setSocket] = useState(null); // Move socket to state
  const [onlineUsers,setOnlineUsers]=useState([])
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("https://chatweb-1-cnmt.onrender.com/",{
        query:{
          userid: authUser.data.user._id
        }
      }); // Use local variable and then set state
      console.log(authUser.data.user._id);
      
      setSocket(newSocket);

      newSocket.on("getOnlineUsers",(users)=>{
        setOnlineUsers(users)
      })

      newSocket.on("connect", () => {
        console.log("connected", newSocket.id);
      });

      newSocket.on("Welcome", (message) => {
        console.log(message);
      });

      // newSocket.on("onlineUsers",(users)=>{
      //   setOnlineUsers(users)
      // })

      // Cleanup function
      return () => {
        if (newSocket) {
          newSocket.disconnect();
          console.log("socket disconnected");
        }
      };
    }},[authUser])
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContextProvider,SocketContext,useSocketContext}


// import { createContext, useEffect, useState } from "react";
// import { useAuthContext } from "./AuthContext";
// import  io  from "socket.io-client";

// const SocketContext = createContext()
// export const SocketContextProvider = ({children})=>{
//   const [socket,setSocket]=useState(null)
//   const [onlineUsers,setOnlineUsers]=useState([])
//   const {authUser} = useAuthContext()

//   useEffect(()=>{
//    if(authUser){
//     const socket = io("http://localhost:5000");
//     setSocket(socket)

//     return ()=>{
//         socket.close()}
//    }else{
//         if(socket){
//             socket.close();
//             setSocket(null)
//         }
//    }
//   },[authUser])

//     return(
//         <SocketContext.Provider value={{socket,onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
//     )
// }