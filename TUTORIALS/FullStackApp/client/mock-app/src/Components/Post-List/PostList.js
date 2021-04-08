import React from 'react'
import PostItem from '../Post-Item/PostItem'
import '../Post-List/PostList.css'

export default function PostList(props) {
  
  const postList = props.topics.map(topic => <PostItem key={topic._id} topic={topic} deleteHandle={props.deleteHandle}/>)


  return (
    <div>
      <div className='post-container'>
      {postList}
      </div>
      
    </div>
  )
}
