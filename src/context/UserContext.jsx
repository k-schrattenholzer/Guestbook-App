import { useContext, createContext, useState } from 'react'

// Create the Context
const userContext = createContext();

// Create the UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
// Create custom hook
const useUser = () => {
  const context = useContext(userContext);

   // `context` will be undefined when using this custom hook
    // outside of the provider, so we throw an error 
  if(context === undefined) {
    throw new Error('useUser hook must be called within appropriate context')
  }
  return context
}

  // Export the provider component and the custom hook
export { UserProvider, useUser }