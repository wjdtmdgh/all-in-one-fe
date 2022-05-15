import { Carousel } from "antd";
import { Divider } from "antd";
import { Card } from "antd";
import "../styles/Home.css";
import A from "../images/Homeimg.webp";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const contentStyle = {
  textAlign: "center",
};
function Home() {
  return (
    <div>
      <Carousel autoplay delayLength={2}>
        <div className="Home">
          <p id="fontp">
            <b>All-In-One</b>
          </p>
          <h1 style={contentStyle} className="font">
            Study With Me?
          </h1>
          <div className="font-t">
            <p>
              <b>Algorithms</b>
              <br />
              <b>Study</b>
              <br />
              <b>Flatform</b>
            </p>
          </div>
          <div className="fontq-q">
            <p className="fontq">
              <b>Somebody needs you, Don't give up</b>
            </p>
          </div>
        </div>
        {/* <div className="Home2">
          <div className="font2">
            <h1 style={contentStyle}>
              A complete platform for <b>Algorithms</b>
            </h1>
          </div>
        </div> */}
      </Carousel>
      <Divider></Divider>
      <img src={A} className="A" />
      <div className="H">
        <h1 className="H1">
          <b>함께 더 많은 목표를 달성</b>
        </h1>
        <p className="P1">
          <b>All-in-One</b> <br></br>{" "}
          <b>원격으로 지식을 공유하고 공동작업 할 수 있는 플랫폼</b>
        </p>
        <button>바로 시작하기!</button>
      </div>
      <Divider></Divider>
    </div>
  );
}
export default Home;
