import React from 'react'
import "../style.scss"
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import {Routes, Route, useNavigate, Link} from 'react-router-dom';




const Login = () => {

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      // setUser(user)
      console.log(user)
      
    }).catch((err) => {
      console.log(err)
      const error = err.message 
    }) 
  }
  
  // const login = () => {
  //   console.log("helo antony")
  //   signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
  //     const user = userCredential.user
  //     setUser(user)
  //   }).catch((err)=>{
  //     const error = err.message
  //   })
  // }
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)
  

  return (

  
    <div  className='formContainer'  >
        <div className='formWrapper'>
            <span className='logo' > Chat APP </span>
            <span className='title' > Login </span>

            <form onSubmit={login}>
                <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
                <button type="submit">Login</button>
            </form>
            <p>You dont have an account ? <Link to='/register'>Sign Up</Link></p>
        </div>
    </div>
    
    

  )
}

export default Login