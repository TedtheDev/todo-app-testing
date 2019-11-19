import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('<ToDo/>', () => {
    let app;

    beforeEach(() => {
        app = render(<App />);
    })

    it('should render correctly', () => {
        const { getByTestId } = app;

        expect(getByTestId('todo-input')).toBeInTheDocument();
    })

    it('renders two default todo items', () => {
        const { getByText } = app;

        expect(getByText("clean the house")).toBeInTheDocument();
        expect(getByText("buy milk")).toBeInTheDocument();
    });

    it('has an input field', () => {
        const { getByTestId } = app;

        expect(getByTestId('todo-input')).toBeInTheDocument();
    })

    it('has an add button', () => {
        const { getByTestId } = app;

        expect(getByTestId('add').textContent).toBe('+');
    })

    describe('Adding items', () => {
        it('when add button pressed, if input is empty, prevent item from being added', () => {
            const { getByTestId } = app;

            window.alert = jest.fn();

            fireEvent.click(getByTestId('add'));
            expect(window.alert).toHaveBeenCalled();
        })

        it('when add button pressed, if input has text, created todo item', () => {
            const { getByTestId, getByText } = app;

            fireEvent.change(getByTestId('todo-input'), { target : { value: 'Create more tests'}});
            expect(getByTestId('todo-input').value).toBe('Create more tests');

            fireEvent.click(getByTestId('add'));
            expect(getByText('Create more tests')).toBeInTheDocument();
        })
    })

    describe("Deleting items", () => {
        it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
          const { queryAllByTestId } = app;
          const deleteButtons = queryAllByTestId("delete");
          expect(queryAllByTestId("todo-item").length).toBe(2);
          
          fireEvent.click(deleteButtons[0]);
          expect(queryAllByTestId("todo-item").length).toBe(1);
        });
        
        it("means that because the first toDoItem was deleted, the first toDoItem should now be buy milk", () => {
          const { queryAllByTestId, queryByTestId } = app;
          const deleteButtons = queryAllByTestId("delete");
          
          fireEvent.click(deleteButtons[0]);
          const todoText = queryByTestId("todo-text");
          expect(todoText.textContent).toEqual("buy milk");
        });
      });
})