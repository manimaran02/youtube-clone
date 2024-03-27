import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";





const Watch = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  // console.log(searchParams.get("v"))
  return (
    <div className="w-full">
       
      <div className="px-2 m-2 flex">
      <div>
      <iframe width="1000" height="550" 
              src={`https://www.youtube.com/embed/${searchParams.get("v")}?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=&autoplay=1&enablejsapi=1&widgetid=1`}
       title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay ;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
    </div>
    <div className="w-full">
      <LiveChat/>
      </div>
    </div>
  <CommentContainer/>
    </div>
  )
}

export default Watch