import expect from "expect";
import React from "react/addons";
import Tag from "../src/index";

describe("Tag", () => {
  it("should render the text", () => {
    const tag = React.renderToStaticMarkup(
      <Tag text="nyancat" />
    );

    expect(/nyancat/.test(tag)).toBe(true);
  });

  it("should support theming", () => {
    const tag = React.renderToStaticMarkup(
      <Tag text="Hello" theme={{tag: {backgroundColor: "#d45732"}}} />
    );

    expect(/background-color:#d45732/.test(tag)).toBe(true);
  });
});
