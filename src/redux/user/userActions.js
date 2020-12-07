import {GET_USER_DATA} from "./userActionsType"

export const getUser =(user)=>{
    return{
       type:GET_USER_DATA,
       payload:user
    }
    
}