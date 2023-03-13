import './topbar.css'
import{Search , Person, Notifications, Chat} from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Topbar() {
  return (
    <div>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/'><span className="logo">Facebook</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                <Search className='searchIcon'/>
                <input placeholder='search for a friend, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Link to='/login'><Person className='icon2'/></Link>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat className='icon2'/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications className='icon2'/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to='/profile'><img src="/assets/person/1.jpeg" className='topbarImg' alt="" /></Link>
            </div>
        </div>
    </div>
  )
}
