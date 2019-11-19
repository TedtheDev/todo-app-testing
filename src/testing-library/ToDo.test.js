import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDo from '../components/ToDo';

describe('<ToDo/>', () => {
    let todo;

    beforeEach(() => {
        todo = render(<ToDo />);
    })

    describe('Adding items', () => {
        it('when add button pressed, if input is empty, prevent item from being added', () => {
            const { getByTestId } = todo;

            window.alert = jest.fn();

            fireEvent.click(getByTestId('add'));
            expect(window.alert).toHaveBeenCalled();
        })

        it('when add button pressed, if input has text, created todo item', () => {
            const { getByTestId, getByText } = todo;

            fireEvent.change(getByTestId('todo-input'), { target : { value: 'Create more tests'}});
            expect(getByTestId('todo-input').value).toBe('Create more tests');

            fireEvent.click(getByTestId('add'));
            expect(getByText('Create more tests')).toBeInTheDocument();
        })
    })

    describe("Deleting items", () => {
        it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
          const { queryAllByTestId } = todo;
          const deleteButtons = queryAllByTestId("delete");
          expect(queryAllByTestId("todo-item").length).toBe(2);
          
          fireEvent.click(deleteButtons[0]);
          expect(queryAllByTestId("todo-item").length).toBe(1);
        });
        
        it("means that because the first toDoItem was deleted, the first toDoItem should now be buy milk", () => {
          const { queryAllByTestId, queryByTestId } = todo;
          const deleteButtons = queryAllByTestId("delete");
          
          fireEvent.click(deleteButtons[0]);
          const todoText = queryByTestId("todo-text");
          expect(todoText.textContent).toEqual("buy milk");
        });
      });
})