import React from "react";
import Rx from "rx";
import hermite from "./hermite";

function supportsFileAPI(window) {
  return window.File && window.FileReader && window.FileList && window.Blob;
}

let readImage = function (file) {
  let reader = new window.FileReader();

  return Rx.Observable.create((observer) => {
    reader.onload = function (event) {
      let url = event.currentTarget.result;
      observer.onNext(url);
    };

    reader.onerror = function (err) {
      observer.onError(err)
    };

    reader.readAsDataURL(file);
  });
}

const Component = React.createClass({
  getInitialState: function () {
    return {
      imageURL: null
    };  
  },

  handleChange: function (event) {
    let file = event.target.files[0];

    if (supportsFileAPI(window)) {
      readImage(file).flatMap((dataURI) => {
        return resize(dataURI, 200, 200);
      }).subscribe((dataURI) => {
        console.log(dataURI);
        this.setState({
          imageURL: dataURI
        });
      }.bind(this));
    }
  },

  render: function () {
    return (
      <div>
        <img src={this.state.imageURL} />
        <input type="file" onChange={this.handleChange} />
      </div>
    );
  }
});

let resize = function (dataURI, width, height) {
  let canvas = document.createElement("canvas");
  let cx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  return createImage(dataURI).map((image) => {
    cx.drawImage(image,
      0, 0, width, height,
      0, 0, width, height);
    hermite(canvas, 640, 480, width, height);
    return canvas.toDataURL("image/jpg");
  });
};

let createImage = (dataURL) => {
  let img = new Image();

  return Rx.Observable.create((observer) => {
    img.onload = (data) => {
      observer.onNext(img);
    };

    img.src = dataURL;
  });
};

export default Component;