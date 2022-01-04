import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

export function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  return(
    <Route 
      {...rest}
      render={({ location }) => 
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname:'/login',
              state: { from: location }
            }}
          />
        )} 
    />
  )
}