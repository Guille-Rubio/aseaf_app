import React from "react";
import { shallow } from "enzyme";
import UserAvatar from "./UserAvatar";

describe("UserAvatar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserAvatar />);
    expect(wrapper).toMatchSnapshot();
  });
});
