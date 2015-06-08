import React from "react";

export default React.createClass({
  render: function () {
    return (
      <span className="schibsted-tag">
        {this.props.text}
        <button className="schibsted-tag__remove">&times;</button>
      </span>
    );
  }
});
