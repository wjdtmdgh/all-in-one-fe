import React from "react";
import Cimg from "../images/Homepic5.jpeg";
import { CarryOutOutlined } from "@ant-design/icons";

function comment() {
  return (
    <div>
      {/* <h1 className="Cimgh4">
        <b>댓글을 남겨 상대방하고 소통하세요!</b>
      </h1> */}
      <div className="Cimgd4">
        <div className="Cimgdh4">
          <h1>
            <CarryOutOutlined />
            <b> Bulletin Board</b> <br />
            <b>소통-기록-저장까지</b>
            <b>
              <br />
              <b className="one">1</b> 가지 기능으로 <b className="one">10</b>{" "}
              가지 덕을 보세요
            </b>
          </h1>
        </div>
        <img src={Cimg} className="Cimg4"></img>
      </div>
    </div>
  );
}
export default comment;
