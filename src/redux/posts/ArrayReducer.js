import { ADD_POST} from "./ActionsTypes"
import {arrayInitalState} from "../posts/ArrayInitial"
//The array is the goal not the posts



const arrayReducer=(state=arrayInitalState, action)=>{
    switch(action.type){
        case(ADD_POST):
        return({
            ...state,
            postsArray: [...state.postsArray, action.payload]
        }
        )

        default: return state;
    }
}


export default arrayReducer