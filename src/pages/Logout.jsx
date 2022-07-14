import React from 'react'
import axios from "axios"
export default function Logout() {

  axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  return (
    <div className='text-light'>Logout</div>
  )
}
