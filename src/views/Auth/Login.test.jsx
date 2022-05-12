import {
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext.jsx';
import Login from './Login.jsx';


const mockLogout = jest.fn();

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth: function () {
      return {
        user: { username: 'k@k.com' },
        logout: mockLogout,
      }
    }
  }
});

it('should render the login form', () => {
  const { container } = render (
    <UserProvider>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </UserProvider>
  )
  expect(container).toMatchSnapshot();
})

it('should allow guest to sign in', async () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </MemoryRouter>
    </UserProvider>
  )
})