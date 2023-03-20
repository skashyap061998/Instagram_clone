import { useDispatch } from "react-redux"
import { ADD_TOKEN, SIGNUP_STATUS ,LOGIN_STATUS} from "./actiontype"

const signup_status = (payload)=>{
    console.log(payload,"fn")
    return {
        type:SIGNUP_STATUS,payload:payload
    }
}


const add_token = (payload)=>{

    return {
         
        type:ADD_TOKEN, payload:payload
    }
}

export const SignupFunction =(payload,navigate) =>async(dispatch)=>{
    // const dispatch = useDispatch()
console.log(payload,"paylod")
    const response = await fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log(data,"dat")
      if (data.status) {
        dispatch(signup_status(data.status))
        navigate("/login")
      } else {
        alert(data.message);
      }
}


export const LoginFunction =(payload,navigate) =>async(dispatch)=>{
    // const dispatch = useDispatch()
//     console.log("hello")
// console.log(payload,"paylod")
    const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
    //   console.log(data,"dat")    
      if (data.status) { 
        dispatch(add_token(data.token))
        alert(data.message)
        navigate("/")
      } else {
        alert(data.message);
      }
}