import React from "react";
import { shallow } from "enzyme";
import ListDisplay from "../components/ListDisplay";

describe("ListDisplay", () => {
  test("Should create an li tag for each item in todo prop", () => {
    const component = shallow(<ListDisplay todos={[1, 2, 3, 4]} />);

    console.log(component.find("li").first().text());
    expect(component.find("li")).toHaveLength(4);

    expect(component.find("li").at(0).text()).toBe("1X");
    expect(component.find("li").at(1).text()).toBe("2X");
    expect(component.find("li").at(2).text()).toBe("3X");
    expect(component.find("li").at(3).text()).toBe("4X");
  });

  test("Will call `removeFromList` prop when X button is clicked", () => {
    const removeFromListMock = jest.fn();

    const component = shallow(
      <ListDisplay todos={[1, 2, 3, 4]} removeFromList={removeFromListMock} />
    );

    const button = component.find(`[data-testid="x-button"]`).at(0);

    button.simulate("click");

    expect(removeFromListMock.mock.calls).toHaveLength(1);
    expect(removeFromListMock.mock.calls[0][0]).toBe(0);
  });
});
