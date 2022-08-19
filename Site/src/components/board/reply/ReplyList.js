import {Avatar, Comment, List, message} from "antd";
import React, {useEffect, useState} from "react";
import ReplyEditor from "./ReplyEditor";
import webClient from "../../../utils/WebClient";

function ReplyList({articleId}) {
  const [comments, setComments] = useState([]);
  const getReplies = () => {
    webClient
      .get(`http://localhost:8080/replies?articleId=${articleId}`)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        message.error("회원가입 실패. 이미 가입된 이메일입니다.");
      })
  }
  useEffect(() => {
    getReplies()
  }, [])

  return <>
    {comments.length > 0 &&
      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        itemLayout="horizontal"
        renderItem={(item) =>
          <Comment
            author={item.writerName}
            content={item.contents}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            datetime={item.createdDate}
          />}
      />}
    <ReplyEditor
      articleId={articleId}
      comments={comments}
      getReplies={getReplies}
    />
  </>
}

export default ReplyList;