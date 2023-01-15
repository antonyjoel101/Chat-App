import React from 'react'
import "../style.scss"
import add from "../image/add.png"
import { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import {  Link  } from "react-router-dom"





const Register = () => {
  


  const handelSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      setUser(user)
      console.log(user)
      
    }).catch((err) => {
      console.log(err)
      const error = err.message 
    }) 
  }


  
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[user,setUser]=useState(null);
 
  

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
            <span className='logo' > Chat </span>
            <span className='title' > Register </span>

            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='Enter your Name'  value={username} onChange={(e)=> setUsername(e.target.value)} ></input>
                <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
                <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
                <input style={{display:"none"}} type="file" id="file" ></input>
                <label htmlFor="file" ><img src={add} alt="Icon" />
                    <span>Click to add Profile Picture</span>
                </label>
                
                <button type="submit"> Sign UP</button>
              
            </form>
            
            <p>You have an account ? <Link to='/'>Sign In</Link></p>
        </div>
    </div>
  )
}

export default Register