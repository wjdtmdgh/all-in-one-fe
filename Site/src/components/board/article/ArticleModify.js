import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import "../../../styles/BoardRegister.css";
import { DingtalkSquareFilled } from "@ant-design/icons";
import webClient from "../../../utils/WebClient";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import TextArea from "antd/es/input/TextArea";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ArticleContent from "./ArticleContent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const { articleId } = useParams();
  useEffect(() => {
    webClient
      .get(`http://localhost:8080/articles/${articleId}`)
      .then((res) => res.data)
      .then((data) => {
        setTitle(data.title);
        setContent(data.contents);
        setLanguage(data.language);
        console.log(data.title);
        console.log(data.contents);
        console.log(data.language);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log("title이 변할떄마다", title);
  }, [title]);
  const onFinish = (values) => {
    console.log("values: ", values);
    const data = {
      title: values.title,
      contents: values.contents,
      writerId: 1, // TODO: get user ID from JWT
      language: values.language,
    };
    console.log("data: ", data);
    webClient
      .patch(`http://localhost:8080/articles`, data)
      .then((res) => res.data)
      .then((data) => {
        navigate("/board");
      })
      .catch((err) => {
        message.error("회원가입 실패. 이미 가입된 이메일입니다."); // TODO 에러 메시지 변경하기
      });
  };
  return (
    <div className="BRdiv">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="Form"
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: "제목을 입력해 주세요" }]}
        >
          <Input
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
            dd
          />
        </Form.Item>
        <Form.Item
          name="contents"
          label="내용"
          rules={[{ required: true, message: "글 내용을 입력해 주세요" }]}
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
              <ArticleContent content={content} />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: "제목을 입력해 주세요" }]}
        >
          <Select
            defaultValue={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <Select.Option value="C++">C++</Select.Option>
            <Select.Option value="Python">Python</Select.Option>
            <Select.Option value="Java">Java</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    //{" "}
    // </div>
  );
}
export default ArticleModify;
