import React, {useState} from 'react'
import "./UseStateAdvansed.css"

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name:"Ulugbek",
        age:22,
        message: "random message",
    })
    console.log(person)
    const changeMessageHandler = ()=>{
      setPerson({...person, message: "Hello Ulugbek"})
    }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='clear-btn' onClick={()=>changeMessageHandler()}>change message</button>
    </React.Fragment>
  )
}

export default UseStateObject