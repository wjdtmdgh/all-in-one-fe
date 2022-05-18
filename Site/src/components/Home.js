import "../styles/Home.css";
import A from "../images/Homepic1.png";
import B from "../images/Homepic2.jpeg";
import C from "../images/Homepic6.jpeg";
import E from "../images/Homepic12.jpeg";
import Coding from "./Coding";
import Board from "./Board";
import VideoChat from "./VideoChat";
import { useState } from "react";
import { Divider } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Form, Input, Button, Select } from "antd";

function Home() {
  const clickMe = () => {
    window.location.href = "/sign-in";
  };
  const [content, setContent] = useState("coding");

  const coding = () => {
    setContent("coding");
  };
  const board = () => {
    setContent("board");
  };
  const videochat = () => {
    setContent("videochat");
  };
  const selectComponent = {
    coding: <Coding />,
    board: <Board />,
    videochat: <VideoChat />,
  };

  return (
    <div>
      <div className="Home">
        <h1 className="h1">
          <b>가장 쉬운 스터디 플랫폼</b>
        </h1>
        <h1 className="h2">
          <b>ALL-IN-ONE</b>
        </h1>
        <p className="p1">
          혼자 공부하지말고 같이하자!
          <br />
          <b>올인원</b>과 함께라면 신속하고 효율적인 공부를 할 수 있습니다.
        </p>
        <Button
          type="primary"
          htmlType="submit"
          onClick={clickMe}
          className="member"
        >
          회원가입
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="p2">
          이미 가입하셨나요? <span className="login">로그인</span>
        </p>
      </div>
      <div className="img">
        <img src={A} className="img1" />
        <img src={B} className="img2" />
        <img src={C} className="img3" />
      </div>
      <Divider id="div">ALL-IN-ONE</Divider>
      <div>
        <h1 className="h3">
          <b>
            언제 어디서나 가장 쉬운{" "}
            <span className="span">협업 공간, 올인원!</span>
          </b>
        </h1>
        <p className="p3">
          <b>
            플랫폼 올인원을 사용하면 소통이 빨라지고 공부 효율성이 높아집니다.
          </b>
        </p>
        <div className="Button">
          <Button
            type="primary"
            htmlType="submit"
            onClick={coding}
            className="button"
          >
            실시간 코딩
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={board}
            className="button"
          >
            게시판 기능
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={videochat}
            className="button"
          >
            화상회의 기능
          </Button>
        </div>
        {content && selectComponent[content]}
      </div>
      <Divider id="div">ALL-IN-ONE</Divider>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        AlgorStudy Platform ©2022 Created by Seungho.J
      </Footer>
    </div>
  );
}
export default Home;
