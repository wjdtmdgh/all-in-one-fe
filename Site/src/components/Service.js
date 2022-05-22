import React, { useState } from "react";
import "../styles/Service.css";
import A from "../images/Servicepic1.webp";
import B from "../images/Homepic3.png";
import { DingtalkSquareFilled } from "@ant-design/icons";
import { DoubleRightOutlined } from "@ant-design/icons";
import { CheckOutlined } from "@ant-design/icons";
import { SolutionOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import Comment from "./Comment";
import Like from "../components/Like";
import Code from "../components/Code";
import Record from "../components/Record";
import C from "../images/Servicepic3.jpeg";
import { Carousel } from "antd";
import { Divider } from "antd";
import { Col, Image, Row } from "antd";
import D from "../images/Videochatpic1.jpeg";
function Service() {
  const [gaesipan, setGaesipan] = useState("comment");
  const comment = () => {
    setGaesipan("comment");
  };
  const like = () => {
    setGaesipan("like");
  };
  const code = () => {
    setGaesipan("code");
  };
  const record = () => {
    setGaesipan("record");
  };
  const selectComponent = {
    comment: <Comment />,
    like: <Like />,
    code: <Code />,
    record: <Record />,
  };
  return (
    <div className="serviceD">
      <div className="divS">
        <h1 className="serviceh">
          <DingtalkSquareFilled />
          <b>ALL IN ONE</b>
        </h1>
        <h1 className="serviceH">
          <b>
            더 능률적으로, 더 여유롭게
            <br />
            공부에 <span className="serviceA">ALL-IN </span>하세요
          </b>
        </h1>
        <div>
          <img src={A} className="simg1"></img>
          <img src={B} className="simg2"></img>
        </div>
      </div>
      <Divider>ALL-IN-ONE</Divider>
      <div className="serviceH2">
        <h1 className="serviceh2">
          <b>
            {" "}
            ALL IN ONE 안에서 <br />
            <span className="span2">몰입</span>하세요
          </b>
        </h1>
        <div className="servicep">
          <p>
            <DoubleRightOutlined className="s" />
            <b>
              수 많은 <span className="services">IDE 기능 </span>지원
            </b>
          </p>
        </div>
        <Carousel autoplay>
          <div className="carouseld">
            <img src={C} className="carousel"></img>
            <h1 className="left">
              <CheckOutlined></CheckOutlined>
              <b>4가지 주요 언어 지원</b>
            </h1>
            <h1 className="right">
              <CheckOutlined />
              <b>자동완성기능으로 누구보다 편리한 코딩</b>
            </h1>
            <h1 className="left">
              <CheckOutlined />
              <b>디버거를 사용한 디버깅 기능 제공</b>
            </h1>
            <h1 className="right">
              <CheckOutlined />
              <b>INPUT OUTPUT 결과 즉각확인</b>
            </h1>
            <h1 className="left">
              <CheckOutlined />
              <b>CRDT사용한 동시 편집 기능 제공</b>
            </h1>
          </div>
        </Carousel>
      </div>
      <div className="div1">
        <Divider>ALL-IN-ONE</Divider>
      </div>
      <div>
        <div className="gaesi">
          <h1>
            <b className="b">게시판</b>
            <b>
              을 통해
              <br />
              <SolutionOutlined></SolutionOutlined>
              <b className="so">소통</b>하고 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; <b className="gi">기록</b>하기{" "}
              <EditOutlined />
            </b>
          </h1>
        </div>
        <div className="Button">
          <div>
            <Button type="primary" className="bbutton" onClick={comment}>
              댓글남기기
            </Button>
            <Button type="primary" className="bbutton" onClick={like}>
              하트누르기
            </Button>
          </div>
          <div>
            <Button type="primary" className="bbbutton" onClick={code}>
              코드기록하기
            </Button>
            <Button type="primary" className="bbbutton" onClick={record}>
              primary
            </Button>
          </div>
        </div>
        {gaesipan && selectComponent[gaesipan]}
      </div>
      <Divider>ALL-IN-ONE</Divider>
      {/* <div align="center">
        <Popover content={() => <p>자세히 알아보기</p>} title="Title">
          <SolutionOutlined className="dfa"></SolutionOutlined>
        </Popover>
      </div>
      <img src={D}></img> */}
    </div>
  );
}

export default Service;
