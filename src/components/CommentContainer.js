import React from 'react'
import CommentList from './CommentList'

const commentData = [{
    name : "Manimaran",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies : [
        {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : [
                {
                    name : "Manimaran",
                    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies : []
                },
            ]
        },
        {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : []
        },
        {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : []
        },
        {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : [{
                name : "Manimaran",
                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies : [{
                    name : "Manimaran",
                    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies : []
                },]
            },]
        },
    ]
  },
  {
    name : "Manimaran",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies : []
  },
  {
    name : "Manimaran",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies : []
  },
  {
    name : "Manimaran",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies : [
        {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : [
                {
                    name : "Manimaran",
                    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies : [
                        {
                            name : "Manimaran",
                            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            replies : []
                          },
                    ]
                  },
            ]
          },
          {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : []
          },
          {
            name : "Manimaran",
            comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies : [
                {
                    name : "Manimaran",
                    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies : []
                  },
            ]
          },
    ]
  },
  ]


const CommentContainer = () => {
  return (
    <div className='p-3 m-3'>
      
      <h1 className='font-bold'>Comments :</h1>
        <CommentList comments={commentData}/>
        
    </div>
  )
}

export default CommentContainer



