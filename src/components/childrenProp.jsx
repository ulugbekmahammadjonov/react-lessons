import React from 'react'
import "./Books.css"

const childrenProp = (props) => {
  return (
    <div className='border_box'>{props.children}</div>
  )
}

export default childrenProp