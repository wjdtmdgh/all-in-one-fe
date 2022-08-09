import React from "react";
import {Button, Form, Input, message, Select} from "antd";
import "../../styles/BoardRegister.css";
import { DingtalkSquareFilled } from "@ant-design/icons";
import webClient from "../../utils/WebClient";
import {useNavigate} from "react-router-dom";
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
function BoardRegister() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("values: ", values)
    const data = {
      title: values.title,
      contents: values.contents,
      writerId: 1, // TODO: get user ID from JWT
      language: values.language
    };
    console.log("data: ", data)
    webClient
      .post(`http://localhost:8080/articles`, data)
      .then((res) => res.data)
      .then((data) => {
        navigate("/board");
      })
      .catch((err) => {
        message.error("회원가입 실패. 이미 가입된 이메일입니다.");
      });
  };
  return (
    <div className="BRdiv">
      <div className="SignIndiv">
        <h1 className="SignInh">
          {" "}
          <DingtalkSquareFilled />
          ALL-IN-ONE
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
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
            <Input />
          </Form.Item>
          <Form.Item
            name="language"
            label="Language"
            rules={[{ required: true, message: "제목을 입력해 주세요" }]}
          >
            <Select>
              <Select.Option value="c++">C++</Select.Option>
              <Select.Option value="python">Python</Select.Option>
              <Select.Option value="Java">Java</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="code"
            label="Code"
            rules={[{ required: true, message: "제목을 입력해 주세요" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default BoardRegister;
