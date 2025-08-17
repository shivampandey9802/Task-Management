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
  const isCompleted = props.from === 'completed'
  const buttonLabel = props.from === 'pending' ? 'Start' : (props.from === 'in-progress' ? 'Complete' : 'Done')
  return (
    <div className='task'>
      <p>{props.title}</p>
      <button onClick={() => changeItem(props.id, props.from)} disabled={isCompleted}>{buttonLabel}</button>
    </div>
  )
}

export default Task