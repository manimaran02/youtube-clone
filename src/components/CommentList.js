import React from 'react'
import Comments from './Comments'

const CommentList = ({comments}) => {
  return comments.map((comment,index)=>
  (
    <div key={index}>
  <Comments data={comment}/>
  
  <div className='pl-5 ml-5 border border-l-black'>
  {/* <Comments key={index} data={comment}/>
  <Comments key={index} data={comment}/>
  <Comments key={index} data={comment}/> */}
  <CommentList comments={comment.replies}/>
  </div>
  </div>
  ))
  }

export default CommentList