import React from "react";
import { shallow } from "enzyme";
import BotChatMessage from "./BotChatMessage";

describe("BotChatMessage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BotChatMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});
