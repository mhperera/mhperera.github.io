import React from 'react'
import Stagebar from './Stagebar';

const TechGroup = ({ name, stage }) => {
  return (
    <div className='TechGroup'>
        <h4>{ name }</h4>
        <Stagebar stage={stage}/>
    </div>
  )
}

export default TechGroup