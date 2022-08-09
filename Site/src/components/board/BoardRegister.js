import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import "../../styles/BoardRegister.css";
import { DingtalkSquareFilled } from "@ant-design/icons";
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
  const onFinish = (values: any) => {
    console.log(values);
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
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Title"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "age"]} label="Contents">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Language">
            <Select>
              <Select.Option value="c++">C++</Select.Option>
              <Select.Option value="python">Python</Select.Option>
              <Select.Option value="Java">Java</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Code">
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
