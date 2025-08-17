import React, { useContext } from 'react'
import './Task.css'
import { Context } from '../Context'

const Task = (props) => {
  const {pending,
         setPending,
         inProgress,
         setInProgress,
         completed, 
         setCompleted
        } = useContext(Context)
  function changeItem(id, from) {
    if(from === 'completed') {
      return;
    }
    if(from === 'pending') {
      setInProgress(prev => [...inProgress, pending[id]])
      const newList = pending.filter((ele, ind) =>{
        return id !== ind
      })
      setPending(newList)
      return;
    }
    setCompleted(prev => [...completed, inProgress[id]])
      const newList = inProgress.filter((ele, ind) =>{
        return id !== ind
      })
      setInProgress(newList)
  }
  return (
    <div className='con'>
      <div className='task'>
        <p>{props.title}</p>
        <button onClick={() => changeItem(props.id, props.from)}>Start</button>
      </div>
    </div>
  )
}

export default Task