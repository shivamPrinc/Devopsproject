// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for jest-dom matchers
import App from './App';


test('renders To-Do List header', () => {
  render(<App />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});
