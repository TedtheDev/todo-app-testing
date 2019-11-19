import React from 'react';
import { render } from '@testing-library/react';
import ToDoItem from '../components/ToDoItem';

describe("<ToDoItem/>", () => {
    const item = { text: "Clean the pot" };
    
    it("Renders the text from the prop", () => {
      const { getByTestId } = render(<ToDoItem item={item} />);
      expect(getByTestId("todo-text").textContent).toBe(item.text);
    });
    
    it("Renders a delete button", () => {
      const { getByTestId } = render(<ToDoItem item={item} />);
      expect(getByTestId("delete").textContent).toBe("-");
    });
  });