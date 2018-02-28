/**
 * @jest-environment node
 */
import "jsdom-global/register";
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Foo from "./index";

describe("Foo_testing", () => {
  it("have a button", () => {
    // render component
    const wrapper = shallow(<Foo />);
    const btn = wrapper.find("Button");
    // check state changed
    expect(btn).toHaveLength(1);
  });

  it("showing correct text & count in span", () => {
    const wrapper = mount(<Foo />);
    const spn = wrapper.find("#text");
    wrapper.setState({ count: 5 });
    expect(spn.text()).toBe(`father Count: 5`);
  });

  describe("#update", () => {
    it("updates the state", () => {
      const wrapper = shallow(<Foo />);
      const intialCount = wrapper.state().count;
      wrapper.instance().update(1);
      expect(wrapper.state().count).toBe(intialCount + 1);
    });
  });
});
