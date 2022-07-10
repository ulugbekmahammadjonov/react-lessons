import React, { useState } from 'react'
import { useReducer } from 'react'
import Modal from './Modal';
import{ reducer} from './reducer';


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
        const newItem = { id: new Date().getTime().toString(), name };
        dispatch({ type: "ADD_ITEM", payload: newItem });
        setName("")
      }else{
        dispatch({type: "NO_VALUE"})
      }
   }
   const closeModal = ()=>{
    dispatch({type: "CLOSE_MODAL"})
   }

  return (
    <div>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
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
                <div className='item' key={person.id}>
                    <h4>{person.name}</h4>
                    <button onClick={()=>dispatch({type : "REMOVE_ITEM", pyload: person.id})}>remove</button>
                </div>
            )
        })}
    </div> 
  )
}

export default UseReducer