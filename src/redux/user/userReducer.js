import {GET_USER_DATA} from "./userActionsType"
const initialUser={
    id:"",
    name:"",
    email:""
}

const userReducer=(state=initialUser, action)=>{
    switch (action.type){
        case(GET_USER_DATA):
        return({
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email
        })
        default: return state
    }
}

export default userReducer