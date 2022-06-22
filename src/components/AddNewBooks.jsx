import React, {useState} from 'react'
import "./AddNewBooks.css"


const AddNewBooks = () => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAuthor, setEnteredAuthor] = useState("")
    const titleChangeHandler = event =>{
        setEnteredTitle(event.target.value)
    }
    const authorChangeHandler = event=>{
        setEnteredAuthor(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const newBookData = {
            title:enteredTitle,
            author:enteredAuthor
        }
        console.log(newBookData)
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="addNew-book">
        <div className="new-book__controls">
          <div className="new-book__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-book__control">
            <label>Author</label>
            <input type="text" onChange={authorChangeHandler} />
          </div>
        </div>
        <button>Add BOOK</button>
      </div>
    </form>
  );
}

export default AddNewBooks