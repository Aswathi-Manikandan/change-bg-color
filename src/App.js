import React, { useState } from 'react'

function App() {
  const[bgColor,setColor] = useState("red")

  const changeColor=()=>{
    setColor(bgColor==="red"?"grey":"red")
  }
  return (
    <div style={{backgroundColor:bgColor,height:'100vh'}}>
      <button onClick={changeColor}>CLICK HERE TO CHANGE THE COLOR</button>
      
    </div>
  )
}

export default App
