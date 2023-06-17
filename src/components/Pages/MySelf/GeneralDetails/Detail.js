import React from 'react'

const Detail = (props) => {
  return (
    <div className='Detail'>
        <h1>{props.title}</h1>
        <span>{props.value}</span>
    </div>
  )
}

export default Detail