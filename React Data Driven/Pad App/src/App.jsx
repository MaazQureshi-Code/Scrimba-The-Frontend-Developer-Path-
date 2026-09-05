import { useState } from 'react'
import Pad from './Pad'
import padsData from './Pads'

import './App.css'

function App() {
    const [pads, setPads] = useState(padsData)
    
    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
  
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )  

}

export default App
