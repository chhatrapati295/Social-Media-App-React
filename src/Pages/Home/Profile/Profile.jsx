import React from 'react'
import './profile.css'
import Sidebar from '../../../components/sidebar/Sidebar'
import Topbar from '../../../components/topbar/Topbar'
import { Users } from '../../../dummyData'
import Feed from '../../../components/feed/Feed'
import Rightbar2 from '../../../components/Rightbar2/Rightbar2'

export default function Profile() {
  return (
    <div>
        <Topbar/>
        <div className="profile-container">
            <Sidebar/>
            <div className="profileRightBar">
                <div className="topProfileBar">
                    <img src="/assets/post/3.jpeg" alt="" className="profileBanner" />
                    <div className="profileInfo">
                    <img src="/assets/person/7.jpeg" alt="" className="profilePic" />
                    <h4 className='profileName'>{Users[0].username}</h4>
                    <span className="bioText">Hello I am a calm person.</span>
                    </div>
                </div>
                <div className="bottomProfileBar">
                  <Feed/>
                  <Rightbar2/>
                </div>
            </div>
        </div>
    </div>
  )
}
