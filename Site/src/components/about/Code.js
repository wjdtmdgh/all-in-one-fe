import React from "react";
import Cimg from "../../images/ServicePic/Servipic8.png";
import { Col, Image, Row } from "antd";

function comment() {
  return (
    <div>
      <Row align="center">
        <Col flex="1"></Col>
        <Col flex="2" align="center" direction="vertical" className="col">
          <h1>
            <b>바로바로 게시판에</b> <b className="up">UPLOAD!</b>
            <b>
              <br />
              여러분의 코드를 저장하세요
            </b>
          </h1>
          <b>[ 기록도 하고 소통도 하자! ]</b>
        </Col>
        <Col flex="3" align="center" direction="vertical">
          <Image src={Cimg} className="ima"></Image>
        </Col>
        <Col flex="1"></Col>
      </Row>
      s
    </div>
  );
}
export default comment;
