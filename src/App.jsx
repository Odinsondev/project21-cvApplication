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

  //states for AddDetails
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

  //states for AddEducation
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function changeSchool(e) {
    const newSchool = e.target.value;
    setSchool(newSchool);
  }

  function changeDegree(e) {
    const newDegree = e.target.value;
    setDegree(newDegree);
  }

  function changeStartDate(e) {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
  }

  function changeEndDate(e) {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
  }

  function changeLocation(e) {
    const newLocation = e.target.value;
    setLocation(newLocation);
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
            makeActive={activateSecondCard}
            updateSchool={changeSchool}
            updateDegree={changeDegree}
            updateStartDate={changeStartDate}
            updateEndDate={changeEndDate}
            updateLocation={changeLocation} />
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
          address={address}
          
          school={school}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          location={location}/>
      </div>
      <div id='footer'>
        <p>Copyright &copy; Odinsondev 2024</p>
      </div>
    </div>
  )
}

export default App
