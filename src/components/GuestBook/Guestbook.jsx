import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestBook.css';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  const guestNameInput = (
    <div>
      <label htmlFor="guestName">
        ¿quién eres?
      </label>
      <input
        className="guestNameInput"
        id="guestName"
        placeholder="what do they call ye"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
    </div>
  );

  const guestBookMessage = user
    ? `So interesting, ${name}. Elaborate...`
    : `What's your deal?`;

  function updateGuestName() {
    if (!guestEntry) return

    setUser(name)

    setEntries((prev)=>[...prev, { name, message: guestEntry }])

    setGuestEntry('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuestName();
  }

  return (
    <div>
      <h1>{guestBookMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <div>
          <div>
            <label htmlFor="guestEntry">
              whaddya got noodlin around up there?
              </label>
          </div>
          <div>
            <textarea
              id="guestEntry"
              value={guestEntry}
              placeholder="tell us everything..."
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">
            stick it on the wall
          </button>
          {user && (
            <button
              type='button'
              onClick={() => {
                setUser('');
                setName('');
              }}>
              if you're not {user}, you gotta go
            </button>
          )}
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
