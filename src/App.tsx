import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [player, setPlayer] = useState(1)
  const [tiles,setTiles] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  return (
    <div id="container">
      <span>
      <button></button>
      <button></button>
      <button></button>
      </span><span>
      <button></button>
      <button></button>
      <button></button>
      </span><span>
      <button></button>
      <button></button>
      <button></button>
      </span>
      <span></span>
    </div>
  )
}

export default App
