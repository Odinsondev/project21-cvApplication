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
  const [details, setDetails] = useState({});

  function changeName(e) {
    const newName = {...details, name: e.target.value };
    setDetails(newName);
  }

  function changeEmail(e) {
    const newEmail = {...details, email: e.target.value };
    setDetails(newEmail);
  }

  function changePhone(e) {
    const newPhone = {...details, phone: e.target.value };
    setDetails(newPhone);
  }

  function changeAddress(e) {
    const newAddress = {...details, address: e.target.value };
    setDetails(newAddress);
  }

  //states for AddEducation
  const [school, setSchool] = useState({});

  function changeSchoolName(e) {
    const newSchool = {...school, schoolName: e.target.value};
    setSchool(newSchool);
  }

  function changeDegree(e) {
    const newSchool = {...school, degree: e.target.value};
    setSchool(newSchool);
  }

  function changeStartDate(e) {
    const newSchool = {...school, startDate: e.target.value};
    setSchool(newSchool);
  }

  function changeEndDate(e) {
    const newSchool = {...school, endDate: e.target.value};
    setSchool(newSchool);
  }

  function changeLocation(e) {
    const newSchool = {...school, location: e.target.value};
    setSchool(newSchool);
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
            updateSchool={changeSchoolName}
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
          details={details}
          school={school} />
      </div>
      <div id='footer'>
        <p>Copyright &copy; Odinsondev 2024</p>
      </div>
    </div>
  )
}

export default App
