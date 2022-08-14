import React from "react";
import Cimg from "../../images/HomePic/Homepic5.jpeg";
import { Col, Image, Row } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
function comment() {
  return (
    <div>
      <Row align="center">
        <Col flex="1"></Col>
        <Col flex="2" align="center" direction="vertical" className="col">
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
          ;
        </Col>
        <Col flex="3" align="center" direction="vertical">
          <Image src={Cimg} className="imgg"></Image>
        </Col>
        <Col flex="1"></Col>
      </Row>
      s
    </div>
  );
}
export default comment;
