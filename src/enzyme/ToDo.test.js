import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('<ToDo />', () => {
    let app;
    beforeEach(() => {
        app = mount(<App/>);
    })

    it('renders two default todo items', () => {
        expect(app.find('.ToDoItem').length).toBe(2);
    })

    it('has an input field', () => {
        expect(app.find('.ToDoInput').length).toEqual(1);
    })

    it('has an input field - with data-testid', () => {
        expect(app.find('[data-testid="todo-input"]')).not.toBeNull();
    })

    it('has an add button', () => {
        expect(app.find('.ToDo-Add').length).toEqual(1);
    })

    describe('Adding items', () => {
        afterAll(() => {
            app.find('.ToDoItem-Delete').simulate('click');
        })

        window.alert = jest.fn();

        it('when add button pressed, input is empty, prevent item from being added - no todo added', () => {
            app.find('.ToDo-Add').simulate('click');
            expect(app.find('ToDoItem').length).toBe(2);
        })

        it('when add button pressed, if input is empty, prevent item from being added - window alert', () => {
            app.find('.ToDo-Add').simulate('click');
            expect(window.alert).toHaveBeenCalled();
        })

        it('when add button pressed, if input has text, creates new todo', () => {
            const event = { target: { value: 'Create more tests'}};
            app.find('input').simulate('change', event);
            app.find('.ToDo-Add').simulate('click');

            expect(app.find('.ToDoItem-Text').at(2).text()).toEqual('Create more tests');
        })
    })

    describe('Deleting items', () => {
        it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
            app.find(".ToDoItem-Delete").first().simulate("click");
            expect(app.find(".ToDoItem").length).toBe(1);
        });
        
        it("means that because the first toDoItem was deleted, the first toDoItem should now be buy milk", () => {
            app.find(".ToDoItem-Delete").first().simulate("click");
            expect(app.find(".ToDoItem-Text").first().text()).toEqual("buy milk");
        });
    })
})