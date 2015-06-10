import React from "react";
import Tag from "../src/index";

var segundamanoTagTheme = {
  tag: {
    backgroundColor: "#3498db"
  },
  tag__tip: {
    borderRightColor: "#3498db"
  }
};

var successTagTheme = {
  tag: {
    backgroundColor: "#2ecc71"
  },
  tag__tip: {
    borderRightColor: "#2ecc71"
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
        <section>
          <h1>Default</h1>
          <p><Tag text="default" /></p>
        </section>
        <section>
          <h1>Themed</h1>
          <p>You can wrap the tag component and use it with your own theme</p>
          <p><SuccessTag text="themed" /></p>
        </section>
        <section>
          <h1>Overriden</h1>
          <p>You can pass a <code>theme</code> prop to a specific tag to override its styles</p>
          <p><Tag text="overriden" theme={segundamanoTagTheme} /></p>
        </section>
      </div>
    )
  }
}

React.render(<Docs />, document.getElementById("main"));
