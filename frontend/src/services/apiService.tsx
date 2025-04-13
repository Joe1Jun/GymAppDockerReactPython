import axios from "axios"




const loginUser = async (email : string, password_hash : string) => {

    try {

        const response = await axios.post("http://localhost:5000/login", {
            email,
            password_hash

        })
        console.log(response)
        
        return response.data.response
        
    } catch (error) {
        
    }
}

const registerUser = async (userName : string , email : string, password_hash : string) => {

    try {

        const response = axios.post("http://localhost:5000/register", {
            userName,
            email,
            password_hash

        })
        console.log(response)
        
    } catch (error) {
        
    }
}



export {loginUser, registerUser}