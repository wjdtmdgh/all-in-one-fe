import {Button, Col, Form, Input, Row, Space} from "antd";
import {useEffect, useState} from "react";
import moment from 'moment';
import TextArea from "antd/es/input/TextArea";
import {SendOutlined} from "@ant-design/icons";
import {uuidv4} from "../../../utils/UuidGenerator";

export default function ChatEditor({ws}){
  const [value, setValue] = useState('');

  // TODO websocket을 통해 메시지를 전송

  const handleSubmit = () => {
    if (!value) return;
    ws.send(`${uuidv4()}|${value}`);
    setValue('')
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <>
    <Form.Item>
      <Space>
        <Input // TODO 크기 조절 하기...
          placeholder="모든 사용자에게 메시지 보내기"
          onChange={handleChange}
          value={value}
          bordered={false}/>
        <Button
          onClick={handleSubmit}
          type="primary">
          <SendOutlined />
        </Button>
      </Space>
    </Form.Item>
    <Form.Item>
    </Form.Item>
  </>
}