import './ShowPreview.css';
export { ShowPreview };

function ShowPreview(props) {  //used the props keyword for practice
  return (
    <div className="cv-preview">
      <h3 className='test'>CV Preview</h3>
      <p className='test2' > Name: {props.details.name}</p>
      <div className="details">
        <p className='email'> Email: {props.details.email}</p>
        <p>Phone number: {props.details.phone}</p>
        <p>Address: {props.details.address}</p>
      </div>
      <br />
      <h3 className='test' >Education</h3>
      <br />
      <p>{props.school.schoolName}</p>
      <p>{props.school.degree}</p>
      <p>{props.school.startDate}</p>
      <p>{props.school.endDate}</p>
      <p>{props.school.location}</p>
      <br />
      <h3 className='test' >Employment</h3>
    </div>
  )
}