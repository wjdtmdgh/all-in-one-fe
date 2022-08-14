import React from "react";
import Cimg from "../../images/ServicePic/Servipic9.jpeg";
import { SendOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
import { SoundOutlined } from "@ant-design/icons";

function comment() {
  return (
    <div>
      <div className="Cimgd">
        <SoundOutlined className="Cicon"></SoundOutlined>
        {/* <SendOutlined className="Cicon"></SendOutlined> */}
        <TeamOutlined className="Ccicon"></TeamOutlined>
        <img src={Cimg} className="Cimg"></img>
        <h1 className="CimgH">
          <b className="Cimgp">커뮤니케이션 </b>
          <b>
            은 강한 관계를 형성하는 <br />
            가장 좋은 방법
          </b>
        </h1>
        <h1 className="Cimgh2">
          <br />
          <b>[ 댓글을 남겨 상대방하고 소통하세요 ]</b>
        </h1>
      </div>
    </div>
  );
}
export default comment;
