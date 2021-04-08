import React from 'react'
import moment from 'moment'
import '../Post-Item/postItem.css'

export default function PostItem(props) {
  return (
    <div className='post-item-container'>
      <div>
      <div className="vote-btn" >up</div>
        <h2>{props.topic.score}</h2>
        <div className="vote-btn">down</div>
      </div>
      <div>
      <h2>{props.topic.title}</h2>
      <p>{moment(props.topic.published_at).format('MMMM-Do-YYYY')}</p>

      </div>
      <div onClick={() => props.deleteHandle}>
        delete 
      </div>
    </div>
  )
}
