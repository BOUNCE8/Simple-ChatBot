import {useState, useEffect} from 'react'
import { getTopics, delTopic } from '../../Services/ApiService'
import PostList from '../Post-List/PostList'
import '../Dashboard/dashboard.css'

export default function Dashboard() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(topics => {
      setTopics(topics)
      // console.log(topics)
    })
  },[]);

  const deleteHandle = async (id) => {
    await delTopic(id);
    setTopics(prevVal => prevVal.filter(post => post._id !== id))
  }

  return (
    <div className='container'>
      <PostList topics={topics} deleteHandle={deleteHandle}></PostList>
      
    </div>
  )
}
