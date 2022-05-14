import { Carousel } from "antd";
import { Divider } from "antd";
import "../styles/Home.css";
import A from "../images/Homeimg.webp";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const contentStyle = {
  height: "500px",
  color: "#000205",
  lineHeight: "160px",
  textAlign: "center",
};
function Home() {
  return (
    <div>
      <Carousel autoplay delayLength={2}>
        <div className="Home">
          <div className="font">
            <h1 style={contentStyle}>Study With Me?</h1>
          </div>
        </div>
        <div className="Home2">
          <div className="font2">
            <h1 style={contentStyle}>
              A complete platform for <b>Algorithms</b>
            </h1>
          </div>
        </div>
      </Carousel>
      <Divider></Divider>
      <img src={A} className="A" />
      <div className="H">
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <h1 className="H1">함께 더 많은 목표를 달성</h1>
        <p className="P1">
          <b>All-in-One</b> <br></br> 원격으로 지식을 공유하고 공동작업 할 수
          있는 플랫폼
        </p>
        <button>바로 시작하기!</button>
      </div>
    </div>
  );
}
export default Home;
