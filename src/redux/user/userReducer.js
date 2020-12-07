import {GET_USER_DATA} from "./userActionsType"
const initialUser={
    email:"",
    password:""
}

const userReducer=(state=initialUser, action)=>{
    switch (action.type){
        case(GET_USER_DATA):
        return({
            email: action.payload.email,
            password: action.payload.password
        })
        default: return state
    }
}

export default userReducer