import moment from "moment";
import React, { useState } from "react";
import "../../styles/BulletinBoardIn.css";
import { Rate } from "antd";
import {
  Card,
  Col,
  Row,
  Avatar,
  Button,
  Comment,
  Form,
  Input,
  List,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";
import { Image } from "antd";
import { Divider } from "antd";

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        댓글 남기기
      </Button>
    </Form.Item>
  </>
);

function BulletinBoardIn() {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Jeong Seung Ho",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const { Meta } = Card;
  return (
    <div className="BBIdiv">
      <Row>
        <Col span={6}></Col>
        <Col span={11}>
          <Card
            title={
              <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="Jeong Seung Ho"
                description="마법사 상어와 파이어 볼 - C++"
              />
            }
            className="BBIC"
          >
            <div>
              {" "}
              <Image
                className="BBIimg"
                src="https://blog.kakaocdn.net/dn/cgxs4o/btqCWbZiAbW/DmHVgTvU1wwGpjvMlbTaUK/img.png"
              />
            </div>
            <Rate
              className="rate"
              count={1}
              character={<HeartFilled style={{ color: "red" }} />}
            />
            <b>좋아요</b>
            <>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Jeong Seung Ho"
                  />
                }
                content={
                  <Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </>
          </Card>
        </Col>
      </Row>
      <Divider id="div">ALL-IN-ONE</Divider>
    </div>
  );
}

export default BulletinBoardIn;
