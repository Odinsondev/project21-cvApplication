import './ShowPreview.css';
export { ShowPreview};

function ShowPreview(props) {
  return (
    <div className="cv-preview">
      <h3 className='test'>CV Preview</h3>
      <p className='test2' > Name: {props.name}</p>
    </div>
  )
}