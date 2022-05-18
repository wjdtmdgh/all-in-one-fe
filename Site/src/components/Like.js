import React from "react";
import Cimg from "../images/Homepic5.jpeg";
function comment() {
  return (
    <div>
      <h1 className="Cimgh2">
        <b>댓글을 남겨 상대방하고 소통하세요!</b>
      </h1>
      <div className="Cimgd2">
        <img src={Cimg} className="Cimg2"></img>
      </div>
    </div>
  );
}
export default comment;
