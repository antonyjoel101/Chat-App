import React from 'react'
import cam from "../image/cam.png"
import add1 from "../image/add1.png"
import more from "../image/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo' >
        <span>Jane</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add1} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat