import {Avatar, Button, Comment, Form, Input, message} from "antd";
import React, {useState} from "react";
import webClient from "../../../utils/WebClient";

function ReplyEditor({articleId, comments, getReplies}) {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const { TextArea } = Input;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    const data = {
      articleId: articleId,
      contents: value,
      writerId: 1, // TODO: get user ID from JWT
    }
    webClient
      .post(`http://localhost:8080/replies`, data)
      .then(() => {
        getReplies()
      })
      .catch((err) => {
        message.error("회원가입 실패. 이미 가입된 이메일입니다.");
      })
      .finally(() => {
        setSubmitting(false);
      });

    setValue("");

  };

  return <Comment
    avatar={
      <Avatar
        src="https://joeschmoe.io/api/v1/random"
        alt="Jeong Seung Ho"
      />
    }
    content={<>
      <Form.Item>
        <TextArea rows={4} onChange={handleChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={handleSubmit}
          type="primary"
        >
          댓글 남기기
        </Button>
      </Form.Item>
    </>
    }
  />
}

export default ReplyEditor;