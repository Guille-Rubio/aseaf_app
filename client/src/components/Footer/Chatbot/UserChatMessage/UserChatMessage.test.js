import React from "react";
import { shallow } from "enzyme";
import UserChatMessage from "./UserChatMessage";

describe("UserChatMessage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserChatMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});
