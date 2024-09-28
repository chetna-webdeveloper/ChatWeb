import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp.jsx'

import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'
// import { io } from 'socket.io-client'
// import { useEffect } from 'react'

const App = () => {
  // const socket = io("http://localhost:5000")

  // useEffect(() => {

  //   socket.on("connect", () => {
  //     console.log("connected", socket.id)
  //   })

  //   socket.on("Welcome", (s) => {
  //     console.log(s)
  //   })

  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  const { authUser } = useAuthContext()

  return (
    < >
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/Login"} />} />
          <Route path='/Login' element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App




//-----------> SOCKET WORKING -- BUT FOR GETTING REAL TIME CHAT EXPERIENCE I HAVE TO CREATE CONTEXT <-------------// 
// import './App.css'
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import SignUp from './pages/SignUp/SignUp.jsx'

// import { Route, Routes, Navigate } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'
// import { useAuthContext } from './Context/AuthContext'
// import { io } from 'socket.io-client'
// import { useEffect } from 'react'
// // import Message from './components/Messages/Message'

// const App = () => {
//   const socket = io("http://localhost:5000")

//   useEffect(() => {

//     socket.on("connect", () => {
//       console.log("connected", socket.id)
//     })

//     socket.on("Welcome", (s) => {
//       console.log(s)
//     })

//     return () => {
//       socket.disconnect()
//     }
//   }, [])

//   const { authUser } = useAuthContext()

//   return (
//     < >
//       <div className='p-4 h-screen flex items-center justify-center'>
//         <Routes>
//           <Route path='/' element={authUser ? <Home /> : <Navigate to={"/Login"} />} />
//           <Route path='/Login' element={authUser ? <Navigate to="/" /> : <Login />} />
//           <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />

//         </Routes>
//         <Toaster />
//       </div>
//     </>
//   )
// }

// export default App


