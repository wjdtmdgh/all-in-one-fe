import {Avatar, Button, Comment, Form, Input, message} from "antd";
import React, {useState} from "react";
import webClient from "../../../utils/WebClient";
import {getEmail, getUserId} from "../../../utils/LocalStorageUtils";
import {getProfileImage} from "../../../utils/Gravatar";

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
      writerId: getUserId()
    }
    webClient
      .post(`http://localhost:8080/replies`, data)
      .then(() => {
        getReplies()
      })
      .catch((err) => {
        message.error("댓글 작성에 실패하였습니다.");
      })
      .finally(() => {
        setSubmitting(false);
      });

    setValue("");

  };

  return <Comment
    avatar={
      <Avatar
        src={getProfileImage(getEmail())}
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