import { Card } from "antd";
import img1 from "../images/Homepic5.jpeg";
import "../styles/Home.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
function Board() {
  return (
    <div>
      <img src={img1} className="Boardimg"></img>
      <div className="Boardh">
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>다른 사람들의 코드를 보고 배울 수 있습니다</b>
        </h1>
        <h1 className="codingH">
          {" "}
          <CheckCircleTwoTone />
          <b>댓글 작성기능으로 여러사람과 소통할 수 있습니다</b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>다양한 언어의 풀이 방법을 볼 수 있습니다</b>
        </h1>
        <h1 className="codingH">
          <CheckCircleTwoTone />
          <b>자신이 작성했던 코드를 기록할 수 있습니다</b>
        </h1>
      </div>
    </div>
  );
}
export default Board;
