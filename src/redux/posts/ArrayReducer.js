import { ADD_POST, GET_POST } from "./ActionsTypes"
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
        case(GET_POST):{
            if(!state.postsArray)
            return;
            const postId =state.postsArray.find((post)=>{
                if(post.id===action.id){
                return 
                }
            })
            console.log(postId)
            return state.postsArray[postId]
        }
        default: return state;
    }
}


export default arrayReducer