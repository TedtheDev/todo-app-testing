import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const app = mount(<App />);

        const todoHeader = app.find('.ToDo-Header');

        expect(todoHeader.text()).toEqual('React To Do');
    })
})