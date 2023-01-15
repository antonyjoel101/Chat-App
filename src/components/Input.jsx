import React from 'react'
import attach from "../image/attach.png"
import imgup from "../image/imgup.png"

const input = () => {
  return (
    <div className='input'>
      
      <input type="text" placeholder='type something...'></input>
      <div className="send">
        <img  src={attach} alt="" />
        <input  type=" file " style={{display:"none"}} id ="file"></input>
        <label  htmlFor='file'>
          <img src={imgup} alt="" />
        </label>
        <button>send</button>
      </div>
      
    </div>
  )
}

export default input