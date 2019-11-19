import React from 'react';
import { mount } from 'enzyme';
import ToDoItem from '../components/ToDoItem';

describe("<ToDoItem/>", () => {
    const item = { text: "Clean the pot" };
    const toDoItem = mount(<ToDoItem item={item} />);
    
    it("Renders the text from the prop", () => {
      expect(toDoItem.find("p").text()).toEqual(item.text);
    });
    
    it("Renders a delete button", () => {
      expect(toDoItem.find("button").text()).toEqual("-");
    });
  });