import React, { useContext } from 'react'
import { Context } from "./Context";


const Input = () => {
  
  const {input, setInput, showInput, value, setValue, pending, setPending} = useContext(Context)

  function addIntoPending() {
    setPending(prev => [...prev, input])
    setInput('')
  }

  // console.log(pending)

  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type here...'
        />
        <button onClick={addIntoPending}>ADD</button>
    </div>
  )
}

export default Input