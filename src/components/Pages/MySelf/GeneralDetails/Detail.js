import React from 'react'

const Detail = (props) => {
  return (
    <div className='Detail' style={{width: '33%', display: 'inline-block'}}>
        <h1>{props.title}</h1>
        <span>{props.value}</span>
    </div>
  )
}

export default Detail