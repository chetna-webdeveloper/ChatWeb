import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../Context/AuthContext"


const useLogout = ()=>{
    const [ loading,setLoading] = useState(false)
    const{setAuthUser} = useAuthContext()

    const logout = async()=>{
        setLoading(true)
        try {

                  // Retrieve the token from localStorage
        const token = localStorage.getItem("accessToken"); // Assuming the token is stored here

        if (!token) {
            toast.error("Token not found. Please log in again.");
    setAuthUser(null); // Clear the auth state
    return; // Don't proceed further
        }
            console.log("Hi")
            const res = await fetch("/api/v1/users/logout",{
                method :"POST",
                credentials: "include",
                headers:{ 
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json"}
            });
            console.log(res)
      

                // Check if the response is JSON before trying to parse it
    // const contentType = res.headers.get("Content-Type");
    // if (contentType && contentType.includes("application/json")) {
    //   const data = await res.json();
    //   if (data.error) {
    //     throw new Error(data.error);
    //   }
    // } else {
    //   throw new Error("Received a non-JSON response from the server");
    // }
       if(res.ok){
        localStorage.removeItem("accessToken")
        localStorage.removeItem("chat-user");
        setAuthUser(null)
        toast.success("Logged out successfully")
       }else{
        const data = await res.json(); // Only try parsing JSON when the response is not ok
  throw new Error(data.message || "Failed to logout");
       }
         
        } catch (error) {
            toast.error(`Error while logout:${error.message}`)
        }finally{
            setLoading(false)
        }

        
    }

    return {loading,logout}
}

export default useLogout;