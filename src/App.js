import { useState } from 'react';
import "./App.css"
function RandomNumber(){
 
  var [num,newNum] = useState(0)
  function numGenerator(){
    newNum( Math.floor(Math.random()*100))
  }
 

return(
  <div className='container'>
   
    <div className='random'>
      <h1 className='topic'>Random Number Generator</h1>
    <h1 className='number'>{num}</h1>
    <button onClick={numGenerator} className='btn'>Click</button>
  </div>
  </div>

)

}

export default RandomNumber