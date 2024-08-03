// src/components/TodoList.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for jest-dom matchers
import TodoList from './TodoList';


test('renders todo list and allows adding and removing items', () => {
  render(<TodoList />);

  // Check if the input and button are present
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const buttonElement = screen.getByText(/Add/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  // Add a new todo
  fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
  fireEvent.click(buttonElement);

  // Verify the todo is added to the list
  const todoElement = screen.getByText(/Buy groceries/i);
  expect(todoElement).toBeInTheDocument();

  // Remove the todo
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Verify the todo is removed
  expect(todoElement).not.toBeInTheDocument();
});
