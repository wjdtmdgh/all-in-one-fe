import React from "react";
import Cimg from "../images/Servipic8.png";
import { UploadOutlined } from "@ant-design/icons";

function comment() {
  return (
    <div>
      {/* <h1 className="Cimgh3">
        <b>댓글을 남겨 상대방하고 소통하세요!</b>
      </h1> */}
      <div className="Cimgd3">
        <div className="Cimgdh3">
          <h1>
            <b>바로바로 게시판에</b> <b className="up">UPLOAD!</b>
            <b>
              <br />
              여러분의 코드를 저장하세요
            </b>
          </h1>
          <b>[ 기록도 하고 소통도 하자! ]</b>
        </div>
        <img src={Cimg} className="Cimg3"></img>
      </div>
    </div>
  );
}
export default comment;
