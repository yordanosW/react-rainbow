import React, { useState } from 'react'
import ColorBlock from './Components/ColorBlock.js'
import ColorForm from './Components/ColorForm.js'

function App(){
  const [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
    
  const colorMap = colors.map((color, i) => {
    return (
        <ColorBlock key={i} color={color} />
    )
  })

    return (
      <div className="App">
          {colorMap}
          <ColorForm addColor={addColor} />
      </div>
    )
}

export default App