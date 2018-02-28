/**
 * @jest-environment node
 */
import "jsdom-global/register";
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Button from "./index";

describe("Button_dummy", () => {
  it("adds 1 to count", () => {
    // render component
    const onUpdate = jest.fn();
    const props = { count: 0, onUpdate };
    const wrapper = mount(<Button {...props} />);
    // get state
    // const intialState = wrapper.state().count;
    // click the + button
    wrapper.find("button#plus").simulate("click");
    // check state changed
    // expect(wrapper.state().count).toEqual(intialState + 1);

    // expect onUpdate was called with +1
    expect(onUpdate).toHaveBeenCalledWith(1);
    // expect (wrapper.find('button#plus')).toBe(5);
  });

  it("minus 2 to count", () => {
    // render component
    const onUpdate = jest.fn();
    const props = { count: 0, onUpdate };
    const wrapper = mount(<Button {...props} />);

    wrapper.find("button#minus").simulate("click");

    expect(onUpdate).toHaveBeenCalledWith(-2);
  });
});
