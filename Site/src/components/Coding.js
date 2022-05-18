import { Card } from "antd";
import img1 from "../images/Homepic9.jpeg";
import "../styles/Home.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
function Coding() {
  return (
    <div>
      <img src={img1} className="codingimg"></img>
      <div className="codingh">
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>다양한 언어지원, 자신있는 언어로 참여하세요</b>
        </h1>
        <h1 className="codingH">
          {" "}
          <CheckCircleTwoTone />
          <b>자동완성 기능으로 편리하게 코딩하세요</b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>입-출력 기능으로 곧 바로 확인 가능합니다</b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>급하게 코딩할 일이 있을 때 어디서든 가능합니다</b>
        </h1>
      </div>
    </div>
  );
}
export default Coding;
