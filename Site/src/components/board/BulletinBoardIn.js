import moment from "moment";
import React, {useEffect, useState} from "react";
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
import webClient from "../../utils/WebClient";
import {useParams} from "react-router-dom";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const ReplyEditor = ({ onChange, onSubmit, submitting, value }) => (
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
  const {articleId} = useParams();
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [article, setArticle] = useState([]);

  useEffect(() => {
    webClient
      .get(`http://localhost:8080/articles/${articleId}`)
      .then((res) => res.data)
      .then((data) => setArticle(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                title={article.writerName}
                description={article.title + " - " + article.language}
              />
            }
            className="BBIC"
          >
            <div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {article.contents}
              </ReactMarkdown>
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
                  <ReplyEditor
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
