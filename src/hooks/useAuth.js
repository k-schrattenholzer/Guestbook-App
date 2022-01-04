import { useContext } from 'react';
import { userContext } from '../context/UserContext';

/**
 * This custom hook will return an userContext, which consists of the `user` object (which is an object with an `email` property), the `login` function (which takes a user's email and password), and the `logout` function.
 *
 * @returns {{user: {email:string}, login:  (email:string, password:string) => bool, logout: () => void}} userContext
 */
export function useAuth() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a userContext');
  }

  return context;
}
