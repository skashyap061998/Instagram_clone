import { ADD_TOKEN, SIGNUP_STATUS } from "./actiontype.js"
// import {store} from "./s?tore.js"


const InitState = {
    Store_Status:false,
    token: ""
}
 const reducer = (state=InitState,{type,payload})=>{


switch (type){
    case SIGNUP_STATUS:{
        return {...state, Store_Status:payload}
    }
    case ADD_TOKEN:{
        localStorage.setItem("token",JSON.stringify(payload))
        return {
            ...state, token:payload
        }
    }
    default : {
        return state
    }
}

}

export  {reducer}