import * as C from './styled' 
import {useEffect, useState } from 'react'
import map from './img/map.png'
import { Char } from './components/Char'
import { useChar } from './hooks/useChar'
import { mapSpots } from './data/mapSpots'

const App = ()=>{
  
  useEffect(()=>{
    window.addEventListener('keydown',moveChar);
  },[])

  const moveChar = (e:KeyboardEventInit)=>{

    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        newChar.moveLeft()
      break

      case 'KeyD':
      case 'ArrowRight':
        newChar.moveright()
      break

      case 'KeyW':
      case 'ArrowUp':
        newChar.moveTop()
      break

      case 'KeyS':
      case 'ArrowDown':
        newChar.moveBottom()
      break
    }
  }
  
  const newChar = useChar()

  return (    
    <C.Contanier>
      <C.Map map = {map}>
        <Char
        y={newChar.pos.y}
        x={newChar.pos.x}
        charPos={newChar.charPos}
        />
      </C.Map>
    </C.Contanier>
  )
}

export default App
