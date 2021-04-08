const url = 'http://localhost:3015/topics'

export const getTopics = () => {
  return fetch(url)
  .then(data => data.json())
  .catch(error => console.log(error))
}

export const delTopic = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  }).then(error => console.log(error))
  
}
