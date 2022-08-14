import React from "react";
import Cimg from "../../images/Servipic10.png";
import { HeartTwoTone } from "@ant-design/icons";
function Like() {
  return (
    <div>
      <div className="Cimgd2">
        <img src={Cimg} className="Cimg2"></img>
        <div className="Cimgd2">
          <HeartTwoTone
            twoToneColor="#eb2f96"
            className="Cimg2icon"
          ></HeartTwoTone>
          <HeartTwoTone
            twoToneColor="#eb2f96"
            className="Cimg2icon2"
          ></HeartTwoTone>
          <h1 className="Cimghh">
            <b>[ </b>
            <b className="Cimghb">좋아요 </b>
            <b>는 관심이고 사랑입니다 ]</b>
          </h1>

          <HeartTwoTone
            twoToneColor="#eb2f96"
            className="Cimg2icon"
          ></HeartTwoTone>
          <HeartTwoTone
            twoToneColor="#eb2f96"
            className="Cimg2icon2"
          ></HeartTwoTone>
        </div>
      </div>
    </div>
  );
}
export default Like;
