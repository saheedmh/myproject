import React from 'react'
import { useEffect, useEffect } from 'react'
import axios from 'axios';

const Axioses = () => {
    const [post, setPost] = useState([])
useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(resp=>{
        console.log(resp.data)
    }).catch(err=>{
        console.log(err)
    })
})
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default Axioses
