import React, { useContext } from 'react'
import './Card.css'
import Task from '../Task/Task'
import { Context } from '../Context'

const Card = ({status}) => {
  const {
         completed,
         pending,
         inProgress,
         setCompleted,
         setPending,
         setInProgress
        } = useContext(Context)
  return (
    <div className='card'>
      {
        status === 'completed' && <div className='container completed'>{status}
        {
          completed.map((ele, i) => (
            <Task 
              key={i}
              id={i} 
              title={ele}
              from='completed'
            />
          ))
        }
        </div>
      }
      {
        status === 'pending' && 
        <div className='container pending'>{status}
        {
          pending.map((ele, i) => (
            <Task 
              key={i}
              id={i} 
              title={ele}
              from='pending'
            />
          ))
        }
        </div>
      }
      {status === 'in-progress' && <div className='container in-progress'>{status}
        {
          inProgress.map((ele, i) => (
            <Task 
              key={i}
              id={i} 
              title={ele}
              from='in-progress'
            />
          ))
        }
      </div>}
    </div>
  )
}

export default Card