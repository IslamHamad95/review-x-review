import { GET_POST, ADD_POST } from "./ActionsTypes"

export const addPost=(post)=>{
    return{
        type:ADD_POST,
        payload: post
    }
}

export const getPost=(id)=>{
    return{
        type: GET_POST,
        id:id,
    }
}