import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Getaxios = () => {
    const [data, setData] = useState("")
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>{
        setData(resp.data)
        console.log(resp.data)
    }).catch(err=>{
        console.log(err)
    }, [])
})

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default Getaxios
