import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
    <img className="h-7 cursor-pointer "
  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
  alt="user-icon" />
  <span className='pr-2 font-semibold'>{name} :</span>
  <span className='text-justify'>{message}</span>
</div>
  )
}

export default ChatMessage