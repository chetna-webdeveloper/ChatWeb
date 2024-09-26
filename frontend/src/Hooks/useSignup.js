// import { response } from "express"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useAuthContext } from "../Context/AuthContext"
import { useNavigate } from 'react-router-dom'


export const useSignup = () => {
    const [loading, setLoading] = useState(true)
    const{setAuthUser}=useAuthContext()
    const navigate = useNavigate()

    const signup = async ({ fullname, username, password, gender }) => {
        const success = handleInputErrors({ fullname, username, password, gender })
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/v1/users/SignUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, gender }),
            })
            const data = await res.json()
            console.log(data)

            //SETTING THE TOKEN
            localStorage.setItem("accessToken",data.token)

            //LOCAL STORAGE
            localStorage.setItem("chat-user",JSON.stringify(data.user))
            
            //CONTEXT
            setAuthUser(data.user)
            toast.success("Signup successfully")

            navigate("/login");

        } catch (error) {
            toast.error(`Error while getting response: ${error.message}`)
        } finally {
            setLoading(false)
        }

    }
    return { loading, signup }
}

function handleInputErrors({ fullname, username, password, gender }) {
    if (!fullname || !username || !password || !gender) {
        toast.error("All fields are neccessary.")
        return false;
    }
    if (password.length < 6) {
        toast.error("Password length must be greter than 6");
        return false
    }
    return true;
}