import React,{useState} from 'react'
import {connect} from "react-redux"
import {v4 as uuidV4} from "uuid"
import {addPost} from "../redux/posts/Actions"


function AddPost({addPost}) {
    const [newPost, setNewPost]=useState({
        id:0,
        title:"",
        body:""
    })

    const UpdatingNewPost=(e)=>{
        setNewPost({
            ...newPost,
            id:uuidV4(),
            [e.target.name]: e.target.value
        })
       
    }
    const submitNewPost=(e)=>{
        e.preventDefault()
        addPost(newPost)
        console.log (newPost)

        
    }

    return (
        <div>
        <form className="add-post-form" onSubmit={submitNewPost}>
            <label id="title-label">TITLE:</label><br/>
            <input id="title-input" placeholder="ADD TITLE" name="title" required onChange={UpdatingNewPost}/><br/>
            <label id="body-label">BODY:</label><br/>
            <textarea  id="body-input" name="body" required onChange={UpdatingNewPost}></textarea><br/>
            <input id="upload-path" type="file"/>
            <br/>
            <input id="submit-button" type="submit" value="ADD POST"/>
            </form>
        </div>
    )
}


const mapDispatchToProps= dispatch=>{
    return{
        addPost: (post)=>dispatch(addPost(post))
    }
}

export default connect(null,mapDispatchToProps)(AddPost)

