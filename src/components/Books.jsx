import "./Books.css"
import React, {useState} from "react"
import Counter from "./Counter"

 const Books = (props)=>{
 
  const [title, setTitle] = useState(props.title)
  // const clickHandler = ()=>{
    //   console.log("click")
    // }
    const titleChangeHandler = ()=>{
      setTitle("Ulugbek MAhammadjonov")
    }
    const titleResetHandler = ()=>{
      setTitle(props.title)
    }
    return (
      <div className="book">
        <img
          className="book_img"
          src={props.img}
          alt=""
        />
        <div className="book_desc">
          <h2>{title}</h2>
          <p>{props.author}</p>
          <button onClick={titleChangeHandler}>Change click</button> <br />
          <button onClick={titleResetHandler}>reset title</button>
          <Counter />
        </div>
      </div>
    );
 }
 export default Books;