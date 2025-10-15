"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

   
    
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 ' >
      <h1 className='font-bold text-2xl' >Generate Your short URLs</h1>
      <div className='flex flex-col gap-2 ' >
        <input type="text"
        value={url}
        className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md'
         placeholder='Enter your URL'
         onChange={e=>{seturl(e.target.value)}} />

        <input type="text"
        value={shorturl}
        className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md ' 
        placeholder='Enter preferred short URL text'
        onChange={e=>{setshorturl(e.target.value)}} />
        <button className='bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold text-white my-3' >Generate</button>
      </div>
    </div>
  )
}

export default Shorten
