import React from 'react'



const Comments = ({data}) => {
  const {name,comment} = data
  return (
    
      <div className='flex my-4 p-2 bg-gray-100 rounded-lg'>
      <img alt='user' className='h-9 mt-1' src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' />
      
       <div>
        <div className='font-semibold'>{name}</div>
        <div>{comment}</div>
        </div>
        </div>  
    
  )
}

export default Comments