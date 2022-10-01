import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import "../../../styles/BoardRegister.css";
import webClient from "../../../utils/WebClient";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import ArticleContent from "./ArticleContent";
import {getUserId} from "../../../utils/LocalStorageUtils";

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
function ArticleRegister() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const onFinish = (values) => {
    console.log("values: ", values);
    const data = {
      title: values.title,
      contents: values.contents,
      writerId: getUserId(),
      language: values.language,
    };
    console.log("data: ", data);
    webClient
      .post(`http://localhost:8080/articles`, data)
      .then((res) => res.data)
      .then((data) => {
        navigate("/board");
      })
      .catch((err) => {
        message.error("글 작성에 실패하였습니다.");
      });
  };
  return (
    <div className="BRdiv">
      {/* <div className="BRform">
        <h1 className="BRh">
          {" "}
          <DingtalkSquareFilled />
          ALL-IN-ONE
        </h1> */}
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
          <Input />
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
              <ArticleContent content={content}/>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: "제목을 입력해 주세요" }]}
        >
          <Select>
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
  );
}
export default ArticleRegister;
