import React from "react";
import { shallow } from "enzyme";
import PostCard from "./PostCard";

describe("PostCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PostCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
