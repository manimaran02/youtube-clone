import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



const SideBar = () => {

  const toggleSideBar = useSelector(store => store.app.isMenuOpen)

  if(!toggleSideBar) return null;

  return (
    <div className="w-48 shadow-lg p-4"> 
      <ul className="border-b-2 border-gray-300 pb-3">
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-semibold py-2">Subscription</h1>
      <ul className="border-b-2 border-gray-300 pb-3">
        <li>Gaming</li>
        <li>Mousic</li>
        <li>Movies</li>
        <li>Channels</li>
      </ul>
      <h1 className="font-semibold py-2">Watch Later</h1>
      <ul className="border-b-2 border-gray-300 pb-3">
        <li>Download</li>
        <li>History</li>
        <li>Liked Video</li>
        <li>Channels</li>
      </ul>
    </div>
  )
}

export default SideBar