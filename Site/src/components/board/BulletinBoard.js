import React, {useEffect, useState} from "react";
import { Col, Row } from "antd";
import { Pagination } from "antd";
import ArticlePreview from "./ArticlePreview";
import webClient from "../../utils/WebClient";

function BulletinBoard() {
  const [articles, setArticles] = useState([])
  const [articlesPreview, setArticlesPreview] = useState(<></>)
  useEffect(() => {
    webClient.get(`http://localhost:8080/articles`)
      .then(res => res.data)
      .then(data => setArticles(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(`Articles:`, articles)
    if(articles.length > 0)
      setArticlesPreview(
        <>
          <Col span={6}>
            <ArticlePreview article={articles[0]}/>
            <ArticlePreview article={articles[1]}/>
          </Col>
          <Col span={6}>
            <ArticlePreview article={articles[2]}/>
            <ArticlePreview article={articles[0]}/>
          </Col>
          <Col span={6}>
            <ArticlePreview article={articles[1]}/>
            <ArticlePreview article={articles[2]}/>
          </Col>
        </>)
  }, [articles])

  return (
    <div className="BBdiv">
      <div>
        <h1 className="BBh1">Share Your Code</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={3}></Col>
            {articlesPreview}
          </Row>
          <Pagination defaultCurrent={1} total={50} className="pag" />
        </div>
      </div>
    </div>
  );
}

export default BulletinBoard;
