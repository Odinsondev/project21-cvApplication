import './AddEmployment.css';

export default function AddEmployment( {card, makeActive} ) {
  return (
    <div className='employment-card'>
      <div className='card-header'>
        <p className='txt' onClick={makeActive} >Employment</p>
      </div>
      <div className={ card === 3 ? 'card-body' : 'hidden' }>
        <p>test</p>
      </div>
    </div>
  )
}