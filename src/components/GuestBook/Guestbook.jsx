import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEntries } from '../../context/EntryContext';
import { useAuth } from '../../hooks/useAuth.js';

export default function Guestbook() {

  const [userEntry, setUserEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const history = useHistory();
  const { user, logout } = useAuth();

  console.log(history);


  const guestBookMessage = user
    ? `So interesting. Elaborate...`
    : `What's your deal?`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prev)=>[...prev, userEntry]);
  }

  const handleLogout = () => {
    logout(() => history.push('/'))
    ;
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
        </div>
      </form>
      {user && (
            <button
              type="button"
              className="signOut hover:text-red-400 transition-all"
              onClick={handleLogout}
            >
              Not {user} ❓
            </button>
          )}
    </div>
  );
}

