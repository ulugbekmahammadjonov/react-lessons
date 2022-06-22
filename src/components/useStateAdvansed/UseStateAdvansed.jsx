import React, {useState} from 'react'
import { data } from '../Data'
import "./UseStateAdvansed.css"
const UseStateAdvansed = () => {
    const [people, setPeople] = useState(data)
    const removeItem =(id)=>{
         let newPeople = people.filter((people) => {
          return people.id !== id;
         });
         setPeople(newPeople);
    }
    
  return (
    <React.Fragment>
        {
            people.map((person)=>{
                const {id, name} = person
                return(
                    <div className='item' key={id}>
                        <h4>{name}</h4>
                        <button className='remove-btn' onClick={()=>removeItem(id)}>Remove</button>
                    </div>
                )
            })
        }
        <button className='clear-btn' onClick={()=>setPeople([])}>clear items</button>
    </React.Fragment>
  )
}

export default UseStateAdvansed