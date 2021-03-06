import React from "react";
import {Form, Input, Button, Checkbox, Space, message} from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

import "../styles/SignIn.css";
import webClient from "../utils/WebClient";
function SignIn() {
  const onFinish = (values) => {
    console.log('패스워드 일치: ', values)
    const data = {
      email: values.email,
      password: values.password
    }
    webClient.post(`http://localhost:8080/members/login`, data)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onRegisterButtonClick = () => {
    window.location.href = "/sign-up";
  }

  return (
    <Form
      className="SignIn"
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 7 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: "이메일을 입력해 주세요" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해 주세요" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 10, span: 7 }}
      >
        <Checkbox>로그인 기억하기</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 12, span: 18 }}>
        <Space style={{marginBottom: 10}}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
          <Button type="primary" onClick={onRegisterButtonClick}>
            회원가입
          </Button>
        </Space>
      </Form.Item>
      <Form.Item
        wrapperCol={{ offset: 1, span: 10 }}
        label="다른방법으로 로그인 "
      >
        <GithubOutlined className="logo" />
        <TwitterOutlined className="logo" />
        <FacebookOutlined className="logo" />
      </Form.Item>
    </Form>
  );
}

export default SignIn;
