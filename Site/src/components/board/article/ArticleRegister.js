import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import "../../../styles/BoardRegister.css";
import { DingtalkSquareFilled } from "@ant-design/icons";
import webClient from "../../../utils/WebClient";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import TextArea from "antd/es/input/TextArea";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ArticleContent from "./ArticleContent";

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
function ArticleRegister() {
  const navigate = useNavigate();
  const [content, setContent] = useState(`# A demo of \`react-markdown\`

\`react-markdown\` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
* Has a lot of plugins

## Table of contents

Here is an example of a plugin in action
([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.

## Syntax highlighting

Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [\`rehype-raw\`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`

## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)`);

  const onFinish = (values) => {
    console.log("values: ", values);
    const data = {
      title: values.title,
      contents: values.contents,
      writerId: 1, // TODO: get user ID from JWT
      language: values.language,
    };
    console.log("data: ", data);
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
      {/* <div className="BRform">
        <h1 className="BRh">
          {" "}
          <DingtalkSquareFilled />
          ALL-IN-ONE
        </h1> */}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="Form"
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
          <Row>
            <Col span={11} className="BRCol">
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{
                  minRows: 10,
                  maxRows: 100,
                }}
              />
            </Col>
            <Col span={11}>
              <ArticleContent content={content}/>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: "제목을 입력해 주세요" }]}
        >
          <Select>
            <Select.Option value="C++">C++</Select.Option>
            <Select.Option value="Python">Python</Select.Option>
            <Select.Option value="Java">Java</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    //{" "}
    // </div>
  );
}
export default ArticleRegister;
