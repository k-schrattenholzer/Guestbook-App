import { useContext, createContext, useState } from 'react';
import React from 'react';

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
const useEntries = () => {
  const context = useContext(EntryContext)

  // `context` will be undefined when using this custom hook
   // outside of the provider, so we throw an error 
  if (context === undefined) {
    throw new Error('useEntries needs to be used within an EntryContext Provider')
  }
  return context
}

// Export the provider component and the custom hook
export { EntryProvider, useEntries}