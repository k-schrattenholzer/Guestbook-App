import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { EntryProvider } from "../../context/EntryContext.jsx";
import { UserProvider } from "../../context/UserContext.jsx";
import Guestbook from "./Guestbook.jsx";

it('should render the guestbook, when a user is logged in', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <EntryProvider>
          <Guestbook />
        </EntryProvider>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
})
