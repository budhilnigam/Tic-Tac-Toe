import { useState } from 'react'
import './App.css'

function App() {
  const [player, setPlayer] = useState(1)
  const [tiles,setTiles] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  function handleClick(){
  }
  return (
    <>
    <button onClick={()=>setPlayer((player+1)%2)}>Change player</button>
    <div id="container">
      {tiles.map((tile,index)=>{
        return <span key={'row'+index}>
          {tile.map((t)=>
          <button key={'tile'+t}>
            {player==0?<div id='cross'>
              <div id='line1'></div>
              <div id='line2'></div>
            </div>:
            <div id='circle'>
            </div>}
          </button>)}
        </span>
      })}
    </div>
    </>
  )
}

export default App
