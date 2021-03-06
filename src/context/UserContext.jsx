import { useContext, createContext, useState } from 'react';

// Create the Context
export const userContext = createContext();

// Create the UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (username, password) => {
    const loginSuccessful =
      username === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser( username );
    return loginSuccessful;
  };
  
  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return <userContext.Provider value={{ user, login, logout }}>{children}</userContext.Provider>
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