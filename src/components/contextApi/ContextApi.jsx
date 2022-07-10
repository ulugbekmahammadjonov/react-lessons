import React, { useState, useContext } from "react";
import { data } from "../Data";


const PersonContext = React.createContext()
const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson, people}}> 
      <h4>props drilling</h4>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = ({ people, removePerson }) => {
    const mainData= useContext(PersonContext)
  return (
    <div>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};
const SinglePerson = ({id, name}) => {
 const {removePerson} = useContext(PersonContext)
    
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextApi;
