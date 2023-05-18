import React from 'react'
import "./Cardfooter.css";

const CardFooter = (props) => {
  return (
    <div className='cardfooter'>
        <img src="../../Images/image-avatar.png" className='avatarimg'/>
        <p>{props.children}</p>
    </div>
  )
}

export default CardFooter