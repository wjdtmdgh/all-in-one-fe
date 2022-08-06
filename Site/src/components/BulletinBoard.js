import React from "react";
import "../styles/BulletinBoard.css";
import { Card, Col, Row, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { MessageFilled } from "@ant-design/icons";
import { HeartTwoTone } from "@ant-design/icons";
import { Image } from "antd";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
function BulletinBoard() {
  const { Meta } = Card;
  const navigate = useNavigate();
  const onBoardRegister = () => {
    navigate("/board-in");
  };
  return (
    <div className="BBdiv">
      <div>
        <h1 className="BBh1">Share Your Code</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={3}></Col>
            <Col span={6}>
              <Card
                title={
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Jeong Seung Ho"
                    description="마법사 상어와 파이어 볼 - C++"
                  />
                }
                className="BBCard"
                onClick={onBoardRegister}
              >
                <div>
                  {" "}
                  <Image
                    width={250}
                    src="https://blog.kakaocdn.net/dn/cgxs4o/btqCWbZiAbW/DmHVgTvU1wwGpjvMlbTaUK/img.png"
                  />
                </div>
                <div>
                  <EyeFilled className="eye" />
                  172
                  <MessageFilled className="mes" />3
                  <HeartTwoTone twoToneColor="#eb2f96" className="heart" />
                  50
                </div>
              </Card>
              <div className="Card">
                <Card title="Card title">Card content</Card>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <Card title="Card title">Card content</Card>
              </div>
              <div className="Card">
                <Card title="Card title">Card content</Card>
              </div>
              <Pagination defaultCurrent={1} total={50} className="pag" />
            </Col>
            <Col span={6}>
              <div>
                <Card title="Card title">Card content</Card>
              </div>
              <div className="Card">
                <Card title="Card title">Card content</Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default BulletinBoard;
