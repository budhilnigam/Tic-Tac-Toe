import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [winner, setWinner] = useState(0);
  const [player, setPlayer] = useState(1);
  const [tiles,setTiles] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  function patternCheck(tiles:number[][]){
    for(let player=1;player<3;player++){
    for(let i=0;i<3;i++){
      let check=true;
      for(let j=0;j<3;j++){
        if(tiles[i][j]!=player){
          check=false;
          break;
        }
      }
      if(check){
        return player;
      }
    }
    for(let i=0;i<3;i++){
      let check=true;
      for(let j=0;j<3;j++){
        if(tiles[j][i]!=player){
          check=false;
          break;
        }
      }
      if(check){
        return player;
      }
    }
    let check=true;
    for(let i=0;i<3;i++){
      if(tiles[i][i]!=player){
        check=false;
        break;
      }
    }
    if(check){
      return player;
    }
    check=true;
    for(let i=0;i<3;i++){
      if(tiles[i][2-i]!=player){
        check=false;
        break;
      }
    }
    if(check){
      return player;
    }
    }
    return 0;
  }
  function handleClick(){
    if(patternCheck(tiles)!=0){
      setWinner(patternCheck(tiles));
    }
  }
  useEffect(()=>{
    handleClick();
  },[tiles])
  return (
    <>
    <p id='player'>Player {player}</p>
    <div id="container">
      {tiles.map((row,index)=>{
        return <span key={'row'+index}>
          {row.map((tile,i)=>
          <button key={'tile'+i} className={tile==0?'inactive-tile':tile==1?'cross-tile':'circle-tile'} 
          onClick={()=>{
            setTiles((tiles)=>{
            let state:number[][]=[];
            for(let i=0;i<3;i++){
              state.push([]);
              state[i].push(...tiles[i]);
            }
            state[index][i]=player;
            return state;});
            setPlayer((player)%2+1);}} >
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
    {winner!=0?<div id="winner-screen"><div id="winner">Winner is player {winner}
    <button onClick={()=>{setTiles([[0,0,0],[0,0,0],[0,0,0]]);setPlayer(1);setWinner(0)}}>
      Play Again <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.533 489.533" stroke="#0000ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9 l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6 c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6 C49.575,418.961,150.875,501.261,268.175,488.161z"></path></g></g></svg>
    </button></div></div>:""}
    </>
  )
}

export default App
