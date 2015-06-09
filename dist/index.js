"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodashObjectMerge = require("lodash/object/merge");

var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

var backgroundColor = "#aaa";
var tipWidth = 12;

var styles = {
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
    borderRight: "" + tipWidth + "px solid transparent",
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

exports["default"] = _react2["default"].createClass({
  displayName: "index",

  render: function render() {
    var style = (0, _lodashObjectMerge2["default"])(styles, this.props.theme);

    return _react2["default"].createElement(
      "span",
      { className: "schibsted-tag", style: styles.tag },
      _react2["default"].createElement("span", { style: styles.tag__tip }),
      this.props.text,
      _react2["default"].createElement(
        "button",
        { className: "schibsted-tag__remove", style: styles.tag__remove },
        "×"
      )
    );
  }
});
module.exports = exports["default"];