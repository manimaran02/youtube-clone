

const VideoCard = ({info}) => {
  if(!info) return;
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  const {viewCount} = statistics
  
  return (
    <div className="w-64 p-2 m-2 shadow-sm cursor-pointer">
        <img className="rounded-lg " alt="thumbnail" src={thumbnails.medium.url} />
        <div className="font-semibold">{title}</div>
        <div>{channelTitle}</div>
        <div>{viewCount} views</div>

    </div>
  )
}

export default VideoCard