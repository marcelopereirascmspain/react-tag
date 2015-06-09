import React from "react";
import merge from "lodash/object/merge";

const backgroundColor = "#aaa";
const tipWidth = 12;

const styles = {
  tag: {
    backgroundColor: backgroundColor,
    color: "#fff",
    padding: 9,
    paddingRight: 32,
    lineHeight: 1,
    fontSize: 12,
    borderRadius: "0 2px 2px 0",
    position: "relative",
    marginLeft: tipWidth
  },
  tag__tip: {
    border: "16px solid transparent",
    borderLeft: 0,
    borderRight: `${tipWidth}px solid transparent`,
    borderRightColor: backgroundColor,
    width: 0,
    display: "block",
    position: "absolute",
    left: -tipWidth,
    top: 0
  },
  tag__remove: {
    border: 0,
    color: "#fff",
    backgroundColor: "transparent",
    padding: 8,
    fontSize: 12,
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer"
  }
};

export default React.createClass({
  render: function () {
    const style = merge(styles, this.props.theme);

    return (
      <span className="schibsted-tag" style={styles.tag}>
        <span style={styles.tag__tip}></span>
        {this.props.text}
        <button className="schibsted-tag__remove" style={styles.tag__remove}>&times;</button>
      </span>
    );
  }
});
