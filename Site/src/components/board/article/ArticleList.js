import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import webClient from "../../../utils/WebClient";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
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
        <h1 className="BBh1">Video Chat</h1>
        <div className="BRv">
          <div className="BRv1">
            <table className="table">
              <tr>
                <td className="td">Title</td>
                <td className="td">&nbsp; : &nbsp; </td>
                <td className="td">정 승 호</td>
              </tr>
              <tr>
                <td className="td">Contents</td>
                <td className="td">&nbsp; : &nbsp;</td>
                <td className="td">승호 상어와 파이어 볼</td>
              </tr>
              <tr>
                <td className="td">Language</td>
                <td className="td">&nbsp; : &nbsp;</td>
                <td className="td">JAVA</td>
              </tr>
            </table>
          </div>
          <div className="BRv2">
            {" "}
            <div className="BRv3">
              <JoinMeeting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
