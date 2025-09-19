import './AddDetails.css';

export default function AddDetails(
  {card, makeActive, updateName, updateEmail, updatePhone, updateAddress}
) {
  return (
    <div className='details-card'>
      <div className='card-header'>
        <p className='txt' onClick={makeActive} >Personal details</p>
      </div>
      <div className={ card === 1 ? 'card-body' : 'hidden' }>
        <input type='text' onChange={updateName} placeholder='Full name'/>
        <input type='email' onChange={updateEmail} placeholder='Email'/>
        <input type='number' onChange={updatePhone} placeholder='Phone number' />
        <input type='text' onChange={updateAddress} placeholder='Address' />
        <p>test</p>
      </div>
    </div>
  )
}