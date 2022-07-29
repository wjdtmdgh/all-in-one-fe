import React from "react";
import {Form, Input, Button, Checkbox, Space, message} from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

import "../styles/SignUp.css";
import webClient from "../utils/WebClient";

function SignUp() {
  const onFinish = (values) => {
    if(values.password === values.confirm_password) {
      console.log('패스워드 일치: ', values)
      const data = {
        email: values.email,
        password: values.password
      }
      webClient.post(`http://localhost:8080/members`, data)
      // TODO
      // 1. 서버에 아이디 패스워드 전달
      // 2. 성공시 로그인 처리 후 화면 이동(어디로 이동할지는 생각해보기)
      // 3. 실패시 에러메시지 띄우기
    }
    else{
      console.log('패스워드 불일치: ', values);
      message.error('패스워드가 일치하지 않습니다.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onLoginButtonClick = () => {
    window.location.href = "/sign-in";
  }

  return (
    <Form
      className="SignUp"
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
        rules={[{ required: true, type: 'email', message: "이메일을 입력해 주세요" }]}
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
        label="비밀번호 확인"
        name="confirm_password"
        rules={[{ required: true, message: "비밀번호 확인을 입력해 주세요" }]}
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
            회원가입
          </Button>
          <Button type="primary" onClick={onLoginButtonClick}>
            로그인
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

export default SignUp;
