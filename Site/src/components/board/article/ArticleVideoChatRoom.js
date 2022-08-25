import {
  DesktopOutlined,
  SoundOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Row, Col, Checkbox, Select } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import ReplyList from "../reply/ReplyList";
import { Option } from "antd/es/mentions";
import "../../../styles/Articlevideochatroom.css";
import AceEditor from "react-ace";
import { useState } from "react";
import "ace-builds";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
function ArticleVideoChatRoom() {
  const { articleId } = useParams();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [fontSize, setFontSize] = useState(15);
  const [readOnly, setReadOnly] = useState(false);
  const [highlightActiveLineChange, setHighlightActiveLineChange] =
    useState(true);

  const onFontSizeChange = (newFontSize) => {
    console.log(newFontSize);
    setFontSize(newFontSize);
  };

  const onCodeChange = (newCode) => {
    setCode(newCode);
  };

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const onHighlightActiveLineChange = (e) => {
    console.log(setHighlightActiveLineChange);
    setHighlightActiveLineChange(e.target.checked);
  };

  const onReadOnly = (e) => {
    setReadOnly(e.target.checked);
  };
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    getItem("Video", "1", <DesktopOutlined />),
    getItem("Record", "sub2", <VideoCameraOutlined />),
    getItem("Sound", "9", <SoundOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Jeong", "3"),
      getItem("Lee", "4"),
      getItem("Kim", "5"),
    ]),
  ];
  return (
    <div className="ARdiv">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header></Header>
          <Content>
            <Row className="ARcol">
              <Col span={7}>
                <div className="ARdd">
                  <UserOutlined className="ARicon" />
                </div>
                <div className="ARdd">
                  {" "}
                  <UserOutlined className="ARicon" />
                </div>
              </Col>
              <Col span={7}>
                <div className="ARdd">
                  {" "}
                  <UserOutlined className="ARicon" />
                </div>
                <div className="ARdd">
                  <UserOutlined className="ARicon" />
                </div>
              </Col>
              <Col span={3}>
                <div className="ARcode">
                  <Select
                    defaultValue={language}
                    style={{ width: 120 }}
                    onChange={onLanguageChange}
                  >
                    <Option value="javascript">javascript</Option>
                    <Option value="java">java</Option>
                    <Option value="python">python</Option>
                    <Option value="xml">xml</Option>
                    <Option value="ruby">ruby</Option>
                    <Option value="sass">sass</Option>
                    <Option value="markdown">markdown</Option>
                    <Option value="mysql">mysql</Option>
                    <Option value="json">json</Option>
                    <Option value="html">html</Option>
                    <Option value="handlebars">handlebars</Option>
                    <Option value="golang">golang</Option>
                    <Option value="csharp">csharp</Option>
                    <Option value="coffee">coffee</Option>
                    <Option value="css">css</Option>
                  </Select>
                </div>
                <div>
                  <Checkbox onChange={onHighlightActiveLineChange}>
                    LineHighlight
                  </Checkbox>
                </div>
                <div>
                  <Select
                    onChange={onFontSizeChange}
                    defaultValue={fontSize}
                    style={{ width: 120 }}
                  >
                    <Option value={10}>10</Option>
                    <Option value={15}>15</Option>
                    <Option value={20}>20</Option>
                    <Option value={25}>25</Option>
                  </Select>
                </div>
                <div>
                  <Checkbox onChange={onReadOnly}>ReadOnly</Checkbox>
                </div>
              </Col>
              <Col span={5}>
                {" "}
                <AceEditor
                  placeholder="Placeholder Text"
                  mode={language}
                  theme="Kuroir"
                  name="blah2"
                  onChange={onCodeChange}
                  fontSize={fontSize}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={highlightActiveLineChange}
                  readOnly={readOnly}
                  value={code}
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
              </Col>
            </Row>
          </Content>
          <Footer>
            <ReplyList articleId={articleId} />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default ArticleVideoChatRoom;
