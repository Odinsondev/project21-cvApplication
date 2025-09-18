import './AddEducation.css';

export default function AddEducation( {card, makeActive}) {
  return (
    <div className='education-card'>
      <div className='card-header'>
        <p className='txt' onClick={makeActive} >Education</p>
      </div>
      <div className={ card === 2 ? 'card-body' : 'hidden' }>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  )
}