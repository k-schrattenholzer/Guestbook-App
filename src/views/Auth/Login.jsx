import { useHistory, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useUser } from "../../context/UserContext.jsx";
import useForm from '../../hooks/useForm.js'


export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useUser();

  const { formState, handleFormChange } = useForm({ username: '', password: ''});

  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const userLoggedIn = auth.login(formState.username, formState.password);

    return !userLoggedIn ?
    setError("login unsuccessful bb, try again?") : history.replace('/')  
  }

  return(
    <fieldset className="w-1/4 border p-4">
  <legend>Sign In</legend>
  <form 
    className="grid grid-cols-[1fr_2fr] grid-rows-3"
    onSubmit={handleLogin}
    >
    <label htmlFor="username" className="self-center text-right">
      Username
    </label>
    <input
      id="username"
      type="text"
      name="username"
      value={formState.username}
      className="border p-2 m-3"
      required
      onChange={handleFormChange}
    />
    <label htmlFor="password" className="self-center text-right">
      Password
    </label>
    <input
      id="password"
      type="password"
      name="password"
      value={formState.password}
      className="border p-2 m-3"
      required
      onChange={handleFormChange}
    />
    <button
      type="submit"
      className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
    >
      Sign In
    </button>
  </form>
  <p className="text-center text-red-500 font-bold">{error}</p>
</fieldset>
  );
}