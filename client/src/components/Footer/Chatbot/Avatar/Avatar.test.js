import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

describe("Avatar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper).toMatchSnapshot();
  });
});
