import {GET_USER_DATA} from "./userActionsType"
const initialUser={
    userName:"",
    password:""
}

const userReducer=(state=initialUser, action)=>{
    switch (action.type){
        case(GET_USER_DATA):
        return({
            userName: action.payload.userName,
            password: action.payload.password
        })
        default: return state
    }
}

export default userReducer