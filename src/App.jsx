import React from 'react'
import Background from './Component/background'
import Foreground from './Component/foreground'
function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App