import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestBook.css';

export default function Guestbook() {
  // const [name, setName] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  const guestBookMessage = user
    ? `So interesting. Elaborate...`
    : `What's your deal?`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prev)=>[...prev, userEntry]);
  }

  return (
    <div>
      <h1>{guestBookMessage}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="userEntry">
              whaddya got noodlin around up there?
              </label>
          </div>
          <div>
            <textarea
              id="userEntry"
              value={userEntry}
              placeholder="tell us everything..."
              onChange={(e) => setUserEntry(e.target.value)}
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

