import React from 'react'

const Container = (props) => {
  return (
    <div className={`Container ${props.className}`} style={props.style} >{props.children}</div>
  )
}

export default Container