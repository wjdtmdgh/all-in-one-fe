import "../../styles/Home.css";
import "../../styles/Service.css";
import Q from "../../images/HomePic/Homepic1.png";
import W from "../../images/HomePic/Homepic2.jpeg";
import R from "../../images/HomePic/Homepic6.jpeg";
import { useState } from "react";
import { Divider } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Button, Popover, Row, Col } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { CheckOutlined } from "@ant-design/icons";
import { SolutionOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import Comment from "./Comment";
import Like from "./Like";
import Code from "./Code";
import Record from "./Record";
import A from "../../images/ServicePic/Servicepic1.webp";
import B from "../../images/HomePic/Homepic3.png";
import C from "../../images/ServicePic/Servicepic3.jpeg";
import D from "../../images/ServicePic/Serviceicon1.png";
import E from "../../images/ServicePic/Serviceicon2.png";
import F from "../../images/ServicePic/Serviceicon3.png";
import G from "../../images/ServicePic/Serviceicon4.png";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import {getToken} from "../../utils/LocalStorageUtils";
function Home() {
  const navigate = useNavigate();
  const onRegisterButtonClick = () => {
    navigate("/sign-up");
  };

  const onLoginButtonClick = () => {
    navigate("/sign-in");
  };
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
  const token = getToken()
  return (
    <div className="q">
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
        { !token &&
          <Button
            type="primary"
            htmlType="submit"
            onClick={onRegisterButtonClick}
            className="member"
          >
            회원가입
          </Button>
        }
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        { !token &&
          <p className="p2">
            이미 가입하셨나요?{" "}
            <button className="login" onClick={onLoginButtonClick}>
              로그인
            </button>
          </p>
        }
      </div>
      <Row>
        <div className="img">
          <Col>
            <img src={Q} className="img1" />
            <Col>
              <img src={R} className="img3" />
            </Col>
          </Col>
          <Col>
            <img src={W} className="img2" />
          </Col>
        </div>
      </Row>
      <Divider id="div">ALL-IN-ONE</Divider>
      <div className="divS">
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
          <Popover
            content={() => (
              <p>
                채팅 기능으로 다른 사람들과 바로바로 대화를 주고 받을 수
                있습니다
              </p>
            )}
            title="Chatting"
          >
            <img src={D} className="simg3"></img>
          </Popover>
          <Popover
            content={() => (
              <p>
                녹화 기능으로 진행했던 회의 내용을 기록하고 공유할 수 있습니다
              </p>
            )}
            title="Recording"
          >
            <img src={E} className="simg4"></img>
          </Popover>
          <Popover
            content={() => (
              <p>
                숨기기 나타내기 기능으로 현재 화상 화면을 숨기고 다시 보여줄 수
                있습니다
              </p>
            )}
            title="Hiding"
          >
            <img src={F} className="simg5"></img>
          </Popover>
          <Popover
            content={() => (
              <p>
                음성 기능으로 화면 뿐 아니라 음성도 끄고 키고 할 수 있습니다
              </p>
            )}
            title="Voicing"
          >
            <img src={G} className="simg6"></img>
          </Popover>
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
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        AlgorithmStudy Platform ©2022 Created by Seungho.J
      </Footer>
    </div>
  );
}
export default Home;
