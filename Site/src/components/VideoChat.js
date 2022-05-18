import { Card } from "antd";
import img1 from "../images/Homepic3.png";
import "../styles/Home.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
function Coding() {
  return (
    <div>
      <img src={img1} className="codingimg"></img>
      <div className="codingh">
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>화상기능으로 얼굴보며 공부 할 수 있습니다</b>
        </h1>
        <h1 className="codingH">
          {" "}
          <CheckCircleTwoTone />
          <b>녹화기능으로 회의나 얘기했던 내용 다시 볼 수 있습니다</b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>
            메세지기능으로 음성을 원치 않으면 타이핑으로 소통 할 수 있습니다
          </b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>다같이 실시간 스터디가 가능합니다</b>
        </h1>
      </div>
    </div>
  );
}
export default Coding;
