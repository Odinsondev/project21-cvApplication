import { useState } from 'react'
import { ShowPreview } from './ShowPreview'
import AddDetails from './AddDetails'
import AddEducation from './AddEducation'
import AddEmployment from './AddEmployment'
import './App.css'

function App() {
  const [activeCard, setActiveCard] = useState(0);

  function activateFirstCard() {
    if (activeCard !== 1) {
      setActiveCard(1);
    } else {
      setActiveCard(0);
    }
    
  }

  function activateSecondCard() {
    if (activeCard !== 2) {
      setActiveCard(2);
    } else {
      setActiveCard(0);
    }
  }

  function activateThirdCard() {
    if (activeCard !== 3) {
      setActiveCard(3);
    } else {
      setActiveCard(0);
    }
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function changeName(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function changeEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  function changePhone(e) {
    const newPhone = e.target.value;
    setPhone(newPhone);
  }

  function changeAddress(e) {
    const newAddress = e.target.value;
    setAddress(newAddress);
  }
  
  return (
    <div id='parent'>
      <div id="left">
        <div id='details'>
          < AddDetails
            card={activeCard}
            makeActive={activateFirstCard}
            updateName={changeName}
            updateEmail={changeEmail} 
            updatePhone={changePhone} 
            updateAddress={changeAddress} />
        </div>
        <div id='education'>
          <AddEducation
            card={activeCard}
            makeActive={activateSecondCard} />
        </div>
        <div id='employment'>
          < AddEmployment
            card={activeCard}
            makeActive={activateThirdCard} />
        </div>
      </div>
      <div id='cv'>
        < ShowPreview
          name={name}
          email={email}
          phone={phone}
          address={address}/>
      </div>
      <div id='footer'>
        <p>Copyright &copy; Odinsondev 2024</p>
      </div>
    </div>
  )
}

export default App
