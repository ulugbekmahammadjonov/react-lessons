import React, {useState, useEffect} from 'react'

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checksize = ()=>{
        setSize(window.innerWidth)
    }
        
    useEffect(()=>{
        window.addEventListener("resize", checksize)
        return ()=>{
            window.removeEventListener("resize", checksize)
        }
    }, [])

  return (
    <div>
        <h1>Window</h1>
        <h2>{size}</h2>
    </div>
  )
}

export default UseEffectCleanup