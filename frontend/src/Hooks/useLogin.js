import { toast } from "react-hot-toast"
import { useAuthContext } from "../Context/AuthContext"
import { useState } from "react"

const useLogin = ()=>{
    const [ loading,setLoading] = useState(false)
    const{setAuthUser}=useAuthContext()

    const login =async(username,password)=>{
        const success = handleInputErrors({ username, password })
        if (!success) return;
        setLoading(true)
 try {
    const res = await fetch("/api/v1/users/Login",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
    })
    const data = await res.json()
    if(data.error){
        throw new Error(data.error)
    }
    localStorage.setItem("chat-user",JSON.stringify(data))
    setAuthUser(data)
 } catch (error) {
    toast.error(error.message)
 }finally{
    setLoading(false)
 }
    }
    return {loading,login}
}
export default useLogin

function handleInputErrors({  username, password }) {
    if (!password || !username ) {
        toast.error("All fields are neccessary.")
        return false;
    }
    if (password.length < 6) {
        toast.error("Password length must be greter than 6");
        return false
    }
    return true;
}