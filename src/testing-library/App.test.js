import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
    let app;

    beforeEach(() => {
        app = render(<App />);
    })
    it('renders without crashing', () => {
        const { getByText } = app;
        expect(getByText('React To Do')).toBeInTheDocument();
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