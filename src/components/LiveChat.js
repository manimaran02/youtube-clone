import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { getRandomName, getRandomString } from '../utils/helper.';





const LiveChat = () => {
  
  const dispatch = useDispatch();
  const chats = useSelector((store)=>store.chat.message);
  const [liveMessage,setliveMessage] = useState("")
  
//  chatSelector.map(c=>console.log(c.name,c.message))
  useEffect(()=>{

   const interval = setInterval(()=>{
      
      // console.log("Manimaran SDE at freshworks")
      dispatch(addMessage({
          name : getRandomName(),
          message :  getRandomString(25)+"  😎"
      }))
   },1000)
   
   return ()=>{
      clearInterval(interval);
   }

  },[])

  return (
    
    <div className='border border-black  ml-2 rounded-lg bg-slate-100'>
      <div className='font-bold p-3'>Live Chat</div>  
    <div className=' overflow-y-scroll h-[475px] flex flex-col-reverse'> 
    
    
    {chats.map((c,index)=>(
    <ChatMessage key={index} name={c.name} message={c.message}/>
    
    ))}
    {/* <Chatmsg name={chats[0].name} message={chats[0].message}/> */}
    
    </div>
    <form className=' w-full border border-t-black px-2 py-4 flex justify-around ' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name : "Manimaran",
        message : liveMessage,
      }))
      
      setliveMessage("")
       
        
    }}>
      <>
      {liveMessage.length !== 0 ? <img className="h-8 mt-1"
  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
  alt="user-icon" /> : ""}
      <input className='mx-4 w-2/3 p-2 rounded-full' onChange={(e)=>setliveMessage(e.target.value)} value={liveMessage}  type='text' placeholder='Chat...'/>

      <button className='px-3 py-1 bg-green-300 rounded-full'>Send</button>

      </>
    </form>
    </div>

  )
}

export default LiveChat