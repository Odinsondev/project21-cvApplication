import './AddDetails.css';

export default function AddDetails( {updateName, updateEmail} ) {
  return (
    <div className='details-card'>
      <p className='txt'>Personal details</p>
      <input type="text" onChange={updateName} placeholder='First name'/>
      <input type="email" onChange={updateEmail} placeholder='Email'/>
      <input type='number' placeholder='Phone number' />
      <input type='text' placeholder='Address' />
    </div>
  )
}