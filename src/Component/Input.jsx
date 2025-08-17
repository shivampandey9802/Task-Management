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
    <div className="toolbar">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a task...'
        aria-label='Add a task'
        />
        <button onClick={addIntoPending} disabled={!input.trim()}>ADD</button>
    </div>
  )
}

export default Input