import './ShowPreview.css';
export { ShowPreview };

function ShowPreview(props) {  //used the props keyword for practice
  return (
    <div className="cv-preview">
      <h3 className='test'>CV Preview</h3>
      <p className='test2' > Name: {props.name}</p>
      <div className="details">
        <p className='email'> Email: {props.email}</p>
        <p>Phone number: {props.phone}</p>
        <p>Address: {props.address}</p>
      </div>
    </div>
  )
}