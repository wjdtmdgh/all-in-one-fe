import React, {useState} from "react";
import "../styles/InCodeWithMe.css";
import {Checkbox, Col, Row, Select} from "antd";
import JoinMeeting from "./JoinMeeting";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import {Option} from "antd/es/mentions";

function InCodeWithMe() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [fontSize, setFontSize] = useState(20);
  const [highlightActiveLineChange, setHighlightActiveLineChange] = useState(true);


  // TODO: FontSize 변경 기능 추가
  const onFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  }

  const onCodeChange = (newCode) => {
    setCode(newCode);
  }

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  }

  const onHighlightActiveLineChange = (e) => {
    setHighlightActiveLineChange(e.target.checked);
  }

  return <Row>
    <Col span={1}>
      <Select defaultValue={language} style={{width: 120}} onChange={onLanguageChange}>
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
      <Checkbox onChange={onHighlightActiveLineChange}>Checkbox</Checkbox>
    </Col>
    <Col span={7}>
      <AceEditor
        placeholder="Placeholder Text"
        mode={language}
        theme="monokai"
        name="blah2"
        onChange={onCodeChange}
        fontSize={fontSize}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={highlightActiveLineChange}
        value={code}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}/>
    </Col>
    <Col span={1}>
      <JoinMeeting/>
    </Col>
  </Row>
}
export default InCodeWithMe;
