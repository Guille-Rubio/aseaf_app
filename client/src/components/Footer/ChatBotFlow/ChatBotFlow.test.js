import React from "react";
import { shallow } from "enzyme";
import ChatBotFlow from "./ChatBotFlow";

describe("ChatBotFlow", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChatBotFlow />);
    expect(wrapper).toMatchSnapshot();
  });
});
