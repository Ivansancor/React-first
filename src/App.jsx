import { useState, useEffect } from 'react';
import Die from './Die';
import Winner from './Winner';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dieArr, setDieArr] = useState(createNewDice());
  const [isGameWon, setIsGameWon] = useState(false);
 
  const [rounds, setRounds] = useState(0)

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
    if (!isGameWon) {
      setRounds(prevRounds => prevRounds + 1);
      setDieArr((prevDice => prevDice.map(die => {
        return die.isHeld ? die : genOneDie();
      })))
    } else {
      setIsGameWon(false);
      setRounds(0);
      setDieArr(createNewDice());
    }
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
      {isGameWon && <Confetti />}
      <div className="text">
        <h1>Tensies!</h1>
        {!isGameWon && <p>You know the deal :3</p>}
      </div>
      {!isGameWon && <p className='counter'>Rolled: <span style={{fontWeight: 'bold', fontSize: '24px'}}>{rounds}</span> times</p>}
      {isGameWon ? <Winner rounds={rounds}/> : <div className='dice-container'>{dieElems}</div>}
      <button className="butt" onClick={rollDice}>{isGameWon ? 'CLICK ME TO RESTART THE GAME' : 'Click me to roll the dice!'}</button>
    </div>
  )
}

export default App
