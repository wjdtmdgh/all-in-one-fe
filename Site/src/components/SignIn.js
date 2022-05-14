import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

import "../styles/SignIn.css";
function SignIn() {
  return (
    <Form
      className="SignIn"
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 7 }}
      initialValues={{ remember: true }}
      //onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="이메일"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
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
