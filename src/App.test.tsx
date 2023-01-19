import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { ToDo } from './components/ToDo'

test('loads and displays greeting', async () => {
  // show component
  render(<ToDo />)

  // type input value in textbox
  const input = screen.getByTestId('todo-input');
  await userEvent.type(input, 'hello world');
  
  // click add to do button
  await userEvent.click(screen.getByTestId("todo-button"));

  // verify there is an item present in the list
  const list = screen.getByTestId("todo-list");
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")
  expect(items.length).toBe(1)
})
