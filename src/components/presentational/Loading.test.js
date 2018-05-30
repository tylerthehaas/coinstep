import React from "react";
import { mount } from "enzyme";

import "../test-setup";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("Should render `Loading...` text", () => {
    const wrapper = mount(<Loading isLoading />);
    const text = wrapper.text();
    expect(text).toEqual("Loading...");
  });

  it("Should handle error", () => {
    const error = new Error("An error occured");
    const wrapper = mount(<Loading error={error} />);

    it("should log error", () => {
      jest.spyOn(global.console, "error");
      expect(console.error).toHaveBeenCalledWith(error);
    });

    it("Should display error message", () => {
      expect(wrapper.text()).toEqual(
        "Sorry, there was a problem loading the page.",
      );
    });
  });

  it("Should return null without props", () => {
    const wrapper = mount(<Loading />);
    expect(wrapper.instance()).toBeNull();
  });
});
