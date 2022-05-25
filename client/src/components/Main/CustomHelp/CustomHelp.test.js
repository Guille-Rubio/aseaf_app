import React from "react";
import { shallow } from "enzyme";
import CustomHelp from "./CustomHelp";

describe("CustomHelp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomHelp />);
    expect(wrapper).toMatchSnapshot();
  });
});
