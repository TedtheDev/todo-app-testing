import React from 'react';
import { mount } from 'enzyme';
import ToDo from '../components/ToDo';

describe('<ToDo />', () => {
    let todo;
    beforeEach(() => {
        todo = mount(<ToDo/>);
    })

    describe('Adding items', () => {
        afterAll(() => {
            todo.find('.ToDoItem-Delete').simulate('click');
        })

        window.alert = jest.fn();

        it('when add button pressed, input is empty, prevent item from being added - no todo added', () => {
            todo.find('.ToDo-Add').simulate('click');
            expect(todo.find('ToDoItem').length).toBe(2);
        })

        it('when add button pressed, if input is empty, prevent item from being added - window alert', () => {
            todo.find('.ToDo-Add').simulate('click');
            expect(window.alert).toHaveBeenCalled();
        })

        it('when add button pressed, if input has text, creates new todo', () => {
            const event = { target: { value: 'Create more tests'}};
            todo.find('input').simulate('change', event);
            todo.find('.ToDo-Add').simulate('click');

            expect(todo.find('.ToDoItem-Text').at(2).text()).toEqual('Create more tests');
        })
    })

    describe('Deleting items', () => {
        it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
            todo.find(".ToDoItem-Delete").first().simulate("click");
            expect(todo.find(".ToDoItem").length).toBe(1);
        });
        
        it("means that because the first toDoItem was deleted, the first toDoItem should now be buy milk", () => {
            todo.find(".ToDoItem-Delete").first().simulate("click");
            expect(todo.find(".ToDoItem-Text").first().text()).toEqual("buy milk");
        });
    })
})