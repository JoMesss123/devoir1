import React from 'react'
import "./CardInformation.css"

const CardInformation = () => {
  return (
    <div className='cardinformation'>
        <span className='cardspan'>
            <img src="../../Images/icon-ethereum.svg" />
            <p>0.041eth</p>
        </span>
        <span className='cardspan'>
            <img src="../../Images/icon-clock.svg" />
            <p>
                3 Days Left
            </p>
        </span>
    </div>
  )
}

export default CardInformation