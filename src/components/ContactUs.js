import React,{useState} from 'react'

const ContactUs=()=> {
    const [contact, setContact]=useState({
        email:"",
        subject:"",
        message:""
    })

    const updateContactForm=(e)=>{
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
    }

    const submitMessage=(e)=>{
        e.preventDefault()
        setContact({
            ...contact,
            email:"",
            subject:"",
            message:""
        })
    }

    return (
        <div className="contact-us-section">
        <form className="contact-us-form" onSubmit={submitMessage}>
        <h1 id="contact-us-title">COMMENT ON THIS POST</h1>
        <label id="email-label">NAME:</label><br/>
        <input id="email-input"  name="name" required onChange={updateContactForm}/><br/>
        <label id="email-label">EMAIL:</label><br/>
        <input id="email-input" type="email" placeholder="ex:jondoe@gmail.com" name="email" required onChange={updateContactForm}/><br/>
      
        <label id="message-label">COMMENT:</label><br/>
        <textarea  id="message-input"  name="message" required onChange={updateContactForm}/><br/>
 
        <input id="submit-button"  type="submit" value="Send"/>
        </form>
        </div>
    )
}

export default ContactUs
