import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import React, { useEffect, useState }  from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cachingResult } from "../utils/searchSlice";



const Head = () => {

  const [searchQuery,setsearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSearchBar,setshowSearchBar] = useState(false);
  const cache = useSelector(store=>store.search);

  const dispatch = useDispatch()

 

  useEffect(()=>{
   
  //  Debouncing in React {It used to make control of API how many time to called }
   const timer = setTimeout(()=>{
   
    if(cache[searchQuery]){
      return setSuggestions(cache[searchQuery])
    }
    else{
      getSearchQuery()
    }
    },200)

   return ()=>{
    clearTimeout(timer)
   }
},[searchQuery])

  const getSearchQuery =  async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json();
    console.log("API => "+searchQuery)
    setSuggestions(json[1])
    dispatch(cachingResult({
      [searchQuery] : json[1]
    }));
  }

  const toggleMenuBar = () =>{
   dispatch(toggleMenu())
   
  }


  return (
    <div className=" sticky top-0 w-full bg-white grid grid-flow-col p-4 mb-4 shadow-lg">
      <div className="flex col-span-1">     
         
         <img
          onClick={()=>toggleMenuBar()}
          className="h-9 cursor-pointer " 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
      alt="hamburger" />
      <a href = "/">
      <img
     
       className="h-8 bg-white  mx-3 cursor-pointer" 
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
      alt="logo"/>
      </a>
      </div>
      <div>   
      <div className="col-span-10  flex justify-center ">
      
    <input className="w-full  border border-gray-400 outline-none px-4 rounded-l-full"
      placeholder="Search"
      value={searchQuery}
      onChange={(e)=>setsearchQuery(e.target.value)}
      onFocus={()=>{setshowSearchBar(true)}}
      onBlur={()=>setshowSearchBar(false)}
      type="search"
      />
      
      {/* <div>{json[1]}</div> */}
      <button className="p-2 border border-gray-400 bg-gray-100 rounded-r-full">
        <img className="h-5 px-2" alt="Search" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymNqA3VULmW5y85a4NteoJ_qYCG4q2OUaIA&usqp=CAU" />
      </button>
      </div>
      <div className="fixed w-[35rem] bg-white p-2 rounded-lg">
        <ul className="">
        
          {showSearchBar && suggestions.map(suggest=><li key={suggest}
           className="flex justify-between py-2 px-3 shadow-sm hover:bg-gray-100">
            {suggest}<img  className="h-5 mt-1" alt="Search" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymNqA3VULmW5y85a4NteoJ_qYCG4q2OUaIA&usqp=CAU"/></li>)}
        </ul>
      </div>
      </div>

     
    <div className="col-span-1 flex justify-end">
      <img className="h-9 cursor-pointer "
      src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      alt="user-icon" />
    </div>
    </div>
  )
}

export default Head;