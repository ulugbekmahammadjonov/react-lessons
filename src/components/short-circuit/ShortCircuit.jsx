import React, {useState} from 'react'

const ShortCircuit = () => {
    const [show, setShow] = useState(false) 
  return (
    <div>
        <button className='btn' onClick={()=>setShow(!show)}>
            show/hide
        </button>
        <h1>{show && "Hello"}</h1>
    </div>
  )
}

export default ShortCircuit