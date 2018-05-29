/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { shallow } from "enzyme";

import "../test-setup";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    const app = wrapper.find(".App");
    expect(app).toHaveLength(1);
  });
});
