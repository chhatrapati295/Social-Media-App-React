import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Users , Posts } from '../../dummyData'
export default function Feed() {
  return (
    <div className='feed'>
      <Share/>
      {Posts.map(element=>{
        return <Post key={element.id} element={element} />
      })}
    </div>
  )
}
