import { useState } from 'react'
import { ShowPreview } from './ShowPreview'
import AddDetails from './AddDetails'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (name === '') {
    setName('Batman');
  }

  function changeName(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function changeEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }
  
  return (
    <div id='parent'>
      <div id="left">
        <div id='details'>
          < AddDetails updateName={changeName} updateEmail={changeEmail} />
        </div>
        <div id='education'>
          <p>Education</p>
        </div>
        <div id='employment'>
          <p>Employment</p>
        </div>
      </div>
      <div id='cv'>
        < ShowPreview name={name} email={email}/>
      </div>
      <div id='footer'>
        <p>Copyright &copy; Odinsondev 2024</p>
      </div>
    </div>
  )
}

export default App
