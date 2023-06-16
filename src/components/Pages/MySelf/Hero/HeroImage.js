import React from 'react'

const HeroImage = (props) => {
  return (
    <div className='HeroImage'>
      <img src={props.HeroImage} alt="" />
    </div>
  )
}

export default HeroImage