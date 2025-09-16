import './ShowPreview.css';
export { ShowPreview };

function ShowPreview(props) {
  return (
    <div className="cv-preview">
      <h3 className='test'>CV Preview</h3>
      <p className='test2' > Name: {props.name}</p>
      <div className="details">
        <p className='email'> Email: {props.email}</p>
        <p>Phone number:</p>
        <p>Address:</p>
      </div>
    </div>
  )
}