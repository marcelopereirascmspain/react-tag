import React from "react";
import Tag from "../src/index";

var segundamanoTagTheme = {
  tag: {
    backgroundColor: "#f90"
  },
  tag__tip: {
    borderRightColor: "#f90"
  }
};

var successTagTheme = {
  tag: {
    backgroundColor: "green"
  },
  tag__tip: {
    borderRightColor: "green"
  }
};

class SuccessTag extends React.Component {
  render() {
    return (
      <Tag {...this.props} theme={successTagTheme} />
    );
  }
}

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Tag text="this is a default tag" />
        <SuccessTag text="this is a wrapped tag with a default theme" />
        <Tag text="this is a tag with an overriden theme" theme={segundamanoTagTheme} />
      </div>
    )
  }
}

React.render(<Docs />, document.getElementById("main"));
