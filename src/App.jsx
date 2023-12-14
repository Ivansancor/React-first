import { useState, useEffect } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid'

function App() {
  const [dieArr, setDieArr] = useState(createNewDice());
  const [isGameWon, setIsGameWon] = useState(false);
 
  useEffect(() => {
    const winningNum = dieArr[0].num
    if (dieArr.every(die => die.isHeld === true) && dieArr.every(die => die.num === winningNum)) {
     setIsGameWon(prevGame => !prevGame)
    }
  }, [dieArr])

  function genRandNum() {
    return Math.floor(Math.random()* 6);
  }

  function genOneDie() {
    return {
      id: nanoid(), num: genRandNum(), isHeld: false
    }
  }

  function createNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
    arr.push(genOneDie())
    }
    return arr;
  }
  
  function rollDice() {
    setDieArr(prevDice => prevDice.map(die => {
      if (isGameWon){
        setIsGameWon(false);
        return genOneDie();
      } else if (die.isHeld && isGameWon === false){
        return die;
      } else {
        return genOneDie();
      }
    }))
  }

  function toggleHeld(id) {
    setDieArr(prevDice => prevDice.map(die => {
      if (die.id === id) {
        return {...die, isHeld: !die.isHeld}
      } else { 
        return die;
      }
    }))
  }

   const dieElems = dieArr.map(die => <Die key={die.id} num={die.num} isHeld={die.isHeld} toggle={() => toggleHeld(die.id)}/>)


   return (
    <div className='bod'>
      <div className="text">
        <h1>Tensies!</h1>
        <p>You know the deal :3</p>
      </div>
      {isGameWon ? <div style={{fontSize: '48px'}}>CONGRATS! YOU HAVE WON THE GAME!</div> : <div className='dice-container'>{dieElems}</div>}
      <button className="butt" onClick={rollDice}>{isGameWon ? 'CLICK ME TO RESTART THE GAME' : 'Click me to roll the dice!'}</button>
    </div>
  )
}

export default App
