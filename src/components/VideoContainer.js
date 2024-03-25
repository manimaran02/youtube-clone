import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"


const VideoContainer = () => {
  

  const [videos,setVideo] = useState([])

  const fetchData = async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json()
  //  console.log(json.items)
    setVideo(json.items)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="flex flex-wrap">
      {videos.map((video) =>
      <Link to={"watch?v="+video.id} key={video.id}>
      <VideoCard info={video} />
      </Link>
      )}
    </div>
  )
}

export default VideoContainer