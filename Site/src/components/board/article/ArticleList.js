import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import webClient from "../../../utils/WebClient";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import ArticleVideoChat from "./ArticleVideoChat";
import JoinMeeting from "../../codewithme/JoinMeeting";
function ArticleList() {
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
          {articles.map((item) => (
            <div className="BRarticle">
              <ArticlePreview article={item} />
            </div>
          ))}
        </>
      );
    }
  }, [articles]);

  return (
    <div className="BBdiv">
      <div>
        <h1 className="BBh1">Share Your Code</h1>
        <div className="BBdiv2">{articlesPreview}</div>
        <Button type="primary" onClick={onRegisterArticle} className="BRbutton">
          글 쓰기
        </Button>
      </div>
      <div className="div1">
        <Divider>ALL-IN-ONE</Divider>
      </div>
      <div>
        <ArticleVideoChat />
      </div>
    </div>
  );
}

export default ArticleList;
