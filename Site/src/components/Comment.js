import React from "react";
import Cimg from "../images/Homepic5.jpeg";
function comment() {
  return (
    <div>
      <h1 className="Cimgh">
        <b>댓글을 남겨 상대방하고 소통하세요!</b>
      </h1>
      <div className="Cimgd">
        <img src={Cimg} className="Cimg"></img>
      </div>
    </div>
  );
}
export default comment;
