import Button from "./Button"


const ButtonList = () => {

  const list = ["All","JavaScript","Movies","Songs","User Interface","Node js","Python","GOd of War","React Js"]
  // console.log(list.map((li)=>li))
  return (
    <div className="flex px-2">
      {list.map((li,index) =>  <Button name={li} key={index} />)}
    </div>
  )
}

export default ButtonList