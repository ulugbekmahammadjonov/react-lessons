import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  console.log(inputValue);

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    count.current = count.current + 1;
    console.log(refContainer.current);
  });
  
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    <div ref={divContainer}>Hello World</div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default UseRef;
