import {Button, Col, Form, Input, Row, Space} from "antd";
import {useState} from "react";
import moment from 'moment';
import TextArea from "antd/es/input/TextArea";
import {SendOutlined} from "@ant-design/icons";

export default function ChatEditor({chatList, setChatList}){
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      const nextChatList = [
        ...chatList, {
        author: 'Han Solo',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: value, // <p>{value}</p>,
        datetime: moment().fromNow()
      }]
      setChatList(nextChatList);
    }, 1000);
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
          loading={submitting}
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