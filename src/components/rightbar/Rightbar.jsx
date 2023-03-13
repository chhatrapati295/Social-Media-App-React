import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import { FiberManualRecord } from '@mui/icons-material'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar1">
        <img src="/assets/gift.png" alt="" />
        <p className="rightbar1-text"><strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today.</p>
      </div>
      <div className="rightbar2">
        <img src="/assets/ad.png" alt="" />
      </div>
      <div className="rightbar3">
        <span className="rightbar3-text">Online Friends</span>
        <ul className="rightbar3Ul">
          {Users.map(elm=>{
            return <li className="rightbarLi" key={elm.id}>
            <img src={elm.profilePicture} alt="" />
            <span className="rightbar3-profileName">{elm.username}</span>
            <FiberManualRecord className='onlineTic'/>
          </li>
          })}
        </ul>
      </div>
    </div>
  )
}
