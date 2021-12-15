import { useEntries } from "../../context/EntryContext.jsx"
import Entry from '../Entry/Entry.jsx'

export default function EntryList() {
  const { entries } = useEntries()

  return (
    <div>
        <ul>
          {entries.map((entry) => {
            return (
              <li key={`${entry.message}-${entry.name}`}>
                <Entry entry={entry}/>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

// TO DO
// will import Entry, and useEntries
//before the return, destructure entries from useEntries