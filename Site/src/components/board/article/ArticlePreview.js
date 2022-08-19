import { Avatar, Card, Image } from "antd";
import {
  EyeFilled,
  HeartTwoTone,
  MessageFilled,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/BulletinBoard.css";

function ArticlePreview({ article }) {
  const { Meta } = Card;
  const navigate = useNavigate();
  const onBoardRegister = (id) => {
    navigate(`/board-in/${id}`);
  };

  useEffect(() => {
    console.log(article);
  }, []);

  return (
    <div>
      <Card
        title={
          <Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={article.writerName}
            description={article.title + " - " + article.language}
          />
        }
        onClick={() => onBoardRegister(article.id)}
      >
        <div>
          {" "}
          <Image
            width={280}
            src="https://blog.kakaocdn.net/dn/cgxs4o/btqCWbZiAbW/DmHVgTvU1wwGpjvMlbTaUK/img.png"
          />
        </div>
        <div>
          <EyeFilled className="eye" />
          {article.pageView}
          <MessageFilled className="mes" />3
          <HeartTwoTone twoToneColor="#eb2f96" className="heart" />
          {article.favoriteCount}
        </div>
      </Card>
    </div>
  );
}

export default ArticlePreview;
