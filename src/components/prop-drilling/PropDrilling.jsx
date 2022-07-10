import React, {useState} from 'react'
import { data } from '../Data'

const PropDrilling = () => {
    const [people, setPeople] = useState(data)
    const removePerson = id =>{
        setPeople(people =>{
            return people.filter(person => person.id !== id)
        })
    }
  return (
    <section>
        <h4>props drilling</h4>
        <List people={people} removePerson={removePerson}/>
    </section>
  )
}

const List = ({people, removePerson}) => {
    return (
      <div>
        {people.map((person) => {
          return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
        })}
      </div>
    );
}
const SinglePerson = ({id, name, removePerson}) => {
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={()=>removePerson(id)}>remove</button>
    </div>
}

export default PropDrilling