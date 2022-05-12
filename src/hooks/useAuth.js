import { useContext } from 'react';
import { userContext } from '../context/UserContext.jsx';

/**
 * This custom hook will return an userContext, which consists of the `user` object (which is an object with an `username` property), the `login` function (which takes a user's username and password), and the `logout` function.
 *
 * @returns {{user: {username:string}, login:  (username:string, password:string) => bool, logout: () => void}} userContext
 */
export function useAuth() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a userContext');
  }

  return context;
}
