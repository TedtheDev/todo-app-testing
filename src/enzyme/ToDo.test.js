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
})