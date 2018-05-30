/* eslint-disable react/jsx-filename-extension */
import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Routes from "./routes";
import "./components/test-setup";

describe("routes", () => {
  it("Should render App component @ /", done => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>,
    );
    setTimeout(() => {
      const classString = wrapper
        .find(Routes)
        .children()
        .render()[0].attribs.class;
      expect(classString).toBe("App");
      done();
    }, 1000);
  });
});
