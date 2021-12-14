import { useContext, createContext, useState } from 'react'

// Create the Context
const userContext = createContext();

// Create the UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
// Create custom hook

 // `context` will be undefined when using this custom hook
  // outside of the provider, so we throw an error 

  // Export the provider component and the custom hook