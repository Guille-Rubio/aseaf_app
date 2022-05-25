import React from "react";
import { shallow } from "enzyme";
import BotChatChildAge from "./BotChatChildAge";

describe("BotChatChildAge", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BotChatChildAge />);
    expect(wrapper).toMatchSnapshot();
  });
});
