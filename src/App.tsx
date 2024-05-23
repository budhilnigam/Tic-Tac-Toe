import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [player, setPlayer] = useState(1)
  const [tiles,setTiles] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  function handleClick(index:number,i:number){
    setTiles((state)=>{state[index][i]=player;return state;});
    setPlayer((player)%2+1);
  }
  useEffect(()=>{
    setTiles((state)=>state);
  },[tiles])
  return (
    <>
    <button onClick={()=>setTiles([[0,0,0],[0,0,0],[0,0,0]])}>Restart</button>
    <button onClick={()=>setPlayer((player)%2+1)}>Change player</button>
    <p>Player {player}</p>
    <div id="container">
      {tiles.map((row,index)=>{
        return <span key={'row'+index}>
          {row.map((tile,i)=>
          <button key={'tile'+i} className={tile==0?'inactive-tile':tile==1?'cross-tile':'circle-tile'} onClick={()=>handleClick(index,i)} >
            {tile!=0?<><div className='cross'>
              <div className='line1'></div>
              <div className='line2'></div>
            </div>
            <div className='circle'>
            </div></>:player==1?
            <div className='cross'>
              <div className='line1'></div>
              <div className='line2'></div>
            </div>:<div className='circle'></div>}
          </button>)}
        </span>
      })}
    </div>
    <div>
      {tiles}
    </div>
    </>
  )
}

export default App
