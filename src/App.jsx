//import { useState } from 'react'
import { ShowPreview } from './ShowPreview'
import AddDetails from './AddDetails'
import './App.css'

function App() {

  return (
    <div id='parent'>
      <div id="left">
        <div id='details'>
          < AddDetails />
        </div>
        <div id='education'>
          <p>Education</p>
        </div>
        <div id='employment'>
          <p>Employment</p>
        </div>
      </div>
      <div id='cv'>
        < ShowPreview name={'Batman'} />
      </div>
      <div id='footer'>
        <p>Copyright &copy; Odinsondev 2024</p>
      </div>
    </div>
  )
}

export default App
