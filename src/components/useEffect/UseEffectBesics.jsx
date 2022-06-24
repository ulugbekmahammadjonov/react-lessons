import React,{useState, useEffect} from 'react'

const UseEffectBesics = () => {
  const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log("useEffect call")
        if(value >=5){
            document.title = `Message new ${value}`;
        }
    }, [])
    
    console.log("render comp")
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>setValue(value+1)}>clic </button>
    </div>
  )
}

export default UseEffectBesics