/**
 * @jest-environment node
 */
import "jsdom-global/register";
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { Button } from "./index";

describe("Button", () => {
  it("adds 1 to count", () => {
    // render component
    const wrapper = mount(<Button />);
    // get state
    const intialState = wrapper.state().count;
    // click the + button
    wrapper.find("button#plus").simulate("click");
    // check state changed
    expect(wrapper.state().count).toEqual(intialState + 1);
  });

  it("minus 1 to count", () => {
    const wrapper = mount(<Button />);
    const intialState = wrapper.state().count;
    wrapper.find("button#minus").simulate("click");

    expect(wrapper.state().count).toEqual(intialState - 1);
  });
});
