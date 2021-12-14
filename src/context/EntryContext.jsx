import { useContext, createContext, useState } from 'react'

// Create the Context
const EntryContext = createContext();

// Create the EntryProvider component
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}</EntryContext.Provider>
  )
}

// Create custom hook

 // `context` will be undefined when using this custom hook
  // outside of the provider, so we throw an error 

  // Export the provider component and the custom hook