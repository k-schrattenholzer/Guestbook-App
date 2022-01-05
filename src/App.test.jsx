// import React from 'react';
import { render, screen } from '@testing-library/react'
import { UserProvider } from './context/UserContext.jsx'
import App from './App'



test('renders App', () => {
  render( 
    <UserProvider>
    <App />
  </UserProvider> )
  const linkElement = screen.getByLabelText(/Username/i)
  expect(linkElement).toBeInTheDocument()
})