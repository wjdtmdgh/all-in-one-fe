import React, { useState } from "react";
import "../styles/CodeWithMe.css";
import { Col, Image, Row } from "antd";
import img1 from "../images/CWMpic1.webp";
import img2 from "../images/CWMpic2.webp";
import { Button } from "antd";
import { Divider } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Modal } from "antd";
import {useNavigate} from "react-router-dom";

const h2 = {
  color: "darkblue",
  fontSize: "30px",
};
const h1 = {
  fontSize: "20px",
};
function CodeWithMe() {
  const navigate = useNavigate()
  var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    navigate("/video/inCodeWithMe")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="d">
      <Row align="center" className="d">
        <Col flex="1">
          <img src={img1} className="CWimg1"></img>
        </Col>
        <Col flex="2" align="center" direction="vertical" className="col">
          <div className="CWMd1">
            <h1 className="CWMh1">
              <b>ALL IN ONE</b>
            </h1>
            <h2 style={h2} className="CWMh2">
              <b>Should we code together?</b>
            </h2>
            <Button type="primary" className="CWbutton" onClick={showModal}>
              Create a meeting
            </Button>
            <Button type="primary" className="CWbutton">
              Join a meeting
            </Button>
            <Modal
              title="ALL IN ONE"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h1 style={h1}>
                다른 회원분들에 참가를 원하시면 아래 코드를 사용하세요
              </h1>
              <p>{generateRandom(10, 100)}</p>
            </Modal>
          </div>
        </Col>
        <Col flex="1">
          <img src={img2} className="CWimg2"></img>
        </Col>
      </Row>
      <Divider>ALL-IN-ONE</Divider>
      <Footer
        className="d"
        style={{
          textAlign: "center",
        }}
      >
        AlgorithmStudy Platform ©2022 Created by Seungho.J
      </Footer>
    </div>
  );
}

export default CodeWithMe;
