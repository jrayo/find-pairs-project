import React, { useState } from 'react';
import findPairs  from './utils';
import './App.css';

function App() {
  const [listOfIntegers, setListOfIntegers] = useState<Array<number>>([])
  const [target, setTarget] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputNumber = Number((event.currentTarget.elements[0] as HTMLInputElement).value)
      if(listOfIntegers.includes(inputNumber)){
        return null;
      }
      event.currentTarget.reset();
      setListOfIntegers([...listOfIntegers, inputNumber]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>
          Current Target: 
          </label>
          <input name='list' type='number' placeholder="0" onChange={(event)=>{setTarget(Number(event.target.value))}}/>
        </form>
    
        <form onSubmit={handleSubmit}>
          <label htmlFor="List">Add number to the list</label>
          <input name='List' id="List" type='number' placeholder="0"/>
          <button type='submit'> ADD </button>
        </form>

        <p>
          Current List: {JSON.stringify(listOfIntegers)}
        </p>
        <button onClick={()=>setListOfIntegers([])}> CLEAR LIST </button>

        <p>
          Results: {JSON.stringify(findPairs(listOfIntegers, target))}
        </p>
        
      </header>
    </div>
  );
}

export default App;
