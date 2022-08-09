import React, { useEffect, useState } from "react";
import {Col, Row, Table} from "antd";
import { Pagination } from "antd";
import ArticlePreview from "./ArticlePreview";
import webClient from "../../utils/WebClient";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function BulletinBoard() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [articlesPreview, setArticlesPreview] = useState(<></>);
  const onRegisterArticle = () => {
    navigate("/register");
  };
  useEffect(() => {
    webClient
      .get(`http://localhost:8080/articles`)
      .then((res) => res.data)
      .then((data) => setArticles(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(`Articles:`, articles);
    console.log(articles.length);
    if (articles.length > 0) {
      setArticlesPreview(
        <>
          <Col span={24}>
            {articles.map(item => <ArticlePreview article={item}/>)}
          </Col>
          <Button type="primary" onClick={onRegisterArticle}>글 쓰기</Button>
        </>
      )
    }
  }, [articles]);

  return (
    <div className="BBdiv">
      <div>
        <h1 className="BBh1">Share Your Code</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={3}></Col>
            {articlesPreview}
          </Row>
          {/* <Pagination defaultCurrent={1} total={50} className="pag" /> */}
        </div>
      </div>
    </div>
  );
}

export default BulletinBoard;
