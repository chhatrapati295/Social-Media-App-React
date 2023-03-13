import { Bookmarks, CastForEducation, Chat, Event, Feed, Group, QuestionMark, ShoppingBag, Stars, VideoSettings } from '@mui/icons-material'
import React from 'react'
import './sidebar.css'
import { Users } from '../../dummyData'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className="sidebarList">
        <li className="sidebarListItem">
            <Feed/>
            <span className="itemName">Feed</span>
        </li>
        <li className="sidebarListItem">
            <Chat/>
            <span className="itemName">Chat</span>
        </li>
        <li className="sidebarListItem">
            <VideoSettings/>
            <span className="itemName">Videos</span>
        </li>
        <li className="sidebarListItem">
            <Group/>
            <span className="itemName">Groups</span>
        </li>
        <li className="sidebarListItem">
            <Bookmarks/>
            <span className="itemName">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
            <QuestionMark/>
            <span className="itemName">Questions</span>
        </li>
        <li className="sidebarListItem">
            <ShoppingBag/>
            <span className="itemName">Jobs</span>
        </li>
        <li className="sidebarListItem">
            <Event/>
            <span className="itemName">Events</span>
        </li>
        <li className="sidebarListItem">
            <CastForEducation/>
            <span className="itemName">Courses</span>
        </li>
      <button className="showMore">Show More</button>
      </ul>
      <p className='closeList'>
        <span className='closeText'>Close friends </span>
        <span className='star'><Stars/></span>
        </p>
      <ul className="profiles">
        {Users.map(element=>{
            return <li className="profilesItem" key={element.id}>
            <img src={element.profilePicture} alt="" className="profileImg" />
            <span className="profileName">{element.username}</span>
        </li>
        })}
      </ul>
    </div>
  )
}
