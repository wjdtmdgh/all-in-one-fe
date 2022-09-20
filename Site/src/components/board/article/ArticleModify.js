import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import "../../../styles/BoardRegister.css";
import webClient from "../../../utils/WebClient";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import ArticleContent from "./ArticleContent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getUserId} from "../../../utils/LocalStorageUtils";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function ArticleModify() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [language, setLanguage] = useState("")
  const { articleId } = useParams();
  useEffect(() => {
    console.log("language:", language)
    webClient
      .get(`http://localhost:8080/articles/${articleId}`)
      .then((res) => res.data)
      .then((data) => {
        setTitle(data.title)
        setContent(data.contents)
        setLanguage(data.language)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);
  useEffect(() => {
    console.log("language:", language)
  }, [language])
  const onFinish = (values) => {
    console.log("values: ", values)
    const data = {
      title: values.title,
      contents: values.contents,
      writerId: getUserId(),
      language: values.language,
    }
    console.log("data: ", data)
    webClient
      .patch(`http://localhost:8080/articles/${articleId}`, data)
      .then((res) => res.data)
      .then((data) => {
        navigate("/board");
      })
      .catch((err) => {
        message.error("글 수정 실패");
      });
  };

  const handleChangeTitle = (e) => {
    console.log(e)
    setTitle(e.target.value)
  }

  return (
    <div className="BRdiv">
      {(title && language) && <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="Form"
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[{required: true, message: "제목을 입력해 주세요"}]}
        >
          <Input
            defaultValue={title}
            onChange={handleChangeTitle}
          />
        </Form.Item>
        <Form.Item
          name="contents"
          label="내용"
          rules={[{required: true, message: "글 내용을 입력해 주세요"}]}
        >
          <Row>
            <Col span={11} className="BRCol">
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{
                  minRows: 10,
                  maxRows: 100,
                }}
              />
            </Col>
            <Col span={11}>
              <ArticleContent content={content}/>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{required: true, message: "제목을 입력해 주세요"}]}
        >
          <Select
            defaultValue={language}
            onChange={setLanguage}
          >
            <Option value="C++">C++</Option>
            <Option value="Python">Python</Option>
            <Option value="Java">Java</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      }
    </div>
  );
}
export default ArticleModify;
