import React from "react";
import merge from "lodash/object/merge";

const backgroundColor = "#bdc3c7";
const textColor = "#fff";
const textSize = 12;
const tipWidth = 12;
const padding = 9;

const styles = {
  tag: {
    fontSize: textSize,
    lineHeight: 1,
    padding: padding,
    paddingLeft: 14,
    paddingRight: 28,
    marginLeft: tipWidth,
    position: "relative",
    borderRadius: "0 2px 2px 0",
    backgroundColor: backgroundColor,
    color: textColor,
  },
  tag__hole: {
    width: 4,
    height: 4,
    borderRadius: 4,
    display: "block",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#fff",
    left: 0,
    top: 14
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
    lineHeight: 1,
    fontSize: textSize,
    border: 0,
    color: textColor,
    backgroundColor: "transparent",
    padding: padding,
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
        <span style={styles.tag__hole}></span>
        {this.props.text}
        <button className="schibsted-tag__remove" style={styles.tag__remove}>&times;</button>
      </span>
    );
  }
});
