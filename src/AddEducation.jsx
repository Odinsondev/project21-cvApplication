import { useState } from 'react'
import './AddEducation.css';

import Something from './Test';

function CreateSchoolList( {list, editSchool} ) {
  return (
    <ul>
      {list.map(function(school) {
          return <li key={school.id}>
            <button type='button' onClick={editSchool}>{school.name}</button>  {/* !! */}
            </li>
      })}
    </ul>
  )
}

export default function AddEducation(
  {card,
    makeActive,
    updateSchool,
    updateDegree,
    updateStartDate,
    updateEndDate,
    updateLocation}
) {
  const [school, addSchool] = useState(false);

  function toggleAddSchool() {
    const newBoolean = !school;
    addSchool(newBoolean);
  }


  const [schoolList, setSchoolList] = useState([{name: 'test', id: 1}, {name: 'test2', id: 2}])

  function addNewSchoolToArray() {
  const newSchool = createNewSchool();
  //const newSchoolList = schoolList.push(newSchool);   Does not work
  const newSchoolList = [...schoolList, newSchool];  //FIGURE THIS OUT !!!
  setSchoolList(newSchoolList);

  /* addToLocalStorage(); */
  }

  function createNewSchool() {
    const name = document.getElementById('school-name').value;
    const degree = document.getElementById('degree').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const location = document.getElementById('location').value;

    const school = {};
    school.name = name;
    school.degree = degree;
    school.startDate = startDate;
    school.endDate = endDate;
    school.location = location;
    school.id = crypto.randomUUID();

    return school;
  }




  const [testList, setTestList] = useState([{name: 'test', id: 1}])

  function addTestToArray() {
  const newT = addTest();
  const newTestList = [...testList, newT];
  setTestList(newTestList);
  }


  function addTest() {
    const test = Something;

    return test;
  }






  return (
    <div className='education-card'>
      <div className='card-header'>
        <p className='txt' onClick={makeActive} >Education</p>
      </div>
      <div className={ card === 2 ? 'card-body' : 'hidden' }>
        <br />
        < CreateSchoolList editSchool={toggleAddSchool} list={schoolList} />
        <br />
        <div className={ school === true ? 'school' : 'hidden' }>
          <input id='school-name' type='text' onChange={updateSchool} placeholder='School name'/>
          <input id='degree' type='text' onChange={updateDegree} placeholder='Degree'/>
          <input id='start-date' type='date' onChange={updateStartDate} placeholder='Start date' />
          <input id='end-date' type='date' onChange={updateEndDate} placeholder='End date' />
          <input id='location' type='text' onChange={updateLocation} placeholder='Location' />
          <button type='button' onClick={addNewSchoolToArray} >Save</button>
        </div>
        <br />
        <button type='button' onClick={toggleAddSchool}>Add</button>
        <button type='button' onClick={addTestToArray}>Test</button>
        
      </div>
    </div>
  )
}