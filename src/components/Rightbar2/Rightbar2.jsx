import { Users } from '../../dummyData'
import './rightbar2.css'

export default function Rightbar2() {
  return (
    <div>
      <div className="rightbar2">
        <p className="userinfoHeading">User Information</p>
        <ul className="userInfo">
            <li className="userinfoItem"><span className="one">City : </span>NewYork</li>
            <li className="userinfoItem"><span className="one">From : </span>Madrid</li>
            <li className="userinfoItem"><span className="one">Relationship : </span>Single</li>
        </ul>
        <div className="userFriends">
            <h2>Friends</h2>
            <hr />
            {Users.map(e=>{
                return <div className="userFriends-Box" key={e.id}>
                <img src={e.profilePicture} alt="" className='userFriendsImg' />
                <p className="userFriendName">{e.username}</p>
            </div>
            })}
        </div>

      </div>
    </div>
  )
}
