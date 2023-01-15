import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9y4QcX-P-90anH5wMLA63T5rkz0HIRWYwNXp0kihn&s" alt="" />
        <span>
          Just now
        </span>

      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9y4QcX-P-90anH5wMLA63T5rkz0HIRWYwNXp0kihn&s" alt="" />
      </div>
    </div>
  )
}

export default Message