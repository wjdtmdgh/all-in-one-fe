import React, {useEffect, useState} from "react";
import "../../../styles/BulletinBoardIn.css";
import { Rate } from "antd";
import {
  Card,
  Col,
  Row,
  Avatar,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";
import { Divider } from "antd";
import webClient from "../../../utils/WebClient";
import {useParams} from "react-router-dom";
import ReplyList from "../reply/ReplyList";
import ArticleContent from "./ArticleContent";

function ArticleDetail() {
  const {articleId} = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    webClient
      .get(`http://localhost:8080/articles/${articleId}`)
      .then((res) => res.data)
      .then((data) => setArticle(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { Meta } = Card;
  return (
    <div className="BBIdiv">
      <Row>
        <Col span={6}></Col>
        <Col span={11}>
          <Card
            title={
              <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={article.writerName}
                description={article.title + " - " + article.language}
              />
            }
            className="BBIC"
          >
            <ArticleContent content={article.contents}/>
            <Rate
              className="rate"
              count={1}
              character={<HeartFilled style={{ color: "red" }} />}
            />
            <b>좋아요</b>
            <>
              <ReplyList articleId={articleId}/>
            </>
          </Card>
        </Col>
      </Row>
      <Divider id="div">ALL-IN-ONE</Divider>
    </div>
  );
}

export default ArticleDetail;
