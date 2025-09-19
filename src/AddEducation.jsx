import { useState } from 'react'
import './AddEducation.css';



/* const schools = [{name: 'test'}, {name: 'test2'}];

const schoolList = schools.map(function(school) {
  return <li>{school.name}</li>
}); */


/* function addNewSchoolToArray() {
  const newSchool = createNewSchool();
  schools.push(newSchool);

  addToLocalStorage();

  console.log(schools);
} */


/* function createNewSchool() {
  const name = document.getElementById('school-name').value;

  const school = {};
  school.name = name;

  return school;
} */

function CreateSchoolList( {list} ) {
  /* const [schoolList, setSchoolList] = useState([{name: 'test'}, {name: 'test2'}])

  function addNewSchoolToArray() {
  const newSchool = createNewSchool();
  schools.push(newSchool);

  

  console.log(schools);
}

function createNewSchool() {
  const name = document.getElementById('school-name').value;

  const school = {};
  school.name = name;

  return school;
} */
console.log(list);
  return (
    <ul>
      {list.map(function(school) {
          return <li>{school.name}</li>
      })}
    </ul>
)


/* (
    list.map(function(school) {
      return <li>{school.name}</li>
    })
  ) */


}





export default function AddEducation( {card, makeActive} ) {
  const [school, addSchool] = useState(false);

  function toggleAddSchool() {
    const newBoolean = !school;
    addSchool(newBoolean);
  }



  const [schoolList, setSchoolList] = useState([{name: 'test'}, {name: 'test2'}])

  function addNewSchoolToArray() {
  const newSchool = createNewSchool();
  //const newSchoolList = schoolList.push(newSchool);   Does not work
  const newSchoolList = [...schoolList, newSchool];  //FIGURE THIS OUT !!!
  setSchoolList(newSchoolList);
  console.log(schoolList);
  

  /* addToLocalStorage(); */

  /* console.log(schools); */
}

function createNewSchool() {
  const name = document.getElementById('school-name').value;

  const school = {};
  school.name = name;

  return school;
}





  return (
    <div className='education-card'>
      <div className='card-header'>
        <p className='txt' onClick={makeActive} >Education</p>
      </div>
      <div className={ card === 2 ? 'card-body' : 'hidden' }>
        <br />
        < CreateSchoolList list={schoolList} />
        <br />
        <div className={ school === true ? 'school' : 'hidden' }>
          <input id='school-name' type='text' /* onChange={updateName} */ placeholder='School name'/>
          <input type='text' /* onChange={updateEmail} */ placeholder='Degree'/>
          <input type='date' /* onChange={updatePhone} */ placeholder='Start date' />
          <input type='date' /* onChange={updatePhone} */ placeholder='End date' />
          <input type='text' /* onChange={updateAddress} */ placeholder='Location' />
          <button type='button' onClick={addNewSchoolToArray} >Save</button>
        </div>
        <br />
        <button type='button' onClick={toggleAddSchool}>Add</button>
      </div>
    </div>
  )
}