import { MoreVert } from '@mui/icons-material'
import React,{useState} from 'react'
import './post.css'
import { Users } from '../../dummyData'

export default function Post(props) {
  const[myLike,setMyLike] = useState(props.element.like)
  const[isLiked,setIsLiked] = useState(false)
  const likeHandle = ()=>{
    setMyLike(isLiked ? myLike -1 : myLike+1)
    setIsLiked(!isLiked)
  }

  
  return (<>
    <div className='post'>
      <div className="post1">
        <div className="sm-post1">
        <img src={Users.filter(u=>u.id===props.element.userId)[0].profilePicture} alt="" className='postProfileImg' />
        <span className="postProfileName">{Users.filter(u=>u.id===props.element.userId)[0].username}</span>
        <span className="postTime">{props.element.date}</span>
        </div>
        <div className="sm-post2">
            <MoreVert/>
        </div>
      </div>
      <div className="post2">
        <span className="post-caption">{props.element.desc}</span>
      </div>
      <div className="post3">
        <img src={props.element.photo} className='post3Img' alt="" />
      </div>
      <div className="post4">
        <div className="post4-sm1">
            <img src="/assets/like.png" onClick={likeHandle}  className='post4Img' alt="" />
            <img src="/assets/heart.png" className='post4Img' alt="" />
            <span className="post4-text1">{myLike} people like it</span>
        </div>
        <div className="post4-sm2">
            <span className="post4-text2">{props.element.comment} comments</span>
        </div>
      </div>
    </div>
  </>
  )
}
