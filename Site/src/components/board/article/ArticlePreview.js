import { Avatar, Card, Image, Popover } from "antd";
import {
  EyeFilled,
  HeartTwoTone,
  MessageFilled,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/BulletinBoard.css";
import ArticleContent from "./ArticleContent";
import "../../../styles/ArticlePreview.css";
function ArticlePreview({ article }) {
  const { Meta } = Card;
  const navigate = useNavigate();
  const onBoardRegister = (id) => {
    navigate(`/board/${id}`);
  };
  if (article.language === "C++") {
    var language =
      "https://cloud.google.com/static/cpp/images/cpp-logo.png?hl=ko";
  } else if (article.language === "Java") {
    language =
      "https://images.velog.io/images/focusonmx/post/f42a9b8b-48f6-4234-ac31-eacf3a4d3709/1_J76LX5mvMD-bP1qCj8PQpA.png";
  } else if (article.language === "Python") {
    language =
      "https://images.velog.io/images/xxhaileypark/post/7a950437-5c29-4186-98c0-99a4d2304da4/Python-language.png";
  }
  useEffect(() => {
    console.log(article);
  }, []);
  const content = (
    <div className="contents">
      <ArticleContent content={article.contents} />
    </div>
  );
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
          <div>
            {/* contents가 먹질않음 */}
            <Popover content={content} title="Contents">
              <Image width={280} height={200} src={language} />
            </Popover>
          </div>
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
