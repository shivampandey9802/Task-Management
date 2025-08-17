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
    <>
      {
        status === 'completed' && (
          <div className='container completed'>
            <h3 className='column-title'>Completed</h3>
            <div className='tasks'>
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
          </div>
        )
      }
      {
        status === 'pending' && (
          <div className='container pending'>
            <h3 className='column-title'>Pending</h3>
            <div className='tasks'>
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
          </div>
        )
      }
      {
        status === 'in-progress' && (
          <div className='container in-progress'>
            <h3 className='column-title'>In Progress</h3>
            <div className='tasks'>
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
            </div>
          </div>
        )
      }
    </>
  )
}

export default Card