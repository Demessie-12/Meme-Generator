import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1)
  const [starWarsData, setStarWarsData] = useState({})

  useEffect(function() {
    console.log(starWarsData);
    fetch(`https://swapi.dev/api/people/${count}`).then(res => res.json()).then(data => setStarWarsData(data))
  }, [count])
  


function addCount() {
  setCount((prev) => 
    prev + 1
  )
}

  return (
    <div className="counter--count">
      <h1>Count is {count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  );
}
