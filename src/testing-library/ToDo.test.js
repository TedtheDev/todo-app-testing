import React from 'react';
import { render } from '@testing-library/react';
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
})