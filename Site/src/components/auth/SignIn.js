import React from "react";
import { Form, Input, Button, Checkbox, Space, message } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { DingtalkSquareFilled } from "@ant-design/icons";
import "../../styles/SignIn.css";
import webClient from "../../utils/WebClient";
import { useNavigate } from "react-router-dom";
import {setEmail, setToken, setUserId, setUsername} from "../../utils/LocalStorageUtils";
function SignIn() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    webClient
      .post(`http://localhost:8080/members/login`, data)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        setUserId(data.id)
        setUsername(data.name)
        setEmail(data.email)
        setToken(data.token)
        message.success("로그인 성공");
        // navigate("/");
        window.location.replace("/")
      })
      .catch((err) => {
        message.error(`로그인 실패. ${err.response.data}`);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onRegisterButtonClick = () => {
    navigate("/sign-up");
  };

  return (
    <div>
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
        <div className="SignIndiv">
          <h1 className="SignInh">
            {" "}
            <DingtalkSquareFilled />
            ALL-IN-ONE
          </h1>
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
          <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
            <Space style={{ marginBottom: 10 }}>
              <Button type="primary" htmlType="submit">
                로그인
              </Button>
              <Button type="primary" onClick={onRegisterButtonClick}>
                회원가입
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label="다른방법으로 로그인 " className="dareun">
            <GithubOutlined className="logo" />
            <TwitterOutlined className="logo" />
            <FacebookOutlined className="logo" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
