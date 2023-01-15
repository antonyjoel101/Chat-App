import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"  placeholder='Find a Frend'/>
      </div>
      <div className="userChat">
        <img  src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search