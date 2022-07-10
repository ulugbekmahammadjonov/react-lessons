import React, { useState } from 'react'
import { useReducer } from 'react'
import Modal from './Modal';


const reducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
            const newPeople = [...state.people, action.payload];
           return {
             ...state,
             people: newPeople,
             isModalOpen: true,
             modalContent: "item added",
           };
  
    }
    if(action.type === "NO_VALUE"){
        return{
            ...state,
            isModalOpen : true,
            modalContent: "Please, Enter VAlue"
        }
    }
      throw new Error("now matching action type")    
    
    
};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ""
} 
const UseReducer = () => {
    const [name, setName] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)
   const handleSubmit = e =>{
    e.preventDefault()
      if (name) {
        const newItem = { id: new Date().getTime.toString(), name };
        dispatch({ type: "ADD_ITEM", payload: newItem });
      }else{
        dispatch({type: "NO_VALUE"})
      }
   }


  return (
    <div>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text"
                value={name} 
                onChange={e =>setName(e.target.value)}/>
            </div>
            <button type='submit'>ADD</button>
        </form>
        {state.people.map((person)=>{
            return(
                <div key={person.id}>
                    <h4>{person.name}</h4>
                </div>
            )
        })}
    </div> 
  )
}

export default UseReducer