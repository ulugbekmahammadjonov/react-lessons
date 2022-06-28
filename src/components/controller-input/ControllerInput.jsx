import React, {useState} from 'react'
import "./ControllerInput.css"
const ControllerInput = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(firstName && email){
            const person = {id : new Date().getTime().toString(), firstName, email}
            console.log(person)
            setPeople(people =>{
                return [...people, person]
            })
            setFirstName("")
            setEmail('')
        }else{
            alert("Empty value")
        }
    }
  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">NAme:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>add</button>
      </form>
      {
        people.map((person,index)=>{
            const{id, firstName, email} = person
            return(
                <div className='item' key={index}>
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                </div>
            )
        })
      }
    </React.Fragment>
  );
}

export default ControllerInput