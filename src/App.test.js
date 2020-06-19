import { shallow, mount } from "enzyme";
import React from "react";
import App from "./App";

describe("App.js", () => {
  test("App should mount with list title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  test("`addToList` will push argument to state.todos", () => {
    const component = shallow(<App />);
    const instance = component.instance();
    instance.addToList(1);
    expect(component.state("todos")).toEqual([1]);
  });

  test("`removeFromList` should remove the element at the provided index from state.todos", () => {
    const component = shallow(<App />);
    component.setState({ todos: [1] });
    const instance = component.instance();
    instance.removeFromList(0);
    expect(component.state("todos")).toEqual([]);
  });
});
