import { useState } from 'react'
import Input from './Component/Input'
import Card from './Component/Card/Card'

function App() {
  return (
    <main className='app-container'>
      <Input />
      <div className='board'>
        <Card status='completed'/>
        <Card status='pending'/>
        <Card status='in-progress' />
      </div>
    </main>
  )
}

export default App
