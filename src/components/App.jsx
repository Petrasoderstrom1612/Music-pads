import React, { useState } from 'react'
import pads from './pads'
import Button from './Button'

function App() {
  console.log(pads)
  const [buttons, setButtons] = React.useState(pads)
   // variable name                         //real value  

  const switcher = (id) => { //needed here for a function button that manipulates all the buttons
      setButtons(prevButtons => {
        return prevButtons.map((onePrevBtn) => {
         return onePrevBtn.id === id ? {...onePrevBtn, on: !onePrevBtn.on} : onePrevBtn
        })
      })
  }

  const allButtons = buttons.map(oneButton => <Button key={oneButton.id} id={oneButton.id} on={oneButton.on} color={oneButton.color} switcher={switcher} />) //key stays in parent as it is not a prop

  return (
    <main>
            <div className="pad-container">
                {allButtons}
            </div>
        </main>
  )
}

export default App
