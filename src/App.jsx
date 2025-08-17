import { useState } from 'react'
import Input from './Component/Input'
import Card from './Component/Card/Card'

function App() {
  return (
    <>
      <Input />
      <div className='card'>
        <Card status='completed'/>
        <Card status='pending'/>
        <Card status='in-progress' />
      </div>
    </>
  )
}

export default App
