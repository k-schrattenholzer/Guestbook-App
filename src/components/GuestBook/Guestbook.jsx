import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestBook.css'

export default function Guestbook() {

  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  const guestNameInput = (
    <div>
      <label htmlFor="guestName">Visitor Name</label>
      <input
        className='guestNameInput'
        id='guestName'
        placeholder='what do they call ye'
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" />
    </div>
  )

  const guestBookMessage = user ? `So interesting, ${name}.` : `What's your deal?`

  return (
    <div>
      <h1>{guestBookMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <div>
          <label htmlFor="guestEntry">Guest Entry</label>
        </div>
      </form>
    </div>
  );
}
// TO DOS
// import useEntries and useUser
// destructure state and setState before render
// the name and the setName, and guestEntry and setGuestEntry will be kept locally
//will need an update guest name function
// and a handle submit that updates the guests name in state
// declare the HTML for the guest name input as a variable, and conditionally show
