import React from "react";
import V from "../../../images/ServicePic/Servicepic1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginOutlined,
  EllipsisOutlined,
  TeamOutlined,
  FundViewOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popover, Modal, Input } from "antd";
import "../../../styles/Articlevideochat.css";
function ArticleVideoChat() {
  const navigate = useNavigate();
  const { Meta } = Card;
  const content = "현재 화상회의 참가인원은 3명입니다";
  const content2 = "화상회의 참가하기";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    navigate("/videochatroom");
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h1 className="BBh1">Video Chat</h1>
      <div className="Avideochat">
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={V} />}
          actions={[
            <Popover content={content2}>
              <LoginOutlined onClick={showModal} />
            </Popover>,
            <Popover content={content}>
              <TeamOutlined />
            </Popover>,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title="정승호"
            description="Java로 푸는 연구소"
          />
        </Card>
        <Modal
          title="ALL-IN-ONE"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>화상회의 참가를 원하시면 확인 받은 코드를 입력해 주세요</p>
          <Input placeholder="코드입력" />
        </Modal>
      </div>
    </div>
  );
}
export default ArticleVideoChat;
