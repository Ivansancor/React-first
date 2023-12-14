import { useState } from 'react';
import Die from './Die';

function App() {
  const [dieArr, setDieArr] = useState([]);
 
  function genRandNum() {
    return Math.floor(Math.random()* 6);
  }

 
  for (let i = 1; i < 11; i++) {
    dieArr.push(
      {
        id: i, num: genRandNum(), held: false
      })
  }

   const dieElems = dieArr.map(die => <Die key={die.id} num={die.num}/>)


   return (
    <div className='bod'>
      <div className="text">
        <h1>Tensies!</h1>
        <p>You know the deal :3</p>
      </div>
      <div className='dice-container'>
        {dieElems}
      </div>
      <button className="butt">Click me to roll the dice!</button>
    </div>
  )
}

export default App
